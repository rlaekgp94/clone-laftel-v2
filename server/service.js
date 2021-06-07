var express = require("express");
var bodyParser = require("body-parser");
var api = require("./routes/index");
var app = express();

const env = process.env;

//badyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(api);
app.listen(3000, function () {
  console.log("start server!");
});
