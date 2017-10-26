// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
// var app = express(); // define our app using express
var bodyParser = require('body-parser');
var mySql = require("mysql");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = 8080; // set our port
//var PORT = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.send("high");
    // res.json({ message: 'hooray! welcome to our api!' });
});
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
// more routes for our API will happen here