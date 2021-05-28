var databaseConnect = require("../db/index");

var connection = databaseConnect();

exports.register = function (req, res) {
  var today = new Date();
  var users = {
    guid: "10001423523434", // 임시 guid
    email: req.body.email,
    pwd: req.body.password,
    mdate: today,
    mrank: "new_user",
  };
  connection.query(
    "INSERT INTO user SET ?",
    users,
    function (error, results, fields) {
      if (error) {
        console.log("error ocurred", error);
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        console.log("The solution is: ", results);
        res.send({
          code: 200,
          success: "user registered sucessfully",
        });
      }
    }
  );
};

exports.login = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  connection.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    function (error, results, fields) {
      if (error) {
        // console.log("error ocurred", error);
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        // console.log('The solution is: ', results);
        if (results.length > 0) {
          if (results[0].pwd == password) {
            res.send({
              code: 200,
              success: "login sucessfull",
            });
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match",
            });
          }
        } else {
          res.send({
            code: 204,
            success: "Email does not exists",
          });
        }
      }
    }
  );
};
