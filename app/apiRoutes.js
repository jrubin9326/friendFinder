// //require data
const express = require("express");
let friendsArray = require("./data/friends");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });
};

app.post("/api/friends", (req, res) => {
  const user = req.body;
  let userScore = user.scores.reduce((total, answer) => {
    return parseInt(total) + parseInt(answer);
  });
});

