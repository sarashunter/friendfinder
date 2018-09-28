var express = require('express');
var htmlRoutes = express.Router();
var path = require('path');

htmlRoutes.get("/", function (req, res) {
    console.log('sending index');
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

htmlRoutes.get("/survey", function (req, res) {
    console.log('sending route');
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = htmlRoutes;