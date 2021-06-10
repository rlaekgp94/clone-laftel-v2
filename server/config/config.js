require("dotenv").config();
const development = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_USERDATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: "mysql",
};

const test = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_USERDATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: "mysql",
};
const production = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_USERDATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: "mysql",
};

module.exports = { development, test, production };
