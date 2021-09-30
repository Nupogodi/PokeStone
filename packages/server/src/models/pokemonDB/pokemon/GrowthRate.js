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

const GrowthRateModel = new mongoose.Schema({
  pokeApiID: requiredNumber,
  formula: requiredString,
  name: requiredString,
  species: { type: ObjectId, ref: 'Species' },
  level: [
    {
      experience: requiredNumber,
      level: requiredNumber,
    },
  ],
});

const GrowthRate = mongoose.model('GrowthRate', GrowthRateModel);

module.exports = GrowthRate;
