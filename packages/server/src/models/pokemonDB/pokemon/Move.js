const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const MoveModel = new mongoose.Schema({

})

const Move = mongoose.model("Move", MoveModel);

module.exports = Move;