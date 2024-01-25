const mysql = require('mysql8');

var dbConnection = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'Udacity33',
    port: '3306',
    database:'blog_db'
    }
);

//connect to db
dbConnection.connect((err)=> { 
    if (!err){
        console.log ("db connection has been estableshed");
    }
})

module.exports = dbConnection

