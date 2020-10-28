const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

// Import Routes
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db!")
);

// Middleware
app.use(express.json());
// app.use(bodyParser.json());
// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(3000, () => console.log("Server up and running"));
