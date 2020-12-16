'use strict';

// console.log(document.body.childNodes);

// console.log(document.querySelector('#current').parentNode);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} exited from this webpage!`);
};

const ivan = new User('Ivan', 23);
ivan.hello();
ivan.exit();

// console.log(ivan);  