"use strict";


let numberOfFilms;


function start() {
    numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("посмотрено мало фильмов");
        } else if (10 <= personalMovieDB.count && personalMovieDB < 30) {
            alert("классич зритель");
        } else if (personalMovieDB.count > 30) {
            alert("киноман ты");
        } else {
            alert('произошла ошибка');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB.privat);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == " " || genre == null) {
                console.log('ne pravilni');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`любимый жанр ${i + 1} - it is ${item}`);
        });
    }

};







console.log(personalMovieDB);
