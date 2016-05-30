# Aperture

[![Build Status](https://travis-ci.org/jedirandy/aperture.svg?branch=master)](https://travis-ci.org/jedirandy/aperture)
[![Dependency Status](https://www.versioneye.com/user/projects/57082104fcd19a00415b0fff/badge.svg?style=flat)](https://www.versioneye.com/user/projects/57082104fcd19a00415b0fff)
[![npm module](https://badge.fury.io/js/aperturejs.svg)](https://www.npmjs.org/package/aperturejs)

:camera: A JavaScript library providing a virtual scrolling container, allows (very large) datasets to be displayed with high performance and memory efficiency.

What it provides:
* A scrollable container that renders only visible items
* a flexible configuration making it works with different structures such as lists or tables

What it doesn't provide:
* how items are rendered, how layout looks like, it's in your hands

## Install
```
npm install aperturejs
```

## Example

* constructs a list of divs:

```js
var aperture = new Aperture({
    items: items, // array of dataset
    onRender: (container, item, index, relativeIndex) => {
        let div = document.createElement('div');
        div.setAttribute('id', 'n-' + relativeIndex);
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
