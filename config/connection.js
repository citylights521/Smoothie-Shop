// setup the code to connect Node to MySQL

var mysql = require("mysql");

var pool;

//connects to JawsDB if available (Heroku)
if (process.env.JAWSDB_URL) {
    pool = mysql.createPool(process.env.JAWSDB_URL);
}
//if JawDB isn't available, connects to local DB
else {
    pool = mysql.createPool({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "PassWord123",
        database: "smoothieShop_db"
    });
}

//helper function for getting a connection and querying 
var getConnectionQuery = function(queryString, callback) {
    pool.getConnection(function(err, connection) {
        console.log("connected as id " + connection.threadId);
        connection.query(queryString, callback);
        connection.release();
        console.log("releasing connection id " + connection.threadId);
    });
};

//exports the getConnectionQuery function to orm.js
module.exports = getConnectionQuery;