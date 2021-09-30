const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const ItemModel = new mongoose.Schema({

})

const Item = mongoose.model("Item", ItemModel);

module.exports = Item;