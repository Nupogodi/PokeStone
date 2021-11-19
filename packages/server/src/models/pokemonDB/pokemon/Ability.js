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

const AbilityModel = new mongoose.Schema({
  pokeApiID: requiredNumber,
  name: requiredString,
  text_entry: requiredString,
  effect_description: requiredString,
  effect: { type: String },
  pokemon: [{ type: ObjectId, ref: 'Pokemon' }],
});

const Ability = mongoose.model('Ability', AbilityModel);

module.exports = Ability;
