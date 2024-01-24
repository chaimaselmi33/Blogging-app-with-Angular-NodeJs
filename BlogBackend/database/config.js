const mysql = require('mysql8');

var dbConnection = mysql.createConnection(
    {
    host: 'xxx',
    user: 'xxx',
    password: 'xxx',
    port: 'xxx',
    database:'xxx'
    }
);

//connect to db
dbConnection.connect((err)=> { 
    if (!err){
        console.log ("db connection has been estableshed");
    }
})

module.exports = dbConnection

