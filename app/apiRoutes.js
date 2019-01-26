// //require data
let friendsArray = require("./data/friends");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });
  let closestMatch = {
    name: "",
    photo: "",
    friendDifference: Infinity
  };
  app.post("/api/friends", (req, res) => {
    const user = req.body;
    let userScore = user.scores.reduce((total, answer) => {
      return parseInt(total) + parseInt(answer);
    });
    //loop through all of the friends in the DB
    for (var i = 0; i < friendsArray.length; i++) {
      let character = friendsArray[i];

      let characterScores = character.scores.reduce((total, answer) => {
        return parseInt(total) + parseInt(answer);
      });
      let difference = Math.abs(userScore - characterScores);
      if (difference <= closestMatch.friendDifference) {
        closestMatch.name = friendsArray.name;
        closestMatch.photo = friendsArray.photo;
        closestMatch.friendDifference = difference;
        console.log(closestMatch.name);
      }
      // console.log(characters);
    }

    friendsArray.push(user);
  });
};
