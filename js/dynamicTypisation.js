"use strict";

// to string 

// 1)
console.log(typeof(String(null)));

// 2)
console.log(5 + '');

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// to number 

// 1)
console.log(typeof(Number('5')));
console.log(typeof(+'5'));

// 2)
console.log(typeof(parseInt('15px', 10)));
console.log(parseInt('15px', 10));

// too bolean

// 1)
// 0, null, undefined, '', NaN;

let switcher = null;

switcher = 1;
if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4'));


// true = 1; false = 0;
let a = 'true',
    b = false;

console.log(a - a - a);

console.log(a[2]);
