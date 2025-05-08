const express = require("express");
const db = require("../config/database");

const router = express.Router();

//POST/register - Register a new User
router.post("/register", (req, res) => {
  console.log(req.body);

  const insertQuery = `INSERT INTO studentInfo (firstName, lastName, email, mobileNo, sPassword, state, course) values('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${req.body.mobileNo}', '${req.body.password}', '${req.body.state}', '${req.body.course}')`;

  db.query(insertQuery, (err, results) => {
    if (err) {
      console.log("Error Inserting User", err);
      return res.status(500).json({ error: "Failed to register user" });
    } else {
      console.log("Successfully Inserted");
      console.log(results);
      res.status(201).json({
        message: "User registered successfully",
        userId: results.insertId,
      });
    }
  });
});

module.exports = router;
