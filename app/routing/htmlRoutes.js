var express = require('express');
var app = express.Router();

app.get("/", function (req, res) {
    console.log('sending index');
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/survey", function (req, res) {
    console.log('sending route');
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});

module.exports = app;