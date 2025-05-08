const mysql = require("mysql2");
require("dotenv").config();

//Creating MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

//connect to MySQL
db.connect((err) => {
  if (err) {
    console.log("Error Connecting to Database");
    return;
  } else {
    console.log("Successfully connected to Database");
  }
});

//Export connection
module.exports = db;
