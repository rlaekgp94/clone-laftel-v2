var express = require("express");
var bodyParser = require("body-parser");
var api = require("./routes/api");
var app = express();
require("dotenv").config();
//const config = require("./config.js")   //jwt

// set the secret key variable for jwt
//app.set('jwt-secret', config.secret)

//badyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(3000, function () {
  console.log("start server!");
});
