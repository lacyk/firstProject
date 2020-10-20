"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    remember: function rememberMyFilms () {

                for (let i = 0; i < personalMovieDB.count; i++) {

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
            },

    show: function showMyDB(hidden) {

                if (!hidden) {
                    console.log(personalMovieDB);
                }
            },

    writeGenres: function writeYourGenres (){


                for (let i = 1; i <= 3; i++) {
            
                    const a = prompt(`Which is your number ${i} favourite genre ?`);
            
                    if (a != '' && a != null) {
                        personalMovieDB.genres.push(a);
                    } else {
                        i--;
                        continue;
                    }
                }
                // personalMovieDB.genres.forEach(element => console.log(element));
                personalMovieDB.genres.forEach((item, i) => {
                    console.log(`Favorite genre N${i+1} is ${item}`); 
                });
            },
            
    myLvl: function detectPersonalLevel() {
        if (1 <= personalMovieDB.count < 10) {
            console.log('Ur shitty filmoman');
        } else if (10 < personalMovieDB.count < 30){
            console.log('Ur common filmoman');
        } else if (personalMovieDB.count > 30){
            console.log('Ur fckng filmoman');
        } else {
            console.log('ERROR');
        }    
    },

    toggle: function toggleVisibleMyDB(param) {
        // if (param != true) {
        //     param = true;
        //     personalMovieDB.privat = param;
        // } else {
        //     param = false;
        //     personalMovieDB.privat = param;
        // }
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        

        return param;
    },

    startT: function start() {
        personalMovieDB.count = +prompt('How many films did you watch?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films did you watch?', '');
        }
    }
};


// console.log(personalMovieDB.toggle(personalMovieDB.privat));

// personalMovieDB.startT();
// personalMovieDB.remember();
personalMovieDB.writeGenres();
// personalMovieDB.show(personalMovieDB.privat);


// writeYourGenres();
// showMyDB(personalMovieDB.privat);