const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_nickname', {
    user_uid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'guid'
      }
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_nickname',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nickname" },
          { name: "user_uid" },
        ]
      },
      {
        name: "user_uid_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_uid" },
        ]
      },
      {
        name: "nickname_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nickname" },
        ]
      },
    ]
  });
};
