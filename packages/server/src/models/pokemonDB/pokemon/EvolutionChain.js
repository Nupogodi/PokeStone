const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const EvolutionChainModel = new mongoose.Schema({

})

const EvolutionChain = mongoose.model("EvolutionChain", EvolutionChainModel);

module.exports = EvolutionChain;