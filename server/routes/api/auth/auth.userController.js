const models = require("../../../models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); //비밀번호 암호화
const { v4 } = require("uuid");
const nodemailer = require("nodemailer");
const { rejects } = require("assert");
const { resolve } = require("path");
const { error } = require("console");
require("dotenv").config();

//토큰키 인증 API 구현
check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};

//회원가입 SQL 컨트롤러
register = async function (req, res) {
  try {
    const inputPassword = req.body.password;
    const inputEmail = req.body.email;
    const salt = Math.round(new Date().valueOf() * Math.random()) + "";
    const hashPassword = crypto
      .createHash("sha512")
      .update(inputPassword + salt)
      .digest("hex");

    await models.user
      .create({
        guid: v4().replace(/-/gi, ""), //uuidv4 정규식으로 최소화(-제거)
        email: inputEmail,
        pwd: hashPassword,
        mrank: "new_user",
        mdate: new Date(),
        salt: salt,
      })
      .catch((err) => {
        return Promise.reject({
          status: 409,
          success: false,
          data: err,
        });
      });

    res.status(200).json({
      success: true,
      code: 200,
      message: "successed register",
      returnObj: {},
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      code: err.status || 500,
      status: err.data.name,
      message: err.data.message,
    });
  }
};
//로그인 SQL 컨트롤러
login = async function (req, res) {
  try {
    const result = await models.user
      .findOne({
        where: {
          email: req.body.email,
        },
      })
      .catch((err) => {
        return Promise.reject({
          status: 403,
          success: false,
          data: err,
        });
      });
    await new Promise((resolve, reject) => {
      if (result != null) {
        const dbPassword = result.dataValues.pwd;
        const inputPassword = req.body.password;
        const salt = result.dataValues.salt;
        const hashPassword = crypto
          .createHash("sha512")
          .update(inputPassword + salt)
          .digest("hex");
        if (dbPassword === hashPassword) {
          const token = jwt.sign(
            { username: req.body.email },
            process.env.JWTSECRET_KEY,
            {
              algorithm: "HS256",
              expiresIn: "1m",
            }
          );
          const refresh_token = jwt.sign(
            { username: req.body.email },
            process.env.REF_JWTSECRET_KEY,
            {
              algorithm: "HS256",
              expiresIn: "30d",
            }
          );
          return res.status(200).json({
            success: true,
            code: 200,
            message: "successed login",
            returnObj: { token: token, refresh_token: refresh_token },
          });
        } else {
          //res.redirect("/user/login");
          return reject({
            status: 409,
            success: false,
            data: {
              name: "Incorrect password",
              message: "비밀번호 불일치",
            },
          });
        }
      } else {
        return reject({
          status: 409,
          success: false,
          data: {
            name: "Email does not exist",
            message: "해당 이메일이 존재하지 않습니다.",
          },
        });
      }
    }).catch((err) => {
      return Promise.reject(err);
    });
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      code: err.status || 500,
      status: err.data.name,
      message: err.data.message,
    });
  }
};

//이메일 전송 SQL 컨트롤러 -> 이베일 전송 API
sendEmail = async function (req, res) {
  try {
    const token = crypto.randomBytes(20).toString("hex"); // token 생성

    // const emailBody = req.body.emailContentHTML;
    let result = await models.user.findOne({
      where: {
        email: req.body.email,
      },
    });
    const user_uid_intoDB = await result.dataValues.guid;

    if (result != null) {
      const data = {
        auth_key: token,
        user_uid: user_uid_intoDB,
        auth_created: new Date(),
        auth_ttl: 300, // ttl 값 설정 (5분)
      };

      await models.auth.create(data).catch((err) => {
        return Promise.reject({
          status: 409,
          success: false,
          data: {
            name: "Already forwarded the contents to that email.",
            message: "이미 전송하였습니다.",
          },
        });
      });
    } else {
      return Promise.reject({
        status: 409,
        success: false,
        data: {
          name: "Email does not exist",
          message: "해당 이메일이 존재하지 않습니다.",
        },
      });
    }

    let transporter = await nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    let info = await transporter
      .sendMail({
        from: "LAFTEL Team <leeyoujun61@gmail.com>",
        to: "muenzz119@naver.com",
        subject: "안녕하세요 Laftel 고객님. 비밀번호를 변경해주세요.",
        html: `<a href="http://localhost:3000/reset/?key=${token}">비밀번호 변경 바로가기</a>`,
      })
      .catch((err) => {
        return Promise.reject({
          status: 409,
          success: false,
          data: {
            name: "ERR",
            message: "이메일을 전송하지 못했습니다.",
          },
        });
      });

    res.status(200).json({
      status: "Success",
      code: 200,
      message: "Sent Auth Email",
      messageId: info.messageId,
    });
  } catch (err) {
    console.log(err);
    res.status(err.status || 500).json({
      success: false,
      code: err.status || 500,
      status: err.data.name || "ERR",
      message: err.data.message,
    });
  }
};

//비밀번호 변경 SQL 컨트롤러 (UPDATE)
updatePwd = async function (req, res) {
  try {
    let inputPassword = await req.body.password;
    let auth_key = req.body.key;

    var salt = Math.round(new Date().valueOf() * Math.random()) + "";
    var hashPassword = crypto
      .createHash("sha512")
      .update(inputPassword + salt)
      .digest("hex");

    let searchAuth = await models.auth
      .findOne({ where: { auth_key: auth_key } })
      .catch((err) => {
        return Promise.reject({
          status: 500,
          success: false,
          data: {
            name: "ERR-DATABASE ERR",
            message: "DATABASE ERR",
          },
        });
      });
    if (searchAuth == null) {
      return await Promise.reject({
        status: 409,
        success: false,
        data: {
          name: "Invalid Key Value",
          message: "올바르지 않는 키값입니다.",
        },
      });
    }
    await models.user.update(
      { pwd: hashPassword, salt: salt },
      { where: { guid: searchAuth.dataValues.user_uid } }
    );
    var createToken = await function () {
      const token = jwt.sign(
        { username: req.body.email },
        process.env.JWTSECRET_KEY,
        {
          algorithm: "HS256",
          expiresIn: "1m",
        }
      );
      const refresh_token = jwt.sign(
        { username: req.body.email },
        process.env.REF_JWTSECRET_KEY,
        {
          algorithm: "HS256",
          expiresIn: "30d",
        }
      );

      return { token: token, refresh_token: refresh_token };
    };
    await models.auth.destroy({ where: { auth_key: auth_key } });
    res.status(200).json({
      success: true,
      code: 200,
      message: "successed login",
      returnObj: createToken(),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
module.exports = {
  login,
  register,
  sendEmail,
  updatePwd,
  check,
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
