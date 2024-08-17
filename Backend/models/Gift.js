// models/Gift.js
const mongoose = require('mongoose');

const GiftSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  giftType: String,
  message: String,
  redeemed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Gift', GiftSchema);
