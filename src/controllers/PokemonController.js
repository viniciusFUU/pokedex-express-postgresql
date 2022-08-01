const Pokemon = require("../models/Pokemon");

const getAll = async (req, res) => {
  try {
    const pokedex = await Pokemon.findAll();
    res.render("index", { pokedex, pokemon: undefined });
  } catch (err) {
    res.status(500).send({ ett: err.message });
  }
};

module.exports = {
  getAll,
};
