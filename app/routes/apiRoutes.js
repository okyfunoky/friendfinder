var express = require('express');
var router = express.Router();

var friends = [
    {name: "Captain America"},
    {name: "Black Widow"},
    {name: "Iron Man"},
    {name: "Thor"},
]

router.get('/friends', function (req, res) {
    //get coolness from db in coolness order
    res.json(friends);
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