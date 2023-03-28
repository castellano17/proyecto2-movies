const router = require("express").Router();

const movieServices = require("./movies.services");

router.get("/movies", movieServices.getAllMovies);
router.get("/movies/:id", movieServices.getMovieByID);
router.post("/movies", movieServices.postNewMovie);
router.put("/movies/:id", movieServices.postUpdate);
router.delete("/movies/:id", movieServices.deleteId);

module.exports = router;
