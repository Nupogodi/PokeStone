const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const BerrySchema = new mongoose.Schema({});

const Berry = mongoose.model('Berry', BerrySchema);

module.exports = Berry;
