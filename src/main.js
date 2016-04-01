import HTMLBlock from './htmlBlock';
import Viewport from './viewport';
import * as util from './util';
class Aperture {
    constructor({
        height = 200,
        items = [],
        itemHeight = 18
    } = {}) {
        this.element = document.createElement('div');
        this.element.style.height = height + 'px';
        this.element.style.overflow = 'auto';
        this.element.style.position = 'relative';
        this.element.setAttribute('class', 'aperture');
        this.items = items;
        this.itemHeight = itemHeight;
        this.viewport = new Viewport({
            height,
            itemHeight,
            className: 'viewport'
        }).appendTo(this.element);
        this.viewport.style.position = 'absolute';
        this.viewport.style.width = '100%';
        this.filler = new HTMLBlock().appendTo(this.element);
    }

    getLayout() {
        let totalHeight = this.items.length * this.itemHeight;
        let contentHeight = Math.ceil(this.viewport.height / this.itemHeight) * this.itemHeight;
        let numOfItemsToRender = Math.ceil(contentHeight / this.itemHeight);
        return {
            totalHeight,
            numOfItemsToRender,
            contentHeight
        };
    }

    render() {
        let {
            totalHeight,
            numOfItemsToRender
        } = this.getLayout();

        let top = Math.min(this.element.scrollTop, Math.max(totalHeight - this.viewport.height, 0));
        this.filler.height = totalHeight;
        this.viewport.element.style.top = top + 'px';
        let startIndex = Math.min(
            Math.floor(top / this.itemHeight),
            Math.max(items.length - numOfItemsToRender)
        );
        let endIndex = startIndex + numOfItemsToRender;
        this.viewport.render(this.items.slice(startIndex, endIndex));
    }

    renderTo(target, renderFn) {
        target.appendChild(this.element);
        this.render();
        this.element.addEventListener('scroll', event => {
            requestAnimationFrame(() => this.render());
        });
    }
}

module.exports = Aperture;