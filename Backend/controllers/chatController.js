// controllers/chatController.js
const Chat = require('../models/Chat');

exports.createChat = async (req, res) => {
  try {
    const newChat = new Chat({ users: [req.user.id, req.body.recipientId] });
    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ message: 'Error creating chat', error });
  }
};

exports.getChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId);
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chat', error });
  }
};
