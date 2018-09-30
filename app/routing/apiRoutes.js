const express = require('express');
const apiRoutes = express.Router();
const friends = require('../data/friends');
const bodyParser = require("body-parser");

//Use bodyParser for data parsing
apiRoutes.use(bodyParser.urlencoded({ extended: true }));
apiRoutes.use(bodyParser.json());

//Returns all potential friends
apiRoutes.get("/api/friends", function(req, res){

    return res.json(friends);
});

apiRoutes.post("/api/friends", function(req, res){
    const newFriend = req.body;

    friends.push(newFriend);

    res.json(newFriend)
})

module.exports = apiRoutes;