export function removeChildren(node) {
    while(node.firstChild) {
        node.removeChild(node.firstChild);
    }
}