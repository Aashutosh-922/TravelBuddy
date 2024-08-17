// models/Game.js
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  name: String,
  description: String,
  genre: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', GameSchema);
