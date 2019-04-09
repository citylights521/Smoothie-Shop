// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var smoothie = {
  all: function(cb) {
    orm.all("smoothies", function(err, res) {
      cb(err, res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("smoothies", cols, vals, function(err, res) {
      cb(err, res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("smoothies", objColVals, condition, function(err, res) {
      cb(err, res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = smoothie;
