const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const TypeModel = new mongoose.Schema({

})

const Type = mongoose.model("Type", TypeModel);

module.exports = Type;