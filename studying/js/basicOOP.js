"use strict";

let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('Hello User 1');
    }
};

const john = Object.create(soldier);

// const john = {       // не робимо так; вписуємо відрізняючі дані під час створення об'єкту 
//     health: 100
// };

// john.__proto__ = soldier;  // old method
console.log(john.armor);

Object.setPrototypeOf(john, soldier);

john.sayHello();