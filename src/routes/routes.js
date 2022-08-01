const routes = require("express").Router();
const PokemonController = require("../controllers/PokemonController");
routes.get("/", PokemonController.getAll);

module.exports = routes;
