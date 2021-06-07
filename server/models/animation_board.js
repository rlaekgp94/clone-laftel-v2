const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animation_board', {
    reply_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    animation_info_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    depth: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    bundle_id: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_uid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'user',
        key: 'guid'
      }
    },
    user_nick: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'animation_board',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reply_id" },
        ]
      },
      {
        name: "reply_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reply_id" },
        ]
      },
      {
        name: "reply_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_uid" },
        ]
      },
    ]
  });
};
