// setup the code to connect Node to MySQL

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.DB_SERVER || "localhost",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "PassWord123",
    database: process.env.DB_DATABASE || "smoothieShop_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;