"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы оцените его?', ''),
      c = prompt('Ваш любимый актер из этого фильма?', ''),
      d = prompt('Какой жанр у этого фильма?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.actors[0] = c;
personalMovieDB.genres[0] = d;

console.log(personalMovieDB);
