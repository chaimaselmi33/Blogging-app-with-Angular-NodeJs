const express = require('express');
const dbConnection = require('../database/config');

const router = express.Router();

//--------comment routes----------

//add a new comment for a specific post
router.post('/add', (req, res) => {
    let data = req.body
    console.log("req body", data)
    let sql = "insert into comment SET ?"
    dbConnection.query(sql, data, (err, queryResult) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send("comment added succefully")
            console.log("comment added succefully")
        }
    })
})

module.exports = router