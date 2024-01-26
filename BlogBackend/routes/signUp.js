const express = require("express");
const dbConnection = require("../database/config.js");
const bcrypt= require('bcrypt');
const router = express.Router();

//Add a user
router.post("/signUp", async(req, res) => {
  const user = req.body;
  const salt = await bcrypt.genSalt(10);
   
  // Hash the password with the salt
  const hashedPassword = await bcrypt.hash(user.password, salt);
  console.log('hashed pass', hashedPassword)
  const newUser = {...user, password: hashedPassword}
  let sql = "Insert into users SET ?";
  dbConnection.query(sql, newUser, (err, queryResult) => {
    if (err) {
      console.log(err);
    } else {
      res.send("user added successfully");
    }
  });
});

module.exports = router;
