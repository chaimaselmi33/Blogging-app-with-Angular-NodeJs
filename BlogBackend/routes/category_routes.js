const express = require('express');
const dbConnection = require('../database/config');

const router = express.Router();

//---------category routes----------

//get all categories 
router.get('/get-all', (req, res)=>{
    let sql = "select * from category"
    dbConnection.query(sql, (err,queryResult)=> {
        res.send(queryResult)
    })
})

//add a new category
router.post('/add', (req, res) => {
    //console.log(req.body);
    let data = req.body;
    let sql = `insert into category (name) values ( '${req.body.name}' )`
    dbConnection.query(sql, (err, queryResult) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("category inserted successfully !")
        }
    });
})

module.exports = router