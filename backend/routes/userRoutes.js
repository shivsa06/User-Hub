const express = require("express");
const db = require("../config/database");

const router = express.Router();

//GET /user/:id - Fetch user details
router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const selectQuery = `SELECT firstName, lastName, email, mobileNo, sPassword, state, course from studentInfo where sId = ?`;
  db.query(selectQuery, [userId], (err, result) => {
    if (err) {
      console.log("Error Fetching: ", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
      res
        .status(200)
        .json({ message: "User details fetched successfully", user: result[0] });
  });
});

module.exports = router;
