const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "animation_info",
    {
      service_guid: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      genre: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      uploaded_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      service_runtime: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      service_hd: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
      service_only: {
        type: DataTypes.TINYINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "animation_info",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "service_guid" }],
        },
      ],
    }
  );
};
