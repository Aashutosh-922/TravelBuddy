const express = require('express');
const { getRecommendations } = require('../controllers/recommendationController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getRecommendations);

module.exports = router;
