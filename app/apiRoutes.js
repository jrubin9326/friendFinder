// //require data
const express = require("express");
let friendsArray = require("./data/friends");
let router = express.Router();
module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });
};
