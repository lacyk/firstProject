// "use strict";

// // const str = "Test";
// // // const arr = [1, 2, 3, 4];

// // console.log(str.toUpperCase());
// // console.log(str[2]);

// // let fruit = 'Some fruit';

// // console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world!';

// // console.log(logg.slice(6, 11));
// // console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.4;

// console.log(Math.round(num));

// const test = '12.3px';
// console.log(parseInt(test));
// let a = parseInt(test);
// console.log(typeof(a));

let obj = {
    a:1,
    b:2,
    func: function(name) {
        console.log(`Hello ${name}, nice to meet you !!!`);
    }
};

obj.func('Lac');

obj.a = 12;
console.log(obj.a);

