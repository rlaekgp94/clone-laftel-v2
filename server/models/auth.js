const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth', {
    user_uid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'user',
        key: 'guid'
      },
      unique: "user_uid"
    },
    auth_key: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    auth_ttl: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auth_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "auth_key" },
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
    ]
  });
};
