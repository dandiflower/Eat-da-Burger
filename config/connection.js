// Set up MySQL connection.
var mysql = require("mysql");


// var msql = require('mysql');
var connection;
var JAWSDB_URL = "mysql://orl033vbfeuaempt:gniplknplqhyeozp@j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/r30gfii78bpv4x91";



if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}

// Export connection for our ORM to use.
module.exports = connection;
