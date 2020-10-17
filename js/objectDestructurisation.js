"use strict";

// function showFirstMessege(text) {
//     console.log(text);
    
// }
// showFirstMessege("Hi mate");

// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(2, 3));


// function ret() {
//     let num = 50;
//     return num;
// }
// const anothNum = ret();

// console.log(anothNum);
// console.log(ret());

// const logger = function() {
//     console.log('Hit Jupiter');
// };

// logger();

// const calc1 = (a, b) => (a + b);

 const options = {
     name: 'test',
     width: 1024,
     height: 1024,
     colors: {
         border: 'black',
         bg: 'red'
     },
     makeTest: function() {             // написання власного методу типу .назва 
         console.log('Testing');
     }
 };

 const {border, bg} = options.colors; //деструктуризація об'єкту | ми витягрули об'єкт з іншого об'єкту в якості змінної


// console.log(options.name);
// delete options.name;
// console.log(options.name);

//  перебір + підрахунок усіх пар в об'єкті

// let counter = 0;
// for (let key in options) { 
//     if (typeof(options[key]) === 'object') {

//         for (let i in options[key]) {
//             console.log(`Option: ${i} and have ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Option: ${key} and have ${options[key]}`);
//         counter++;
//     }
// } 
// console.log(counter);

console.log(Object.keys(options).length); //  перебір + підрахунок усіх пар в об'єкті 2й простіший варіант



const arr = [1, 42, 35, 16, 38];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}
// arr.pop();
// arr.push(10);

arr.forEach(function (item, i, arr){
    console.log(`${i}: ${item} in massive ${arr}`);
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join(': ')); 
