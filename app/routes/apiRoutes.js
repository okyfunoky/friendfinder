var express = require('express');
var router = express.Router();
var friends = require("../data/friends");

router.get('/friends', function (req, res) {
    //get coolness from db in coolness order
    res.json(friends);
});

router.post("/add-friend", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
      friends.push(req.body);
      res.json(true); 
  });

//creates new reservation data based on how many people have tables 
router.get('/friends/:name', function (req, res) {
    var friend = req.params.name;
    var friendToReturn;
    for (let index = 0; index < friends.length; index++) {
        const element = friends[index];
        if(element.name.toLocaleLowerCase().replace(" ","") === friend.toLocaleLowerCase())
        {
            friendToReturn = element;
        }
    }

    res.json(friendToReturn);
})

module.exports = router;