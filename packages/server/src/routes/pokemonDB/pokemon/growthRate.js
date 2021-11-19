const express = require('express');
const router = express.Router();
const axios = require('axios');
const { GrowthRate, Species } = require('../../../models/index');
const chalk = require('chalk');

router.get('/', async (req, res, next) => {
  try {
    const growthRates = await GrowthRate.find({});

    res.status(200).json({ msg: 'Growth Rate Endpoint', growthRates });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// update growth rate model with species list reference ID
// router.put('/updateAll', async (req, res) => {
//   try {
//     const pokeApiListURL = 'https://pokeapi.co/api/v2/growth-rate/';
//     const response = await axios.get(pokeApiListURL);
//     const growthRateListURLs = response.data.results;

//     // loop over the growth list
//     for (let i = 0; i < growthRateListURLs.length; i++) {
//       const currentGrowthRateApiObject = await axios.get(
//         growthRateListURLs[i].url
//       );
//       const currentGrowthRate = currentGrowthRateApiObject.data;

//       const currentGrowthRateName = currentGrowthRate.name;

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

// router.post('/addAll', async (req, res) => {
//   try {
//     const pokeApiListURL = 'https://pokeapi.co/api/v2/growth-rate/';
//     const response = await axios.get(pokeApiListURL);
//     const growthRateListURLs = response.data.results;

//     // let growthRates = {};
//     for (let i = 0; i < growthRateListURLs.length; i++) {
//       const response = await axios.get(growthRateListURLs[i].url);
//       const growthRate = response.data;

//       const { id, name, levels, formula, pokemon_species, descriptions } =
//         growthRate;

//       let engDescription;
//       if (descriptions.length > 1) {
//         for (let i = 0; i < descriptions.length; i++) {
//           if (descriptions[i].language.name !== 'en') continue;

//           engDescription = descriptions[i].description;
//         }
//       } else {
//         engDescription = descriptions[0].description;
//       }

//       //   growthRates[growthRate.name] = growthRate;

//       // save to db
//       const newGrowthRate = new GrowthRate({
//         pokeApiID: id,
//         name: name,
//         description: engDescription,
//         formula: formula,
//         // species: {},
//         levels: levels,
//       });

//       await newGrowthRate.save();
//     }

//     res.status(200).json(growthRates);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
