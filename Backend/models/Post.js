// // models/Post.js

// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//   title: String,
//   body: String,
// });

// const Post = mongoose.model('Post', postSchema);

// module.exports = Post;
// models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  // Add any other fields you want to include from the fake store API
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
