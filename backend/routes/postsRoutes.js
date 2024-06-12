const express = require("express");
const {
  getPublicPosts,
  getSearchPosts,
  createPost,
} = require("../controllers/postsController");

const { createUser } = require("../controllers/users-controllers");

const router = express.Router();

// Routes for posts
router.get("/public", getPublicPosts);
router.get("/search", getSearchPosts);
router.post("/createPost", createPost);

//Routes for users
router.post("/createUser", createUser);

module.exports = router;
