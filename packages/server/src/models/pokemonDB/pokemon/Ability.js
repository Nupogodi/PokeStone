const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const AbilityModel = new mongoose.Schema({

})

const Ability = mongoose.model("Ability", AbilityModel);

module.exports = Ability;