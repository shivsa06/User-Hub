const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const registerRoutes = require("./routes/registerRoutes");
const userRoutes = require("./routes/userRoutes");
const logInRoutes = require("./routes/loginRoutes");
const editProfileRoutes = require("./routes/editProfile");
const deleteProfileRoutes = require("./routes/deleteProfile");
require("dotenv").config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/", registerRoutes);
app.use("/", userRoutes);
app.use("/", logInRoutes);
app.use("/", editProfileRoutes);
app.use("/", deleteProfileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
