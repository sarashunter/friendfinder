var express = require('express');
var apiRoutes = express.Router();
var friends = require('../data/friends');
//Returns all potential friends
apiRoutes.get("/api/friends", function(req, res){
    console.log('test');
    return res.json(friends);
});

apiRoutes.post("/api/friends", function(req, res){
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend)
})

module.exports = apiRoutes;