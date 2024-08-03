// models/TravelPreferences.js
const mongoose = require('mongoose');

const TravelPreferencesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destinations: [String],
  budget: Number,
  activities: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TravelPreferences', TravelPreferencesSchema);
