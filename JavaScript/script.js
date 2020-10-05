"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы оцените его?', ''),
      c = prompt('Какую роль играл ваш любимый актер из этого фильма?', ''),
      d = prompt('как зовут этого актера?', ''),
      e = prompt('Какой жанр у этого фильма?', ''),
      f = confirm('Вы смотрели его в одиночестве, или с другом?');

personalMovieDB.movies[a] = b;
personalMovieDB.actors[c] = d;
personalMovieDB.genres[0] = e;
personalMovieDB.private = f;

console.log(personalMovieDB);
