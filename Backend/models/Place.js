// models/Place.js
const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  images: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Place', PlaceSchema);
