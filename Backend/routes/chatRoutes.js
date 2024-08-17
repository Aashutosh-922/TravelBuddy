const express = require('express');
const { createChat, getChat } = require('../controllers/chatController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createChat);
router.get('/:chatId', verifyToken, getChat);

module.exports = router;
