const express = require('express');
const { createFilter, getFilters } = require('../controllers/filterController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createFilter);
router.get('/:userId', verifyToken, getFilters);

module.exports = router;
