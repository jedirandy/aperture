// mock items
var numOfItems = 10000;
var items = new Array(numOfItems);
for (var i = 0; i < items.length; ++i) {
    items[i] = i;
}

var container = document.querySelector('.container');
var ap = new Aperture({
    items: items,
    itemHeight: 18
});

ap.renderTo(container, function(element, item) {
    var ele = document.createElement('div');
    ele.innerHTML = item;
    element.appendChild(ele);
});