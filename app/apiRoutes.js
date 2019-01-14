// //require data
const express = require("express");
const app = express();
let friendsData = require("./data/friends");
// const express = require('express');
// const app = express();

// //routing

// // app.post('../data/friends.js', function (req, res) {

// // })

module.exports = function(app) {
  app.get("/api/tables", (req, res) => {
    res.json(friendsData);
  });
};
