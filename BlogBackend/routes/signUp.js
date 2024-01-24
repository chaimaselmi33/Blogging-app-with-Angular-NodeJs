const express = require("express");
const dbConnection = require("../database/config.js");

const router = express.Router();

//Add a user
router.post("/signUp", (req, res) => {
  const user = req.body;

  let sql = "Insert into users SET ?";
  dbConnection.query(sql, user, (err, queryResult) => {
    if (err) {
      console.log(err);
    } else {
      res.send("user added successfully");
    }
  });
});

module.exports = router;
