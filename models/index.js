const { PerformanceNodeTiming } = require("perf_hooks");
const Category = require("./Category");
const Product = require("./Product");
const Img = require("./Img");
const ProdImg = require("./ProdImg");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsToMany(Img, {
  through: ProdImg,
  foreignKey: "product_id",
});

Img.belongTo(Product, {
  through: ProdImg,
  foreignKey: "img_id",
});

module.exports = { Product, Category, Img, ProdImg };
