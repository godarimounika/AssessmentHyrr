// // controllers/postController.js

// const Post = require('../models/Post');

// const getPaginatedPosts = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const pageSize = 10;
//     const startIndex = (page - 1) * pageSize;
//     const endIndex = page * pageSize;

//     const paginatedPosts = await Post.find().skip(startIndex).limit(pageSize);

//     res.json({ posts: paginatedPosts });
//   } catch (error) {
//     console.error('Error fetching paginated posts:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   getPaginatedPosts,
// };

// controllers/postController.js

const fetch = require('node-fetch');

const getPaginatedPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const response = await fetch(`https://fakestoreapi.com/products?limit=${pageSize}&page=${page}`);
    const data = await response.json();
    const paginatedPosts = data.slice(startIndex, endIndex);

    res.json({ posts: paginatedPosts });
  } catch (error) {
    console.error('Error fetching paginated posts:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getPaginatedPosts,
};

