export default class HTMLBlock {
    constructor({
        height = 200,
        className = ''
    } = {}) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', className);
        this.height = height;
    }

    set height(h) {
        this._height = h;
        this.element.style.height = this._height + 'px';
    }

    get height() {
        return this._height;
    }

    get style() {
        return this.element.style;
    }

    appendTo(target) {
        target.appendChild(this.element);
        return this;
    }
}