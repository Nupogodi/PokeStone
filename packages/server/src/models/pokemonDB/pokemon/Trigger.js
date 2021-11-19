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

const TriggerModel = new mongoose.Schema({
  pokeApiID: requiredNumber,
  name: requiredString,
  species: [{ type: ObjectId, ref: 'Species' }],
});

const Trigger = mongoose.model('Trigger', TriggerModel);

module.exports = Trigger;
