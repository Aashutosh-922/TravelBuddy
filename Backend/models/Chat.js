// models/Chat.js
const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  messages: [{
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: String,
    sentAt: { type: Date, default: Date.now },
  }],
});

module.exports = mongoose.model('Chat', ChatSchema);
