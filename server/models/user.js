const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    guid: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "EMAIL_UNIQUE"
    },
    pwd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sex: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    adress: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    mdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mrank: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guid" },
        ]
      },
      {
        name: "EMAIL_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "GUID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guid" },
        ]
      },
    ]
  });
};
