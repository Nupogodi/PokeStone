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

const TypeModel = new mongoose.Schema({
  pokeApiID: requiredNumber,
  name: requiredString,
  damage_relations: {
    double_damage_from: [{ type: ObjectId, ref: 'Type' }],
    double_damage_to: [{ type: ObjectId, ref: 'Type' }],
    half_damage_from: [{ type: ObjectId, ref: 'Type' }],
    half_damage_to: [{ type: ObjectId, ref: 'Type' }],
    no_damage_from: [{ type: ObjectId, ref: 'Type' }],
    no_damage_to: [{ type: ObjectId, ref: 'Type' }],
  },
  moves: [{ type: ObjectId, ref: 'Move' }],
  pokemon: [{ type: ObjectId, ref: 'Pokemon' }],
});

const Type = mongoose.model('Type', TypeModel);

module.exports = Type;
