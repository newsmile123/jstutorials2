"use strict";


const numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');


    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
          
}


if (personalMovieDB.count < 10) {
    alert("посмотрено мало фильмов");
} else if (10 <= personalMovieDB.count && personalMovieDB < 30) {
    alert("классич зритель");
} else if (personalMovieDB.count > 30) {
    alert("киноман ты");
} else {
    alert('произошла ошибка');
}


console.log(personalMovieDB);




