//Imports Express
var express = require("express");

// Creates the router for the app
var router = express.Router();

// Imports the model (smoothie.js) to use its database functions.
var smoothie = require("../models/smoothie.js");

function goToIndex (req, res, next){
    smoothie.all(function(err, data) {
        if (err) res.send(err);
        
        var hbsObject = {
          smoothies: data
        };
        res.render("index", hbsObject);
    });
}

router.get("/*", goToIndex);

 //root get route
 router.get("/", goToIndex);

  //post route
  router.post("/add", function(req, res) {
    console.log("REQ BODY: ", req.body)

   if (req.body.smoothie_name && req.body.smoothie_name != "") {
        smoothie.create(["smoothie_name"], [req.body.smoothie_name], function(err, result) {
            if (err) res.send(err);
        });
   }

    res.redirect("/");
});

//devour route updates the item in the database to 'devoured'
router.post("/devour", function(req, res) {
    console.log("REQ BODY: ", req.body)
    var condition = "item_id = " + req.body.item_id;

    smoothie.update(
        {
            devoured: 1
        },
        condition,
        function(err, result) {
            if (err) res.send(err);
    
            res.redirect("/");
        });
});


// Export routes for server.js to use.
module.exports = router;