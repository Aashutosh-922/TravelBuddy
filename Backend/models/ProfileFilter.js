// models/ProfileFilter.js
const mongoose = require('mongoose');

const ProfileFilterSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  filters: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ProfileFilter', ProfileFilterSchema);
