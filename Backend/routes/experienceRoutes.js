const express = require('express');
const { createExperience, getExperiences } = require('../controllers/experienceController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createExperience);
router.get('/:userId', verifyToken, getExperiences);

module.exports = router;
