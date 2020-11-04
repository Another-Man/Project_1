"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films did you watch?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films did you watch?', '');
        }
    },
    moviesQuestions: function() {
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
    },
    genresQuestions: function () {
            for (let i = 1; i < 2; i++) {
                let a = prompt(`Write down your favourite movie genres devided by ", "`, '');

                if (a != null && a != '') {
                    personalMovieDB.genres = a.split(', ');
                    console.log('Done!');
                } else {
                    console.log('Error!');
                    i--;
                }
                personalMovieDB.genres.forEach((item, i) => {
                    console.log(`Your favourite genre #${i + 1} - is ${item}`);
                });
            }
    },
    countAnswer: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
            alert("So... you're not that into movies, huh?");
        } else if (personalMovieDB.count < 30 && personalMovieDB.coumt >= 10) {
            alert("You're an amateure. (but in a good way!)");
        } else if (personalMovieDB.count >= 30) {
            alert("You're a cinema MANIAC!!!");
        } else {
            alert("Something's wrong! :c");
        }
    },
    privateQuestions: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    privateCheck: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};



