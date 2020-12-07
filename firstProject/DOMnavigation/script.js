'use strict';

// console.log(document.body.childNodes);

// console.log(document.querySelector('#current').parentNode);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}