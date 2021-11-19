const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const axios = require('axios');
const { GrowthRate, Species } = require('../../../models/pokemonDB/index');

const toId = mongoose.Types.ObjectId;

router.get('/', async (req, res, next) => {
  try {
    const species = await Species.find({});

    res.status(200).json({ msg: 'Species Endpoint', species });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// TODO link evolution chain (update the model) once created
router.post('/addAll', async (req, res) => {
  try {
    const pokeApiListURL = 'https://pokeapi.co/api/v2/pokemon-species/?limit=898&offset=0';
    const response = await axios.get(pokeApiListURL);
    const speciesListURLs = response.data.results;

    for (let i = 0; i < speciesListURLs.length; i++) {
      const response = await axios.get(speciesListURLs[i].url);
      const species = response.data;

      const {
        capture_rate,
        color,
        id,
        name,
        is_legendary,
        is_mythical,
        growth_rate,
      } = species;

      // find growthRate objectID and save it
      const foundGrowthRate = await GrowthRate.findOne({
        name: growth_rate.name,
      });
      if (!foundGrowthRate) {
        return res.status(500).json({ error: 'Growth rate not found.' });
      }

      // save to db
      const newSpecies = new Species({
        pokeApiID: id,
        name: name,
        capture_rate: capture_rate,
        // evolution_chain: {},
        growth_rate: foundGrowthRate._id,
        is_legendary: is_legendary,
        is_mythical: is_mythical,
        color: color.name,
      });

      await newSpecies.save();
    }

    res.status(200).json({ msg: 'All is well' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
