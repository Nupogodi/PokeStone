const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const PokemonSchema = new mongoose.Schema({
    
});

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;
