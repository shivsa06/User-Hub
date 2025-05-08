const express = require("express");
const db = require("../config/database");

const router = express.Router();

//POST/login - Login a user
router.post("/login", (req, res) => {
  console.log(req.body);

  const selectQuery = `Select sId, sPassword from studentInfo where email = '${req.body.email}'`;
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error("Error querying user:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const user = results[0];
    if (user.sPassword != req.body.password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    console.log(results);
    res.status(200).json({ message: "Login successful", userId: user.sId });
  });
});

module.exports = router;
