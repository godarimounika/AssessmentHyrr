// const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const config = require('../config/config');

// const signup = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Basic input validation
//     if (!username || !email || !password) {
//       throw new Error('Username, email, and password are required fields.');
//     }

//     // Check if username or email already exists
//     const existingUser = await User.findOne({ $or: [{ username }, { email }] });
//     if (existingUser) {
//       throw new Error('Username or email already exists.');
//     }

//     // Create a new user
//     const newUser = new User({ username, email, password });
//     await newUser.save();

//     // Generate JWT token
//     const token = jwt.sign({ userId: newUser._id }, config.jwtSecret, { expiresIn: '1h' });

//     res.status(201).json({ success: true, message: 'User registered successfully', token });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error.message });
//   }
// };

// module.exports = { signup };

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require("../config");

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists.' });
    }
    console.log('Password:', password);

    // Hash the password
    const hashedPassword = await bcrypt.hash(String(password), 10);

    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token
    // const token = jwt.sign({ username, email }, config.jwtSecret);
    // Generate a JWT token with a longer expiration time (e.g., 1 hour)
const token = jwt.sign({ userId: newUser._id }, config.jwtSecret, { expiresIn: '1h' });


    // Return success message and token
    res.json({ message: 'User registered successfully.', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

