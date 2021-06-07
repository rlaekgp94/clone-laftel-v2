const models = require("../models");
//var connection = databaseConnect();
const crypto = require("crypto"); //비밀번호 암호화
const { v4 } = require("uuid");
const nodemailer = require("nodemailer");
require("dotenv").config();

//회원가입 SQL 컨트롤러
register = function (req, res) {
  var today = new Date();
  var inputPassword = req.body.password;
  var salt = Math.round(new Date().valueOf() * Math.random()) + "";
  var hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");

  models.user
    .create({
      guid: v4().replace(/-/gi, ""), //uuidv4 정규식으로 최소화(-제거)
      email: req.body.email,
      pwd: hashPassword,
      mdate: today,
      mrank: "new_user",
      salt: salt,
    })
    .then((result) => {
      res.send({
        code: 200,
        success: "user registered sucessfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
//로그인 SQL 컨트롤러
login = async function (req, res, next) {
  let result = await models.user.findOne({
    where: {
      email: req.body.email,
    },
  });

  let dbPassword = result.dataValues.pwd;
  let inputPassword = req.body.password;
  let salt = result.dataValues.salt;
  let hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");
  if (dbPassword === hashPassword) {
    console.log("비밀번호 일치");
    res.redirect("/");
  } else {
    console.log("비밀번호 불일치");
    res.redirect("/user/login");
    console.log(dbPassword);
    console.log(hashPassword);
  }
};

//이메일 전송 SQL 컨트롤러 -> 이베일 전송 API
sendEmail = async function (req, res) {
  // const emailBody = req.body.emailContentHTML;
  let result = await models.user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then(async function (result) {
      const token = crypto.randomBytes(20).toString("hex"); // token 생성
      const user_uid_intoDB = await result.dataValues.guid;
      const data = {
        auth_key: token,
        user_uid: user_uid_intoDB,
        auth_created: new Date(),
        auth_ttl: 300, // ttl 값 설정 (5분)
      };
      models.auth.create(data); // 데이터베이스 Auth 테이블에 데이터 입력
      return token;
    });

  let transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER, //process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS, //process.env.NODEMAILER_PASS,
    },
  });

  let info = transporter.sendMail({
    from: "LAFTEL Team <leeyoujun61@gmail.com>",
    to: "muenzz119@naver.com",
    subject: "안녕하세요 Laftel 고객님. 비밀번호를 변경해주세요.",
    html: `<a href="http://localhost:3000/reset/?key=${result}">비밀번호 변경 바로가기</a>`,
  });

  res.status(200).json({
    status: "Success",
    code: 200,
    message: "Sent Auth Email",
    messageId: info.messageId,
  });
};

//비밀번호 변경 SQL 컨트롤러 (UPDATE)
updatePwd = async function (req, res) {
  let inputPassword = await req.body.password;
  let auth_key = req.body.key;

  // console.log(
  //   models.auth.findOne({ where: { auth_key: auth_key } }).then((result) => {
  //   })
  // );
  var salt = Math.round(new Date().valueOf() * Math.random()) + "";
  var hashPassword = crypto
    .createHash("sha512")
    .update(inputPassword + salt)
    .digest("hex");

  let searchAuth = await models.auth
    .findOne({ where: { auth_key: auth_key } })
    .then((result) => {
      res.json(result);
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
  await models.user.update(
    { pwd: hashPassword, salt: salt },
    { where: { guid: searchAuth.dataValues.user_uid } }
  );
  await models.auth.destroy({ where: { auth_key: auth_key } });
};
module.exports = {
  login,
  register,
  sendEmail,
  updatePwd,
};

//------------------------------------
//UPDATE 사용 예제
// models.User.update(
//   { password: "새로운 유저PW" },
//   { where: { userID: "유저ID" } }
// )
//   .then((result) => {
//     res.json(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
