const routes = require("express").Router();
const PokemonController = require("../controllers/PokemonController");
routes.get("/", PokemonController.getAll);
routes.get("/signup", PokemonController.signup);

module.exports = routes;
