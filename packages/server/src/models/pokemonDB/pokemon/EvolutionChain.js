const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const requiredNumber = {
  type: Number,
  required: true,
};

const numberDefaultNull = {
  type: Number,
  default: null,
};

const stringDefaultNull = {
  type: String,
  default: null,
};

const EvolutionChainModel = new mongoose.Schema({
  pokeApiID: { type: Number },
  evolution_details: [
    {
      gender: stringDefaultNull,
      item: { type: ObjectId, ref: 'Item', default: null },
      trigger: { type: ObjectId, ref: 'Trigger' },
      trigger_item: { type: ObjectId, ref: 'Item', default: null },
      min_level: numberDefaultNull,
      gender: stringDefaultNull,
      held_item: { type: ObjectId, ref: 'Item', default: null },
      trade_species: { type: ObjectId, ref: 'Species', default: null },
      known_move: { type: ObjectId, ref: 'Move', default: null },
    },
  ],
  evolves_to: [
    {
      evolution_details: [],
      is_baby: { type: Boolean },
      species: { type: ObjectId, ref: 'Species' },
      evolves_to: [],
    },
  ],
  is_baby: { type: Boolean },
  species: { type: ObjectId, ref: 'Species' },
});

const EvolutionChain = mongoose.model('EvolutionChain', EvolutionChainModel);

module.exports = EvolutionChain;
