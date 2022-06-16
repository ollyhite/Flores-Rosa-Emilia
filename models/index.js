const { PerformanceNodeTiming } = require("perf_hooks");
const Category = require("./Category");
const Product = require("./Product");
const Img = require("./Img");
// const ProdImg = require("./ProdImg");
const User = require("./User");
const Reviews = require("./Reviews");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Product.hasMany(Img, {
//   foreignKey: "img_id",
// });

// Img.belongsTo(Product, {
//   foreignKey: "product_id",
// });
Product.hasMany(Img);
Img.belongsTo(Product);

User.hasMany(Reviews, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Reviews.belongsTo(User, {
  foreignKey: "user_id",
});

Product.hasMany(Reviews, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Reviews.belongsTo(Product, {
  foreignKey: "Product_id",
});

module.exports = { Product, Category, Img, User, Reviews };
