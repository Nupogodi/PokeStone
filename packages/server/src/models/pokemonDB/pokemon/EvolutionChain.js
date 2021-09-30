const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;


const requiredNumber = {
  type: Number,
  required: true,
};

const EvolutionChainModel = new mongoose.Schema({
  pokeApiID: requiredNumber,
  min_level: requiredNumber,
  evolves_to: {
    species: { type: ObjectId, ref: 'Species' },
  },
});

const EvolutionChain = mongoose.model('EvolutionChain', EvolutionChainModel);

module.exports = EvolutionChain;
