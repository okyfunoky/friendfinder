var express = require('express');
var router = express.Router();
var friends = require("../data/friends");

router.get('/friends', function (req, res) {
    res.json(friends);
});

router.post("/add-friend", function (req, res) {
    let newFriendname = req.body.name;
    let newFriendQuestionOne = parseInt(req.body.scores[0][0]);
    let newFriendQuestionTwo = parseInt(req.body.scores[1][0]);
    let newFriendQuestionThree = parseInt(req.body.scores[2][0]);
    let newFriendQuestionFour = parseInt(req.body.scores[3][0]);
    let newFriendQuestionFive = parseInt(req.body.scores[4][0]);
    let newFriendQuestionSix = parseInt(req.body.scores[5][0]);

    let newFriend = {
        name: newFriendname,
        scores: [
            newFriendQuestionOne,
            newFriendQuestionTwo,
            newFriendQuestionThree,
            newFriendQuestionFour,
            newFriendQuestionFive,
            newFriendQuestionSix
        ]
    }

    let match = findBestMatch(newFriend);
    friends.push(newFriend);
    res.json(match);
});

//creates new reservation data based on how many people have tables 
router.get('/friends/:name', function (req, res) {
    var friend = req.params.name;
    var friendToReturn;
    for (let index = 0; index < friends.length; index++) {
        const element = friends[index];
        if (element.name.toLocaleLowerCase().replace(" ", "") === friend.toLocaleLowerCase()) {
            friendToReturn = element;
        }
    }

    res.json(friendToReturn);
})

function findBestMatch(newFriend) {
    var currentMatch;
    var currentDifference = 40;

    friends.forEach(friend => {
        var friendDifference = 0;
        for (let index = 0; index < friend.scores.length; index++) {
            let friendScore = friend.scores[index];
            let newUserScore = newFriend.scores[index];
            let questionDifference = 0;

            if (friendScore > newUserScore) {
                questionDifference = friendScore - newUserScore;
            } else {
                questionDifference = newUserScore - friendScore;
            }
            friendDifference += questionDifference;
        }

        if (currentDifference > friendDifference) {
            currentDifference = friendDifference;
            currentMatch = friend;
        }
    });
    return currentMatch;
}

module.exports = router;