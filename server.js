//External Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Internal Dependencies
var friends = require('./app/data/friends');
var apiRoutes = require('./app/routing/apiRoutes');
var htmlRoutes = require('./app/routing/htmlRoutes');

//Set up Express
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.use(require('./app/routing/apiRoutes'));

//Use bodyParser for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Start the server listening.
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  