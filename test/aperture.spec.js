import Aperture from '../src/aperture';
describe('Apertue tests', () => {
    let wrapper = document.createElement('div');
    wrapper.style.height = '500px';
    wrapper.style.width = '500px';
    before(() => {
        document.body.appendChild(wrapper);
    });

    afterEach(() => {
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
    });

    after(() => {
        document.body.removeChild(wrapper);
    });

    describe('constructor()', () => {
        it('sets up properties', () => {
            let ap = new Aperture();
            expect(ap).to.have.property('container');
            expect(ap).to.have.property('viewport');
            expect(ap).to.have.property('scrollable');
            expect(ap).to.have.property('scrollable');
        });
    });

    describe('init()', () => {
        it('executes the onInit function and calculates the initial height', () => {
            let ap = new Aperture({
                onInit: (node) => {
                    let div = document.createElement('div');
                    div.style.height = '100px';
                    node.appendChild(div);
                }
            });
            wrapper.appendChild(ap.container.domNode);
            ap.init();
            expect(ap.config.initHeight).to.equal(100);
        });
    });

    describe('render()', () => {
        let ap = new Aperture({
            onRender: (node, item, i) => {
                let div = document.createElement('div');
                div.style.height = '100px';
                node.appendChild(div);
            },
            items: [0, 1, 2, 3, 4, 5]
        });

        it('renders the items until the viewport is full and calculates the layout', () => {
            wrapper.appendChild(ap.container.domNode);
            ap.render();
            expect(ap.config.numOfItemsToRender).to.equal(5);
            expect(ap.config.itemHeight).to.equal(100);
            expect(ap.config.totalHeight).to.equal(600 + 100);
        });
    });

    describe('updateLayout()', () => {
        let ap = new Aperture();
        it('updates filler height and scrollable width', () => {
            wrapper.appendChild(ap.container.domNode);
            ap.config.totalHeight = 600;
            ap.updateLayout();
            expect(ap.filler.domNode.scrollHeight).to.equal(600);
            expect(ap.scrollable.domNode.offsetWidth).to.equal(16);
            expect(ap.viewport.domNode.clientWidth).to.equal(500 - 16);
        });
    });

    describe('renderTo()', () => {
        let ap = new Aperture();
        it('renders to a dom node', () => {
            let node = document.createElement('div');
            ap.renderTo(node);
            expect(node.firstChild).to.equal(ap.container.domNode);
        });
    });
});
