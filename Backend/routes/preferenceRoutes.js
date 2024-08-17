const express = require('express');
const { createPreferences, getPreferences } = require('../controllers/preferenceController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createPreferences);
router.get('/:userId', verifyToken, getPreferences);

module.exports = router;
