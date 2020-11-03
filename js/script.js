"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films did you watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you watch?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("What's the name of the latest one?", ''),
              b = prompt('How did you like it?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--;
        }
    
    
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite movie genre #${i}`, '');
    }
}

writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        alert("So... you're not that into movies, huh?");
    } else if (personalMovieDB.count < 30 && personalMovieDB.coumt >= 10) {
        alert("You're an amateure. (but in a good way!)");
    } else if (personalMovieDB.count >= 30) {
        alert("You're a cinema MANIAC!!!");
    } else {
        alert("Something's wrong! :c");
    }
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);