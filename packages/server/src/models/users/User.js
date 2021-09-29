const mongoose = require('mongoose');

const requiredString = {
  type: String,
  required: true,
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxLength: 20,
  },

  score: {
    type: String,
    default: 0,
  },

  pokemonList: [
    {
      name: requiredString,
      damageDealt: requiredString,
      damageReceived: requiredString,
      imgUrl: requiredString,
    },
  ],
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
