const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Img extends Model {}

Img.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    img_path: {
      type: DataTypes.STRING,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "img",
  }
);

module.exports = Img;
