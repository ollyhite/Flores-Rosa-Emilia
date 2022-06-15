const { Product } = require("../models");

const productData = [
  {
    product_name: "24 Roses Bouquet",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 1,
  }, // 1
  {
    product_name: "Quinceañera Bouquet",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 1,
  }, // 2
  {
    product_name: "24 Mixed Flowers Bouquet",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 1,
  }, // 3
  {
    product_name: "100 Roses Bouquet",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 1,
  }, // 4
  {
    product_name: '"La Reina" Bouquet',
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 1,
  }, // 5
  {
    product_name: "Small Mixed Flower Arrangement",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 2,
  }, // 6
  {
    product_name: "Small Arrangment with Balloon",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 2,
  }, // 7
  {
    product_name: "Double Globe Arrangment",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 2,
  }, // 8
  {
    product_name: "Mixed Flower Arrangment with Greenery",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 2,
  }, // 9
  {
    product_name: "Spring Cornucopia",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 2,
  }, // 10
  {
    product_name: "Rose Arrangement",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 2,
  }, // 11
  {
    product_name: "Large Rose Arrangement",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 2,
  }, // 12
  {
    product_name: "Wreath with Mixed Flowers",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 2,
  }, // 13
  {
    product_name: "Large Box of Roses with Wine",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 3,
  }, // 14
  {
    product_name: "Large Box of Roses with Video Player",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 3,
  }, // 15
  {
    product_name: "Large Round Box",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 3,
  }, // 16
  {
    product_name: '"I 💓 U" Box with Roses',
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 3,
  }, // 17
  {
    product_name: "Heart-Shaped Box of Roses",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 3,
  }, // 18
  {
    product_name: "Heart-Shaped Box of Roses with Chocolates",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 3,
  }, // 19
  {
    product_name: "Heart-Shaped Box of Roses with Large Balloon",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 3,
  }, // 20
  {
    product_name: "Stuffed Bear in Balloon",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 4,
  }, // 21
  {
    product_name: "Double Balloon",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 4,
  }, // 22
  {
    product_name: "Printed Balloon",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 4,
  }, // 23
  {
    product_name: "Printed Balloon with Flowers",
    product_desc: "Placeholder",
    price: 200.0,
    category_id: 4,
  }, // 24
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
