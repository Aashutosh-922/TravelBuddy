const express = require('express');
const { createPost, getPosts, likePost } = require('../controllers/postController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createPost);
router.get('/:userId', getPosts);
router.post('/:postId/like', verifyToken, likePost);

module.exports = router;
