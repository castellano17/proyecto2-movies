const movieController = require("./movies.controllers");

const getAllMovies = (req, res) => {
    movieController
        .findAllMovies()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err });
        });
};

const getMovieByID = (req, res) => {
    const id = Number(req.params.id);
    movieController
        .findMovieById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Movie not found" });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err });
        });
};

const postNewMovie = (req, res) => {
    const movieObj = req.body;
    movieController
        .createMovie(movieObj)

        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err });
        });
};

const postUpdate = (req, res) => {
    const id = Number(req.params.id);
    const movieData = req.body;

    movieController
        .movieput(id, movieData)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Movie not found" });
            }
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err });
        });
};

const deleteId = (req, res) => {
    const id = Number(req.params.id);
    movieController
        .deleteMovieById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Movie not found" });
            }
            res.status(200).json({ message: "Movie successfully removed" });
        })
        .catch((err) => {
            res.status(400).json({ message: err });
        });
};

module.exports = {
    getAllMovies,
    getMovieByID,
    postNewMovie,
    postUpdate,
    deleteId,
};
