const express = require("express");
const dbConnection = require("../database/config.js");
const jwt = require('jsonwebtoken')
const router = express.Router();
const bcrypt = require('bcrypt');
require('dotenv').config();

router.post("/signIn", (req, res) => {
  const userCredentials = req.body;

  let sql = "SELECT email, password FROM users WHERE email = ?";
  let values = [userCredentials.email];

  dbConnection.query(sql, values, (err, queryResult) => {
    if (err) {
      console.log(err);
    } else {
      // check if the email exists in the database
      if (queryResult.length > 0) {
        let fetched_userCredentials = {
          email: queryResult[0].email,
          password: queryResult[0].password,
        };
        
        //compare the input password with hashed one in db
        const isMatch = bcrypt.compareSync(userCredentials.password, fetched_userCredentials.password);
        // check if the credentials match
        if (
          fetched_userCredentials.email === userCredentials.email &&
          isMatch
        ) {
          //create jwt token
          const jwtSecretKey = process.env.JWT_SECRET
          const token = jwt.sign(userCredentials, jwtSecretKey, { expiresIn: "1h" });
          //res.setHeader('Authorization', token)
          res.json({ isAuth :true, token:token });
        } else {
          res.send("Incorrect email or password");
        }
      } else {
        console.log("email not found");
      }
    }
  });
});

module.exports = router;
