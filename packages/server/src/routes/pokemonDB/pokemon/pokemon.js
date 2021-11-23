const express = require('express');
const router = express.Router();
const axios = require('axios');
const chalk = require('chalk');

const { Pokemon } = require('../../../models/index');

router.get('/', async (req, res, next) => {
  try {
    const { page = 1, limit = 20 } = req.query;

    const populateQuery = [
      { path: 'types', select: 'name' },
      { path: 'species', select: ['name'] },
    ];

    const pokemons = await Pokemon.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate(populateQuery)
      .exec();

    const count = await Pokemon.countDocuments();

    res.status(200).json({
      pokemons,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//  Method to extract data from Poke API
// router.post('/addAll', async (req, res, next) => {
//   try {
//     const pokemonListURL =
//       'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50';
//     const response = await axios.get(pokemonListURL);
//     const pokemonList = response.data.results;
//     let pokemons = {};

//     for (let i = 0; i < pokemonList.length; i++) {
//       const pokeApiObject = await axios
//         .get(pokemonList[i].url)
//         .then((response) => {
//           const pokeData = response.data;
//           const {
//             id,
//             name,
//             stats,
//             base_experience,
//             sprites,
//             types,
//             species,
//             abilities,
//             height,
//             weight,
//             held_items,
//             moves,
//           } = pokeData;

//           let pokemon = {
//             id,
//             name,
//             stats,
//             base_experience,
//             sprites,
//             types,
//             species,
//             abilities,
//             height,
//             weight,
//             held_items,
//             moves,
//           };
//           pokemons[pokemon.name] = pokemon;
//         });
//     }

//     // if (pokemons.length === 0) {
//     //   setTimeout(() => {
//     // return res.json({ msg: 'pokemons', pokemonList, pokemons });

//     //   }, 5000)
//     // }
//     res.status(200).json(pokemons);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
