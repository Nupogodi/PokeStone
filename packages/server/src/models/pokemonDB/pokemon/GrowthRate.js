const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types;

const GrowthRateModel = new mongoose.Schema({

})

const GrowthRate = mongoose.model("GrowthRate", GrowthRateModel);

module.exports = GrowthRate;