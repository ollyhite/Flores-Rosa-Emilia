const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProdImg extends Model {}

ProdImg.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    img_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "img",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "prodimg",
  }
);

module.exports = ProdImg;
