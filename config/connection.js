// setup the code to connect Node to MySQL

var mysql = require("mysql");

var pool = mysql.createPool({
    host: process.env.DB_SERVER || "localhost",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "PassWord123",
    database: process.env.DB_DATABASE || "smoothieShop_db"
});

var getConnectionQuery = function(queryString, callback) {
    pool.getConnection(function(err, connection) {
        console.log("connected as id " + connection.threadId);
        connection.query(queryString, callback);
        connection.release();
        console.log("releasing connection id " + connection.threadId);
    });
};

module.exports = getConnectionQuery;