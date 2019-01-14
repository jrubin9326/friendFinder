//Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");

//sets up app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRoutes = require("./app/apiRoutes.js");
const htmlRouter = require("./app/htmlRoutes.js");

app.use("/api", apiRoutes);
app.use("/", htmlRouter);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
