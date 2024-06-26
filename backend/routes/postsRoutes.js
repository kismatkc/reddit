const express = require("express");
const {
  getPublicPosts,
  getSearchPosts,
  createPost,
} = require("../controllers/postsController");

const router = express.Router();

// Routes for posts
router.get("/public", getPublicPosts);
router.get("/search", getSearchPosts);
router.post("/createPost", createPost);

module.exports = router;
