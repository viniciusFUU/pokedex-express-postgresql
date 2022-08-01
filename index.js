require("dotenv").config();
const express = require("express");
const { read } = require("fs");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 01,
    nome: "bulbassaur",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Planta",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    altura: "0.7 m",
    peso: "6.9 kg",
    habilidade: "Overgrow",
  },

  {
    id: 02,
    nome: "charmander",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "fogo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    altura: "0.6 m",
    peso: "8.5 kg",
    habilidade: "Blaze",
  },

  {
    id: 03,
    nome: "squirtle",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "agua",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    altura: "0.5 m",
    peso: "9.0 kg",
    habilidade: "Torrent",
  },

  {
    id: 04,
    nome: "Electabuzz",
    descricao:
      "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
    tipo: "Electric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    altura: "1.1 m",
    peso: "30.0 kg",
    habilidade: "Static",
  },

  {
    id: 05,
    nome: "Snorlax",
    descricao:
      "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
    tipo: "normal",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    altura: "2.1 m",
    peso: "460.0 kg",
    habilidade: "Thick Fat",
  },

  {
    id: 06,
    nome: "Gengar",
    descricao:
      "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar’s doing.",
    tipo: "Shadow",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    altura: "1.5 m",

    peso: "40.5 kg",
    habilidade: "Cursed Body",
  },
];

let pokemon = undefined;

//rotas
app.get("/", (req, res) => {
  res.render("index", { pokedex, pokemon });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;

  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);

  res.redirect("/#cards");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/#cadastro");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;

  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;

  pokemon = undefined;
  res.redirect("/#cards");
});

app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;

  delete pokedex[id];

  res.redirect("/#cards");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
