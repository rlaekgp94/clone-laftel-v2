var models = require("../models");

//var connection = databaseConnect();
var crypto = require("crypto"); //비밀번호 암호화

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
      guid: Math.round(new Date().valueOf() * Math.random()) + "", // 임시 guid
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
// exports.login = function (req, res) {

//   models.user.find({

//   var email = req.body.email;
//   var password = req.body.password;
//   connection.query(
//     "SELECT * FROM user WHERE email = ?",
//     [email],
//     function (error, results, fields) {
//       if (error) {
//         // console.log("error ocurred", error);
//         res.send({
//           code: 400,
//           failed: "error ocurred",
//         });
//       } else {
//         // console.log('The solution is: ', results);
//         if (results.length > 0) {
//           if (results[0].pwd == password) {
//             res.send({
//               code: 200,
//               success: "login sucessfull",
//             });
//           } else {
//             res.send({
//               code: 204,
//               success: "Email and password does not match",
//             });
//           }
//         } else {
//           res.send({
//             code: 204,
//             success: "Email does not exists",
//           });
//         }
//       }
//     }
//   );
// };
module.exports = {
  register,
};
