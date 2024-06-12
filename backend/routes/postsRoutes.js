const express = require("express");
const {
  getPublicPosts,
  getSearchPosts,
  createPost,
} = require("../controllers/postsController");
import 
const router = express.Router();

// Routes
router.get("/public", getPublicPosts);
router.get("/search", getSearchPosts);
router.post("/createPost", createPost);

module.exports = router;
