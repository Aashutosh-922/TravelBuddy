const express = require('express');
const { getUser, updateUser, deleteUser } = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:userId', verifyToken, getUser);
router.put('/:userId', verifyToken, updateUser);
router.delete('/:userId', verifyToken, deleteUser);

module.exports = router;
