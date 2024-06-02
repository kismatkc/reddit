const express = require('express');
const { getPublicPosts, getSearchPosts } = require('../controllers/postsController');

const router = express.Router();

// Routes
router.get('/public', getPublicPosts);
router.get("/search", getSearchPosts);

module.exports = router;
