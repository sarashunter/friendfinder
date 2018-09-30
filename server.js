//External Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//Internal Dependencies
const friends = require('./app/data/friends');


//Set up Express
const app = express();
const PORT = process.env.PORT || 3000;


// app.use(express.static('public'));

app.use(require('./app/routing/apiRoutes'));
app.use(require('./app/routing/htmlRoutes'));

//Use bodyParser for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Start the server listening.
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  