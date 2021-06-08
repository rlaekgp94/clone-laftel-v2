var express = require("express");
var userController = require("./auth.userController");
var router = express.Router();

//회원가입 POST API
router.post("/register", userController.register);
//router.post("/login", login.login);

// 로그인 POST API
router.post("/login", userController.login);

////비밀번호찾기 이메일 전송 POST API
//1. 일치하는 이메일 확인
//2. 이메일에 uuid를 탐색 후 auth table에 임시 인증키를 생성
//3. auth auth_key값을 param로 전구글계정에서 이메일을 전달
router.post("/sendEmail", userController.sendEmail);

////비밀번호 변경 전송 POST API
//1. auth에서 키값과 일치하는 uuid를 확인
//2. user 테이블에서 확인된 uuid와 일치하는 데이터행 탐색
//3. auth 테이블에서 해당 auth_key를 가진 데이터를 가진 데이터를 저장
router.post("/updatePwd", userController.updatePwd);

module.exports = router;
