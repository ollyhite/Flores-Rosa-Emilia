const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    items: [
      {
        product_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "product",
            key: "id",
          },
        },
        quantity: {
          type: DataTypes.INTEGER,
        },
      },
    ],
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "cart",
  }
);
