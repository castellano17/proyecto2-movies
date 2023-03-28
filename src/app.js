const express = require("express");

const app = express();

const movieRouter = require("./movies/movies.router");

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server ok" });
});

app.use("/", movieRouter);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

module.exports = app;
