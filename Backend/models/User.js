// // const mongoose = require("mongoose");

// // const userScheme = new mongoose.Schema({
// //    username :  {
// //     type:String,
// //     required:true,
// //     unique:true
// //    },
// //    email:{
// //     type:String,
// //     required:true,
// //     unique:true
// //    },
// //    password:{
// //     type:String,
// //     required:true
// //    },


// // });


// // const User = mongoose.model("User",userScheme)
// // module.exports = User;

// // user.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//   username: { type: String, 
//     required: true, 
//     unique: true },
//   email: { 
//     type: String,
//     required: true, 
//     unique: true },
//   password: { 
//     type: String,
//      required: true
//      },
// //   name: { type: String },
// //   profilePicture: { type: String }, // Assuming a URL for simplicity
// });

// userSchema.pre('save', async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);

