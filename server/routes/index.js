var express = require("express");
var userController = require("./userController");
var router = express.Router();
// test route
router.get("/", function (req, res) {
  res.json({ message: "welcome to our upload module apis" });
});

// route to handle user registration
router.post("/register", userController.register);
//router.post("/login", login.login);
// 로그인 POST
router.post("/login", userController.login);
router.post("/sendEmail", userController.sendEmail);
router.post("/updatePwd", userController.updatePwd);

module.exports = router;

// axios 호출 예시
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
