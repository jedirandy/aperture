// mock items
var numOfItems = 10000;
var items = new Array(numOfItems);
for (var i = 0; i < items.length; ++i) {
    items[i] = i;
}

var container = document.querySelector('.container');
var ap = new Aperture({
    items: items,
    onInit: function(element) {
        var table = document.createElement('table');
        var header = document.createElement('thead');
        var headerRow = document.createElement('tr');
        var h = document.createElement('th');
        h.innerHTML = 'id';
        var body = document.createElement('tbody');
        headerRow.appendChild(h);
        header.appendChild(headerRow);
        table.appendChild(header);
        table.appendChild(body); 
        element.appendChild(table);
    },
    onRender: function(element, item, i) {
        var body = element.querySelector('tbody');
        var row = document.createElement('tr');
        var td = document.createElement('td');
        row.setAttribute('id', 'row-' + i);
        td.innerHTML = item;
        row.appendChild(td);
        body.appendChild(row);
    },
    onRerender: function(element, item, i, ri, isOverflow) {
        var row = document.getElementById('row-' + ri);
        row.firstChild.innerHTML = item;
    },
    onOverflow: function(element, index) {
        var row = document.getElementById('row-' + index);
        row.firstChild.innerHTML = '';
    }
});

ap.renderTo(container, function(element, item) {
    var ele = document.createElement('div');
    ele.innerHTML = item;
    element.appendChild(ele);
});