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

const PokemonSchema = new mongoose.Schema({
  pokeApiID: requiredNumber,
  name: requiredString,
  base_experience: requiredNumber,
  height: requiredNumber,
  weight: requiredNumber,
  abilities: [{ type: ObjectId, ref: 'Ability' }],
  possible_moves: [{ type: ObjectId, ref: 'Move' }],
  learnt_moves: [{ type: ObjectId, ref: 'Move' }],
  growth_rate: { type: ObjectId, ref: 'GrowthRate' },
  evolution_chain: { type: ObjectId, ref: 'EvolutionChain' },
  species: { type: ObjectId, ref: 'Species' },
  sprites: {
    front_default: { type: String },
    dream_world: { type: String },
  },
  types: [{ type: ObjectId, ref: 'Type' }],
  held_items: [{ type: ObjectId, ref: 'Item' }],
});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;

// create model Ability
// create model Move
// create model Item (add later)
// create model species
// create model evolution chain
// create model growth rate
// create model Type
