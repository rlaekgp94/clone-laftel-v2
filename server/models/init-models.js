var DataTypes = require("sequelize").DataTypes;
var _animation_board = require("./animation_board");
var _animation_info = require("./animation_info");
var _auth = require("./auth");
var _user = require("./user");
var _user_nickname = require("./user_nickname");

function initModels(sequelize) {
  var animation_board = _animation_board(sequelize, DataTypes);
  var animation_info = _animation_info(sequelize, DataTypes);
  var auth = _auth(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_nickname = _user_nickname(sequelize, DataTypes);

  animation_board.belongsTo(user, { as: "user_u", foreignKey: "user_uid"});
  user.hasMany(animation_board, { as: "animation_boards", foreignKey: "user_uid"});
  auth.belongsTo(user, { as: "user_u", foreignKey: "user_uid"});
  user.hasOne(auth, { as: "auth", foreignKey: "user_uid"});
  user_nickname.belongsTo(user, { as: "user_u", foreignKey: "user_uid"});
  user.hasMany(user_nickname, { as: "user_nicknames", foreignKey: "user_uid"});

  return {
    animation_board,
    animation_info,
    auth,
    user,
    user_nickname,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
