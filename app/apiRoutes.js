// //require data
let friendsArray = require("./data/friends");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });

  app.post("/api/friends", (req, res) => {
    const user = req.body;
    let userScore = user.scores.reduce((total, answer) => {
      return parseInt(total) + parseInt(answer);
    });
    difference(friendsArray);
  });
};
//totals each characters from friendsArrays scores
function difference(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      arr[i].scores.reduce((total, answer) => {
        return parseInt(total) + parseInt(answer);
      })
    );
  }
}
