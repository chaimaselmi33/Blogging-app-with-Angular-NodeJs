const express = require('express');
const dbConnection = require('../database/config');

const router = express.Router();

//---------contact routes----------

//post a new inquery about a post
router.post('/add', (req, res)=>{
    let data = req.body
    let sql = "insert into contact SET ?"
    dbConnection.query(sql, data, (err, queryResult)=>{
        if(err){
            console.log(err)
        }
        {
            console.log("contact data successfully inserted **7**")
        }
    })
})

module.exports = router

