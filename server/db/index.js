var mysql = require("mysql");
module.exports = function () {
  return mysql.createConnection({
    host: "laftel-clone-db.c8d9zupwiwwf.ap-northeast-1.rds.amazonaws.com",
    port: "3306",
    user: "root",
    password: "mypassword",
    database: "laftel-db",
  });
};
