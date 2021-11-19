const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Species, EvolutionChain } = require('../../../models/index');
const chalk = require('chalk');

router.get('/', async (req, res, next) => {
  try {
    res.status(200).send('Evolution Chain Endpoint');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

router.post('/addAll', async (req, res) => {
  try {
    const pokeApiListURL =
      'https://pokeapi.co/api/v2/evolution-chain?limit=2&offset=0';
    const response = await axios.get(pokeApiListURL);
    const evolutionChainListURLs = response.data.results;

    const returnArray = []

    // loop over the list of evolution chain urls
    for (let i = 0; i < evolutionChainListURLs.length; i++) {
      const currentEvolutionChainRequest = await axios.get(
        evolutionChainListURLs[i].url
      );
      const currentEvolutionChain = currentEvolutionChainRequest.data;

      // create a new evolution chain model

      // starting species name (not evolved)
      const currentSpeciesName = currentEvolutionChain.chain.species.name;
      const currentSpeciesDB = await Species.findOne({
        name: currentSpeciesName,
      });
      if (!currentSpeciesDB) {
        console.log(
          chalk.red(`missing currentSpeciesDB at value: ${currentSpeciesName}`)
        );
      }
      const firstEvolutionID = currentEvolutionChain.chain.id;

      let newFirstTierEvolutionChain = new EvolutionChain({
        pokeApiID: firstEvolutionID,
        evolution_details: [],
        evolves_to: [],
        species: currentSpeciesDB._id,
      });

      const createNewEvolutionChain = async (chain) => {
        let evolution_details = {
          gender: null,
          item: null,
          trigger: null,
          trigger_item: null,
          min_level: null,
          gender: null,
          held_item: null,
          trade_species: null,
          know_move: null,
        };

        let evolves_to = [];

        let species = {};

        if (chain.evolution_details.length > 0) {
        }

        const newEvolutionChain = {
          evolution_details: evolution_details,
          evolves_to: evolves_to,
          is_baby: chain.is_baby,
          species: chain.species,
        };

        return newEvolutionChain;
      };

      // second tier evolution
      if (currentEvolutionChain.chain?.evolves_to !== undefined) {
        for (
          let j = 0;
          j < currentEvolutionChain.chain.evolves_to.lenght;
          j++
        ) {
          const secondTierChain = currentEvolutionChain.chain.evolves_to[j];
          console.log('Hit, line 85');
          let newSecondTierEvolutionChain = await createNewEvolutionChain(
            secondTierChain
          );

          // third tier evolution
          if (secondTierChain.evolves_to.length > 0) {
            console.log('Hit, line 91');
            for (let x = 0; x < secondTierChain.evolves_to.length; x++) {
              const thirdTierChain = secondTierChain.evolves_to[x];

              let newThirdTierEvolutionChain =
                createNewEvolutionChain(thirdTierChain);
            }
          }

          newFirstTierEvolutionChain.evolves_to.push(
            newSecondTierEvolutionChain
          );
        }

        
      }
    }
     res.status(200).json(returnArray);

    // res.status(200).send('All is well with updating the evolution chain!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
