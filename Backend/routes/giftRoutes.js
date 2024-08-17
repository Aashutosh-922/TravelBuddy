const express = require('express');
const { createGift, getGifts } = require('../controllers/giftController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createGift);
router.get('/:userId', verifyToken, getGifts);

module.exports = router;
