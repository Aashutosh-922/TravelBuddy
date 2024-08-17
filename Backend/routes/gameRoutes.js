const express = require('express');
const { getGames, playGame } = require('../controllers/gameController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getGames);
router.post('/play', verifyToken, playGame);

module.exports = router;
