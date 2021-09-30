const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const requiredString = {
  type: String,
  required: true,
};

const requiredNumber = {
  type: Number,
  required: true,
};

const requiredBool = {
  type: Boolean,
  required: true,
};

const SpeciesModel = new mongoose.Schema({
  pokeApiID: requiredNumber,
  name: requiredString,
  capture_rate: requiredNumber,
  evolution_chain: { type: ObjectId, ref: 'EvolutionChain' },
  growthRate: { type: ObjectId, ref: 'GrowthRate' },
  is_legendary: requiredBool,
  is_mythical: requiredBool,
});

const Species = mongoose.model('Species', SpeciesModel);

module.exports = Species;
