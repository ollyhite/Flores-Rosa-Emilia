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
});

Img.belongsToMany(Product, {
  through: ProdImg,
});

module.exports = { Product, Category, Img, ProdImg };
