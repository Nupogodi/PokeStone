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

const MoveModel = new mongoose.Schema({
  pokeApiID: requiredNumber,
  accuracy: requiredNumber,
  power: requiredNumber,
  power_points: requiredNumber,
  effect_chance: requiredNumber,
  effect_description: requiredString,
  learned_by_pokemon: [{ type: ObjectId, ref: 'Pokemon' }],
  type: { type: ObjectId, ref: 'Type' },
});

const Move = mongoose.model('Move', MoveModel);

module.exports = Move;
