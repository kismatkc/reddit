const express = require('express');
const { getPublicPosts, createPost } = require('../controllers/postsController');

const router = express.Router();

// Routes
router.get('/public', getPublicPosts);
router.post('/', createPost);

module.exports = router;
