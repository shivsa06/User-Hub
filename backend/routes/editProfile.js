const express = require("express");
const db = require("../config/database");

const router = express.Router();

//put /editProfile/:id - Update user details
router.put("/editProfile/:id", (req, res) => {
  const userId = req.params.id;
  console.log(req.body);
  const updateQuery = `UPDATE studentInfo set firstName = '${req.body.firstName}', lastName = '${req.body.lastName}', email = '${req.body.email}', mobileNo = '${req.body.mobileNo}', sPassword = '${req.body.password}', state = '${req.body.state}', course = '${req.body.course}' where sId = ${userId}`;
  db.query(updateQuery, (err, results) => {
    if (err) {
      console.log("Error Updating User: ", err);
      return res.status(500).json({ error: "Failed to update user" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", userId });
  });
});

module.exports = router;
