// const express = require("express");
// const app = express();
// const port = 8080;
// const helmet = require("helmet")
// const cors = require("cors");
// const mongoose  = require("mongoose");
// const dotenv = require("dotenv");
// // const authRoutes = require("./routes/authRoutes");
// // const postRoutes = require("./routes/postRoutes");
// // const authRoutes = require("./routes/authRoutes");


// dotenv.config();



// app.use(cors());
// app.use(helmet());
// app.use(express.json());


// // mongoose.connect("mongodb+srv://Mounika:Mounika@cluster1.80jappe.mongodb.net/?retryWrites=true&w=majority",
// // useNewUrlParser: true,
// // useUnifiedTopology: true,
// // )
// // .then( () => { 
    
// //     console.log(`DB Connected`) } )
// // .catch(  () => {  console.log(`Db Connection failed`) } )  

// mongoose
//   .connect("mongodb+srv://Mounika:Mounika@cluster1.80jappe.mongodb.net/your-database-name?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((error) => {
//     console.error("Db Connection failed:", error);
//   });




// // app.use("/user", userRoutes);
// // app.use("/chat", chatRoutes);
// // app.use("/message", messageRoutes);

// // app.use("/api/auth",authRoutes);
// // app.use("/api/posts",postRoutes);



// const server =app.listen( port , () => {
//     console.log(`server started running on port ${port}`)
// } )


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const config = require("./config")

const postController = require("./controllers/postController");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Load environment variables from .env
require('dotenv').config();
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://Mounika:Mounika@cluster1.80jappe.mongodb.net/your-database-name?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// postController.insertSamplePosts();

// Middleware for JSON parsing
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
