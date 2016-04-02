# Aperture

:camera: A JavaScript library providing a virtual scrolling container, allows (very large) datasets to be displayed with high performance and memory efficiency.

What it provides:
* A scrollable container that renders only visible items
* a flexible configuration making it works with different structures such as lists or tables

What it doesn't provide:
* how items are rendered, how layout looks like, they are completely left to you
* styling

## Example

* constructs a list of divs:

```js
var aperture = new Aperture({
    items: items, // array of dataset
    onRender: (container, item, index, relativeIndex) => {
        let div = document.createElement('div');
        div.setAttribute('n-' + relativeIndex);
        div.innerHTML = item;
        container.appendChild(container);
    },
    onRerender: (container, item, index, relativeIndex) => {
        let div = document.getElementById('n-' + relativeIndex);
        div.innerHTML = item;
    }
});
aperture.renderTo(aDomElement);
```

## License
MIT