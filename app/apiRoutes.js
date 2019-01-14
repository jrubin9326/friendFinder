// //require data
const express = require("express");
const app = express();
const apiRoutes = express.Router();
let friendsData = require("./data/friends");
// const express = require('express');
// const app = express();

// //routing

// // app.post('../data/friends.js', function (req, res) {

// // })

module.exports = function() {
  apiRoutes.get("/api/friends", (req, res) => {
    res.json(friendsData);
  });
};
