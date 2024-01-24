const express = require("express");
const dbConnection = require("../database/config.js");

const router = express.Router();

router.post("/signIn", (req, res) => {
  const userCredentials = req.body;
  console.log("user sent credentials", credentials);

  let sql = "SELECT email, password FROM users WHERE email = ?";
  let values = [userCredentials.email];

  dbConnection.query(sql, values, (err, queryResult) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      // Check if the email exists in the database
      if (queryResult.length > 0) {
        let fetched_userCredentials = {
          email: queryResult[0].email,
          password: queryResult[0].password,
        };

        // Check if the credentials match
        if (
          fetched_userCredentials.email === userCredentials.email &&
          fetched_userCredentials.password === userCredentials.password
        ) {
          res.status(200).send("Correct credentials");
        } else {
          res.send("Incorrect email or password");
        }
      } else {
        console.log("email not found");
        res.status(404).send("Email not found");
      }
    }
  });
});

module.exports = router;
