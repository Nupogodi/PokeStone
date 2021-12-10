const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const requiredString = {
  type: String,
  required: true,
};

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      maxLength: 20,
    },

    password_hash: {
      type: String,
      required: true,
    },

    current_score: {
      type: String,
      default: 0,
    },

    high_score: {
      type: String,
      default: 0,
    },

    pokemon_list: [
      {
        pokemon: {
          type: ObjectId,
          ref: 'Pokemon',
        },
        currentLevel: { type: Number },
        currentExp: { type: Number },
        currentStats: {
          hp: { type: Number },
          attack: { type: Number },
          defense: { type: Number },
          speed: { type: Number },
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
