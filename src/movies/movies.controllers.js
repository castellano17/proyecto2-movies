const movieDb = [
    {
        id: 1,
        title: "Pacific Rim",
        description: "Lorem Ipsum",
        year: 2012,
        director: "Guillermo del Toro",
    },
];

let idMovie = 2;

const findAllMovies = async () => {
    return movieDb;
};

const findMovieById = async (id) => {
    const movie = movieDb.find((movieItem) => movieItem.id === id);

    return movie;
};

const createMovie = async (movieOjb) => {
    const newMovie = {
        id: idMovie++,
        title: movieOjb.title || "Untitled",
        description: movieOjb.description || null,
        year: movieOjb.year || null,
        director: movieOjb.director || "Anonymus",
    };
    movieDb.push(newMovie);

    return newMovie;
};

const movieput = async (id, movieData) => {
    const movieIndex = movieDb.findIndex((movie) => movie.id === id);
    if (movieIndex !== -1) {
        return (movieDb[movieIndex] = {
            ...movieDb[movieIndex],
            ...movieData,
        });
    }
};

const deleteMovieById = async (id) => {
    const movieIndex = movieDb.findIndex((movie) => movie.id === id);
    if (movieIndex !== -1) {
        movieDb.splice(movieIndex, 1);
        return true;
    }
    return false;
};

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    movieput,
    deleteMovieById,
};
