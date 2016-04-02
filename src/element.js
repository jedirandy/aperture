export default class Element {
    constructor({
        elementType = 'div',
        style,
        className
    } = {}) {
        this.domNode = document.createElement(elementType);
        this.style = style;
        this.className = className;
    }

    set className(className) {
        if (className)
            this.domNode.setAttribute('class', className);
    }

    get className() {
        return this.domNode.getAttribute('class');
    }

    set style(style) {
        for (let styleName in style) {
            this.domNode.style[styleName] = style[styleName];
        }
    }

    get style() {
        return this.domNode.style;
    }

    appendTo(target) {
        if (target instanceof HTMLElement)
            target.appendChild(this.domNode);
        else if (target instanceof Element)
            target.domNode.appendChild(this.domNode);
        return this;
    }

    removeAllChildren() {
        while(this.domNode.firstChild) {
            this.domNode.removeChild(this.domNode.firstChild);
        }
    }
}