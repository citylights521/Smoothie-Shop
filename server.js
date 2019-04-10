// require express
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

// Import routes and give the server access to them.
var routes = require("./controllers/smoothie.controller.js");

app.use(routes);

// Starts server so that it can begin listening to client requests
app.listen(PORT, function() {
  // Log (server-side) when  server has started
  console.log("Server listening on: http://localhost:" + PORT);
});