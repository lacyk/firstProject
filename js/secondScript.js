"use strict";

function showFirstMessege(text) {
    console.log(text);
    
}
showFirstMessege("Hi mate");

function calc (a, b) {
    return (a + b);
}

console.log(calc(2, 3));


function ret() {
    let num = 50;
    return num;
}
const anothNum = ret();
console.log(anothNum);

const logger = function() {
    console.log('Hit Jupiter');
};

logger();

const calc1 = (a, b) => (a + b);