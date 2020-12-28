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

// const btn = document.querySelector('.bobb');

// btn.addEventListener('click', function (e) {
//     console.log(e);
//     e.target.style.backgroundColor = 'red';
//     e.target.style.fontSize = "50px";
//     // this.style.backgroundColor = 'red';
// });

// function Kratka(num) {
//     for (let i = 0; i < num; i++) {
//         const a = '#';
//         console.log(a.repeat(i+1));
//     }
// }

// Kratka(4);


const obj = {
    name: 'John',
    age: 26,  
    sayGreetings() {
        console.log(this.name);
    }
};
obj.sayGreetings();