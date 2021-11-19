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
  evolves_from_species: { type: ObjectId, ref: 'Species' },
  growth_rate: { type: ObjectId, ref: 'GrowthRate', required: true },
  is_legendary: requiredBool,
  is_mythical: requiredBool,
  is_baby: { type: Boolean },
  color: requiredString,
});

const Species = mongoose.model('Species', SpeciesModel);

module.exports = Species;
