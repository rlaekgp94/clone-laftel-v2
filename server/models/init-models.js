var DataTypes = require("sequelize").DataTypes;
var _animation_info = require("./animation_info");
var _user = require("./user");

function initModels(sequelize) {
  var animation_info = _animation_info(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    animation_info,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
