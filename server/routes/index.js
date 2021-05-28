var express = require("express");
var login = require("./userController");
var router = express.Router();
// test route
router.get("/", function (req, res) {
  res.json({ message: "welcome to our upload module apis" });
});

// route to handle user registration
router.post("/register", login.register);
router.post("/login", login.login);

module.exports = router;

// axios.post("http:/loacalhost:3000/login", {
//   data: {
//     email: "haha@naver.com",
//     password: 1235123441,
//   },
// });

// axios.post("http:/loacalhost:3000/register", {
//   data: {
//     email: "haha@naver.com",
//     password: 1235123441,
//   },
// });
