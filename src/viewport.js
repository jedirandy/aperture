import * as util from './util';
import HTMLBlock from './htmlBlock';

class Viewport extends HTMLBlock {
    constructor(config) {
        super(config);
        let {
            itemHeight,
            height
        } = config;
        this.height = Math.ceil(this.height / itemHeight) * itemHeight;
    }

    get defaultRenderFn() {
        return (element, item) => {
            let ele = document.createElement('div');
            ele.innerHTML = item;
            element.appendChild(ele);
        }
    }
    render(items, renderFn = this.defaultRenderFn) {
        util.removeChildren(this.element);
        for (let i = 0; i < items.length; ++i) {
            renderFn(this.element, items[i]);
        }
    }
}

export default Viewport;