var express = require('express');
var htmlRoutes = express.Router();
var path = require('path');


htmlRoutes.get("/survey", function (req, res) {

    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

htmlRoutes.get("*", function (req, res) {

    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRoutes;