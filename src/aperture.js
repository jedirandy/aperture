import Element from './element';
import * as util from './util';
export default class Aperture {
    constructor({
        onInit = util.identity,
        onRender = util.identity,
        onRerender = util.identity,
        onScroll = util.identity,
        onOverflow = util.identity,
        items = [],
        height = '100%'
    } = {}) {
        this.container = new Element({
            className: 'aperture',
            style: {
                position: 'relative',
                overflow: 'hidden',
                height: height
            }
        });
        this.viewport = new Element({
            className: 'viewport',
            style: {
                position: 'absolute',
                top: 0
            }
        }).appendTo(this.container);
        this.scrollable = new Element({
            className: 'scrollable',
            style: {
                height: '100%',
                position: 'absolute',
                top: 0,
                right: 0,
                overflow: 'auto'
            }
        }).appendTo(this.container);
        this.filler = new Element({
            className: 'filler'
        }).appendTo(this.scrollable);

        this.items = items;
        this.onInit = onInit;
        this.onRender = onRender;
        this.onRerender = onRerender;
        this.onScroll = onScroll;
        this.onOverflow = onOverflow;
        this.config = {
            itemStartIndex: 0,
            defaultScrollbarWidth: 16,
            initHeight: 0,
            itemHeight: 0,
            totalHeight: 0,
            numOfItemsToRender: 0,
            numOfPlaceholders: 1
        };
    }

    init() {
        this.onInit(this.viewport.domNode);
        this.config.initHeight = this.viewport.domNode.offsetHeight;
    }

    render() {
        let i = 0;
        while (this.viewport.domNode.scrollHeight < this.container.domNode.scrollHeight && i < this.items.length) {
            this.onRender(this.viewport.domNode, this.items[i], i, i - this.config.itemStartIndex);
            ++i;
        }
        this.config.numOfItemsToRender = i;
        this.config.itemHeight = (this.viewport.domNode.scrollHeight - this.config.initHeight) / this.config.numOfItemsToRender;
        this.config.totalHeight = this.config.itemHeight * this.items.length +
            this.config.itemHeight * this.config.numOfPlaceholders;
    }

    updateLayout() {
        this.filler.style.height = this.config.totalHeight + 'px';
        let scrollbarWidth = this.scrollable.domNode.offsetWidth - this.scrollable.domNode.clientWidth;
        this.scrollable.style.width = (scrollbarWidth || this.config.defaultScrollbarWidth) + 'px';
        this.viewport.style.width = (1 - scrollbarWidth / this.container.domNode.clientWidth) * 100 + '%';
    }

    handleWheel(event) {
        let browser = util.browser;
        if (browser.isBlink || browser.isSafari) {
            let wheelEvent = new WheelEvent('wheel', {
                deltaX: event.deltaX,
                deltaY: event.deltaY,
                deltaZ: event.deltaZ,
                deltaMode: event.deltaMode
            });
            this.scrollable.domNode.dispatchEvent(wheelEvent);
        } else {
            this.scrollable.domNode.scrollTop += event.deltaY;
        }
    }

    handleScroll(event) {
        let scrollTop = this.scrollable.domNode.scrollTop;
        let startIndex = Math.ceil(scrollTop / this.config.itemHeight);
        let endIndex = startIndex + this.config.numOfItemsToRender - 1;
        this.onScroll(this.viewport.domNode, this.items, startIndex, endIndex);
        while (endIndex >= this.items.length) {
            this.onOverflow(this.viewport.domNode, endIndex - startIndex);
            endIndex --;
        }
        for (let i = startIndex; i <= endIndex; ++i) {
            this.onRerender(
                this.viewport.domNode,
                this.items[i],
                i,
                i - startIndex, // index related to the visible items
                i >= this.items.length);
        }
    }

    renderTo(target) {
        target.appendChild(this.container.domNode);
        this.init();
        this.render();
        this.updateLayout();
        this.container.domNode.addEventListener('wheel', event => {
            event.preventDefault();
            this.handleWheel(event);
        });

        this.scrollable.domNode.addEventListener('scroll', event => {
            if (requestAnimationFrame) {
                requestAnimationFrame(() => this.handleScroll(event));
            } else {
                this.handleScroll(event);
            }
        });
    }
}
