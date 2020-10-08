"use strict";

function first () {
    setTimeout (function() {
        console.log(1);
    }, 500);
}

function second (){
    console.log(2);
}

first();
second();

function learnJS (lang, callback) {
     console.log(`I learn: ${lang}`);
     callback();
}

function done () {
    console.log(`I've done this lesson`);
}

learnJS (`JavaScript`, done);

// learnJS (`JavaScript`, function () {  // передача анонімної фу-ії
//     console.log(`I've done this lesson`);
// });