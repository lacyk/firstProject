"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 1,
    b: 5
};

// const copy = obj;

copy.a = 10;
console.log(copy);
console.log(obj);

function copy (mainObject) {
    let objCopy = {};

    let key;
    for (key in mainObject) {
        objCopy[key] = mainObject[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5, 
    c: {
        x: 8,
        y: 7
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10; 
console.log(numbers);
console.log(newNumbers);

const add = {
    d: 14, 
    n: 54
};

console.log(Object.assign(numbers, add));

console.log(numbers);

const clone = Object.assign({}, add);
console.log(clone);

const clone2 = Object.assign({},numbers, add);

clone2.c.x = 22;
clone2.a = 11;
console.log(clone2);
console.log(numbers);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'TTT';
// oldArray[1] = '';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vim', 'rutracker'],
      blogs = ['wordpress', 'UAblogger', 'liveJournal'],
      internet = [...video, ...blogs, 'bk', 'facebook'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAaaray = [...array];
console.log(newAaaray);



const ob = {
    a: 5,
    b: 2,
    c: {
        GPU: 14
    }
};

// const newAaray = {...ob};
// console.log(newAaray);

function dd(par) {
    par = par * 2;
    ob.a = par;
}

console.log(ob.a);
dd(ob.a);
console.log(ob.a);
