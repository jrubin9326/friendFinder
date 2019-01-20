// //require data
let friendsArray = require("./data/friends");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });
  let closestMatch = {
    name: "",
    photo: "",
    friendDifference: 1000000000
  };
  app.post("/api/friends", (req, res) => {
    const user = req.body;
    let userScore = user.scores.reduce((total, answer) => {
      return parseInt(total) + parseInt(answer);
    });
    //loop through all of the friends in the DB
    for (var i = 0; i < friendsArray.length; i++) {
      let character = friendsArray[i];
      let difference = 0;

      let characters = character.scores.reduce((total, answer) => {
        return parseInt(total) + parseInt(answer);
      });
      difference += Math.abs(userScore - characters);
      if (difference <= closestMatch.friendDifference) {
        closestMatch.name = character.name;
        closestMatch.photo = character.photo;
        closestMatch.friendDifference = difference;
        console.log(
          `your chosen match is ${closestMatch.name} who has ${
            closestMatch.friendDifference
          }`
        );
      }
    }
    friendsArray.push(user);
  });
};
