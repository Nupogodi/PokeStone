const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const SpeciesModel = new mongoose.Schema({

})

const Species = mongoose.model("Species", SpeciesModel);

module.exports = Species;