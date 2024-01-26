const express = require("express");
const dbConnection = require("../database/config.js");
const jwt = require('jsonwebtoken')
const router = express.Router();
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
        // check if the credentials match
        if (
          fetched_userCredentials.email === userCredentials.email &&
          fetched_userCredentials.password === userCredentials.password
        ) {
          //create jwt token
          const jwtSecretKey = process.env.JWT_SECRET
          console.log('sec key', jwtSecretKey)
          const token = jwt.sign(userCredentials, jwtSecretKey, { expiresIn: "1h" });
          console.log('token gen : ', token)
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
