import Element from '../src/element';
describe('Element tests', () => {
    it('create a HTMLElement (div as default) in construction', () => {
        let e = new Element({
            elementType: 'p'
        });
        expect(e.domNode instanceof HTMLElement).to.equal(true);
        expect(e.domNode.tagName).to.equal('P');
        e = new Element();
        expect(e.domNode.tagName).to.equal('DIV');
    });

    it('set style', () => {
        let e = new Element();
        e.style = {
            height: '100px'
        };
        expect(e.domNode.style.height).to.equal('100px');
    });

    it('appentTo a HTMLElement', () => {
        let htmlElement = document.createElement('div');
        let e = new Element().appendTo(htmlElement);
        expect(htmlElement.firstChild).to.equal(e.domNode);
    });

    it('appendTo an Element', () => {
        let e = new Element();
        let e1 = new Element().appendTo(e);
        expect(e.domNode.firstChild).to.equal(e1.domNode);
    });

    it('removeAllChildren() removes all child nodes', () => {
        let e = new Element();
        for (let i = 0; i < 10; ++i) {
            e.domNode.appendChild(document.createElement('div'));
        }
        expect(e.domNode.childNodes).to.have.length(10);
        e.removeAllChildren();
        expect(e.domNode.childNodes).to.have.length(0);
    });
});