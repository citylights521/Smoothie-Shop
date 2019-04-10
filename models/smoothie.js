// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var smoothie = {
  // fetches all smoothies in the table
  all: function(cb) {
    orm.all("smoothies", function(err, res) {
      cb(err, res);
    });
  },

  // this code creates a new smoothie entry in the smoothies table
  create: function(cols, vals, cb) {
    orm.create("smoothies", cols, vals, function(err, res) {
      cb(err, res);
    });
  },

  // updates a value in the smoothies table
  update: function(objColVals, condition, cb) {
    orm.update("smoothies", objColVals, condition, function(err, res) {
      cb(err, res);
    });
  }
};

// Export the database functions for the controller
module.exports = smoothie;
