// MySQL Connecion
var mysql = require('mysql');
var dotenv = require('dotenv').config()

var connection  = mysql.createConnection({
    port: 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'burger_db'
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db'
    })
}

// Make a Connection
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});