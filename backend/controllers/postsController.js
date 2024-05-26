const Post = require('../models/Post');

// Get all public posts
const getPublicPosts = async (req, res) => {
    try {
        const posts = await Post.find({ visibility: 'public' });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new post
const createPost = async (req, res) => {
    const { title, content, visibility, author } = req.body;

    try {
        const newPost = new Post({ title, content, visibility, author });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getPublicPosts,
    createPost
};
