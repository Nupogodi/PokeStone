const express = require('express');
const router = express.Router();
const axios = require('axios');
const { GrowthRate, Species, Trigger } = require('../../../models/index');
const chalk = require('chalk');

router.get('/', async (req, res, next) => {
  try {
    const triggers = await Trigger.find({});

    res.status(200).json({ msg: 'Trigger Endpoint', triggers });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// IS INCORRECT FOR TRIGGERS
// update growth rate model with species list reference ID
// router.put('/updateAll', async (req, res) => {
//   try {
//     const pokeApiListURL = 'https://pokeapi.co/api/v2/trigger/';
//     const response = await axios.get(pokeApiListURL);
//     const triggerListURLs = response.data.results;

//     // loop over the trigger list
//     for (let i = 0; i < triggerListURLs.length; i++) {
//       const currentTriggerApiObject = await axios.get(
//         triggerListURLs[i].url
//       );
//       const currentTriggerRate = currentTriggerApiObject.data;

//       const currentTriggerName = currentTrigger.name;

//       let currentGrowthRateDB = await GrowthRate.findOne({
//         name: currentGrowthRateName,
//       });

//       if (!currentGrowthRateDB) {
//         console.log(
//           chalk.red('Cannot find GrowthRate:', currentGrowthRateName)
//         );
//       }

//       const relatedSpeciesList = currentGrowthRate.pokemon_species;
//       // loop over the species list under every growth list entry
//       for (let j = 0; j < relatedSpeciesList.length; j++) {
//         const speciesName = relatedSpeciesList[j].name;

//         const species = await Species.findOne({ name: speciesName });
//         if (!species) {
//           console.log(chalk.red('Cannot find species:', speciesName));
//         }
//         const speciesObjectID = species._id;
//         currentGrowthRateDB.species.push(speciesObjectID);
//         await currentGrowthRateDB.save();
//       }
//       console.log(
//         chalk.blue(
//           `Current growthRate DB: ${currentGrowthRateDB.name}, it's species length: ${currentGrowthRateDB.species.length}`
//         )
//       );
//     }

//     return res.status(200).json({msg:'All is well.'});
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

router.post('/addAll', async (req, res) => {
  try {
    const pokeApiListURL = 'https://pokeapi.co/api/v2/evolution-trigger/';
    const response = await axios.get(pokeApiListURL);
    const triggerListURLs = response.data.results;

    for (let i = 0; i < triggerListURLs.length; i++) {
      const response = await axios.get(triggerListURLs[i].url);
      const trigger = response.data;

      const { id, name, pokemon_species } = trigger;

      let speciesObjectIds = [];

      for (let j = 0; j < pokemon_species.length; j++) {
        const foundSpeciesDB = await Species.findOne({
          name: pokemon_species[j].name,
        });
        speciesObjectIds.push(foundSpeciesDB._id);
      }

      // save to db
      const newTrigger = new Trigger({
        pokeApiID: id,
        name: name,
        species: speciesObjectIds,
      });

        await newTrigger.save();
    }

    res.status(200).json({ msg: 'triggers are saved' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
