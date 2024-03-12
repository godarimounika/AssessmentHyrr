// const express = require("express");
// const Router = express.Router();
// const authController = require("../controllers/authController");



// // router.post("/signup",authController.signup);
// Router.post("/registerUser", registerUser);
// module.exports = Router;


// const express = require("express");
// const {
//   userLogin,
//   registerUser,
//   fetchAllUsersController,
// } = require("../Controllers/userController");

// const { protect } = require("../middleware/authMiddleware");

// const Router = express.Router();

// Router.post("/login", userLogin);
// Router.post("/registerUser", registerUser);
// Router.get("/fetchUsers",protect,fetchAllUsersController);

// module.exports = Router;

// const express = require('express');
// const Router = express.Router();
// const authController = require('../controllers/authController');

// Router.post('/signup', authController.signup);

// module.exports = Router;


const express = require("express");
const authController = require('../controllers/authController');
// const { protect } = require("../middleware/authMiddleware");

const Router = express.Router();

Router.post('/signup', authController.signup);

module.exports = Router;
