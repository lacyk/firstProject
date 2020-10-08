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

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films did you watch?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you watch?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {

    for (let i = 0; i < numberOfFilms; i++) {

        const a = prompt("One of latest watched film", ''),
              b = prompt("How do you like it ? (0-10)", '');
    
            if (a.length < 50 ||  a != '' || b != '' || a != null || b != null) {

                personalMovieDB.movies[a] = b;

            } else {
                console.log("shit, you`ve made a mistake");
                i--;
                continue;
            }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (1 <= personalMovieDB.count < 10) {
        console.log('Ur shitty filmoman');
    } else if (10 < personalMovieDB.count < 30){
        console.log('Ur common filmoman');
    } else if (personalMovieDB.count > 30){
        console.log('Ur fckng filmoman');
    } else {
        console.log('ERROR');
    }    
}

// detectPersonalLevel();


// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
 

function writeYourGenres (){


    for (let i = 1; i < 4; i++) {

        const a = prompt(`Which is your number ${i} favourite genre ?`);

        if (a != '' || a != null) {
            personalMovieDB.genres.push(a);
        } else {
            i--;
            continue;
        }
    }
}

writeYourGenres();
showMyDB(personalMovieDB.privat);