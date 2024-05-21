const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    
    personalMovieDb.movies[a] = b;
}

console.log(personalMovieDb);