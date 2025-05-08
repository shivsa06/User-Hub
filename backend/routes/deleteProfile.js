const express = require("express");
const db = require("../config/database");

const router = express.Router();

// DELETE /deleteProfile/:id
router.delete("/deleteProfile/:id", (req, res) => {
  console.log("Shivam");
  const userId = req.params.id;
  console.log(`Delete/deleteProfile/${userId} called`);
  const deleteQuery = `DELETE from studentInfo WHERE sId = ${userId}`;
  db.query(deleteQuery, (err, results) => {
    if (err) {
      console.log("Error Deleting User: ", err);
      return res.status(500).json({ error: "Failed to delete user" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", userId });
  });
});

module.exports = router;
