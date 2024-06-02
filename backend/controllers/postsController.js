const Post = require('../models/Post');

const { escapeRegExp } = require('../utils');

// Get all public posts
const getPublicPosts = async (req, res) => {
    try {
        const posts = await Post.find({ visibility: 'public' });
       
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSearchPosts = async (req, res) => {
    let { query } = req.query;
   

    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
        query = escapeRegExp(query);
        const regexPattern = new RegExp(`\\b${query}`, 'i');
 

        const posts = await Post.find({
            $or: [
                {title: {$regex: regexPattern},visibility: "public"},
                 {description: {$regex: regexPattern},visibility: "public"}
            ]
        });
        
        res.status(200).json(posts);
    } catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getPublicPosts,
    getSearchPosts
};
