"use strict";

// const obj = {
//     name: "John",
//     age: 25, 
//     isMarried: true

// };

// console.log(obj.isMarried);

// let arr = ['apple.jpg', 'grapes.png', 5, 'strawberry.gif', [], {}];  
// console.log(arr[5]);


// const answr = prompt ("Are you 18 ?", "");
// console.log(typeof(answr));

// const answers = [];

// // answers[0] = prompt ('How are you?', '');
// // answers[1] = prompt ('How old are you?', '');
// // answers[2] = prompt ('What is your name?', ''); 

// console.log(typeof(answers));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/4`);

// if (4 == 9) {
//     console.log('ok');
// } else {
//     console.log('ohohoho');
// }


// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100){
//     console.log('Too much');
// } else {
//     console.log('Yes !');
// }

// let num = 50;

// (num === 50) ? console.log("Ok!") : console.log('Error!');

// switch (num) {
//     case 49:
//         console.log('Not true');
//         break; 
//     case 100:
//         console.log('Not true');
//         break; 
//     case 50:
//         console.log('TRUE');
//         break;
//     default:
//         console.log('Not this time');
//         break;
// }

// while (num <= 55){
//     console.log(num);
//     num++;
// } 

// do {
//     console.log(num);
//     num++;
// } while (num <= 55); 

// for (let i = 1; i < 10 ; i++){
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }

const numberOfFilms = +prompt('How many films did you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of latest watched film", ''),
      b = prompt("How do you like it ? (0-10)", ''),
      c = prompt("One of latest watched film", ''),
      d = prompt("How do you like it ? (0-10)", '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

console.log(personalMovieDB.count);
console.log(a.length);


