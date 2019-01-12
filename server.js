//Dependencies 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

//sets up app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const apiRoutes = require("./app/apiRoutes");
const router = require("./app/htmlRoutes.js");

// app.use('/api', apiRoutes);
app.use('/', router);

// require("./app/apiRoutes")(app)
// require("./app/htmlRoutes")(app)

// app.get('./app/data/friends.js', (req, res) => {
//     return res.json(friendsArray);
// })

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
