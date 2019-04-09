// setup the code to connect Node to MySQL

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.DB_SERVER || "localhost",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "PassWord123",
    database: process.env.DB_DATABASE || "smoothieShop_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

function handleDisconnect(connection) {
    connection.on('error', function(err) {
        if (!err.fatal) {
            return;
        }
        if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
            throw err;
        }
        console.log('Re-connecting lost connection: ' + err.stack);
        newConn = mysql.createConnection(connection.config);
        handleDisconnect(newConn);
        newConn.connect();
    });
}

handleDisconnect(connection);

module.exports = connection;