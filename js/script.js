"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько вы оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }


}

// let i = 0;

// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//         i++;
//     } else {
//         console.log('Error!');
//         i--;
//     }


// }

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//         i++;
//     } else {
//         console.log('Error!');
//         i--;
//     }


// }
// while (i < 2);

console.log(personalMovieDB);

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    alert('Вы посмотрели довольно мало фильмов!');
} else if (personalMovieDB.count < 30 && personalMovieDB.coumt >= 10) {
    alert('Вы - любитель!');
} else if (personalMovieDB.count >= 30) {
    alert('Вы посмотрели много фильмов!');
} else {
    alert('Произошла ошибка!');
}
