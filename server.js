// reuire express
var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "PassWord123",
    database: "smoothieShop_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

// =========================================================

  //root get route
app.get("/", function(req, res) {
    connection.query("SELECT * FROM smoothies;", function(err, data) {
        if (err) throw err;
        res.render("index", { smoothies: data });
    });
});


  //post route
app.post("/add", function(req, res) {
    console.log("REQ BODY: ", req.body)
    connection.query("INSERT INTO smoothies (smoothie_name) VALUES (?)", [req.body.smoothie_name],
    function(err, result) {
        if (err) throw err;

        res.redirect("/");
    });
});

app.post("/devour", function(req, res) {
    console.log("REQ BODY: ", req.body)
    connection.query("UPDATE smoothies SET `devoured` = '1' WHERE (`item_id` = ?)", [req.body.item_id],
    function(err, result) {
        if (err) throw err;

        res.redirect("/");
    });
});

// TODO: add a devour it route to set devoured to 1 (true) for adding smoothie

// =========================================================

// Starts server so that it can begin listening to client requests
app.listen(PORT, function() {
    // Log (server-side) when  server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  