const { ProdImg } = require("../models");

const prodImgData = [
  {
    product_id: 8,
    img_id: 1,
  },
  {
    product_id: 21,
    img_id: 2,
  },
  {
    product_id: 14,
    img_id: 3,
  },
  {
    product_id: 22,
    img_id: 4,
  },
  {
    product_id: 23,
    img_id: 5,
  },
  {
    product_id: 9,
    img_id: 6,
  },
  {
    product_id: 19,
    img_id: 7,
  },
  {
    product_id: 19,
    img_id: 8,
  },
  {
    product_id: 19,
    img_id: 9,
  },
  {
    product_id: 19,
    img_id: 10,
  },
  {
    product_id: 18,
    img_id: 11,
  },
  {
    product_id: 19,
    img_id: 12,
  },
  {
    product_id: 21,
    img_id: 13,
  },
  {
    product_id: 18,
    img_id: 14,
  },
  {
    product_id: 18,
    img_id: 15,
  },
  {
    product_id: 18,
    img_id: 16,
  },
  {
    product_id: 18,
    img_id: 17,
  },
  {
    product_id: 17,
    img_id: 18,
  },
  {
    product_id: 5,
    img_id: 19,
  },
  {
    product_id: 24,
    img_id: 20,
  },
  {
    product_id: 9,
    img_id: 21,
  },
  {
    product_id: 24,
    img_id: 22,
  },
  {
    product_id: 4,
    img_id: 23,
  },
  {
    product_id: 1,
    img_id: 24,
  },
  {
    product_id: 3,
    img_id: 25,
  },
  {
    product_id: 24,
    img_id: 26,
  },
  {
    product_id: 13,
    img_id: 27,
  },
  {
    product_id: 9,
    img_id: 28,
  },
  {
    product_id: 16,
    img_id: 29,
  },
  {
    product_id: 6,
    img_id: 30,
  },
  {
    product_id: 13,
    img_id: 31,
  },
  {
    product_id: 2,
    img_id: 32,
  },
  {
    product_id: 11,
    img_id: 33,
  },
  {
    product_id: 1,
    img_id: 34,
  },
  {
    product_id: 13,
    img_id: 35,
  },
  {
    product_id: 9,
    img_id: 36,
  },
  {
    product_id: 3,
    img_id: 37,
  },
  {
    product_id: 3,
    img_id: 38,
  },
  {
    product_id: 23,
    img_id: 39,
  },
  {
    product_id: 12,
    img_id: 40,
  },
  {
    product_id: 6,
    img_id: 41,
  },
  {
    product_id: 9,
    img_id: 42,
  },
  {
    product_id: 9,
    img_id: 43,
  },
  {
    product_id: 10,
    img_id: 44,
  },
  {
    product_id: 13,
    img_id: 45,
  },
  {
    product_id: 6,
    img_id: 46,
  },
  {
    product_id: 6,
    img_id: 47,
  },
  {
    product_id: 15,
    img_id: 48,
  },
  {
    product_id: 3,
    img_id: 49,
  },
  {
    product_id: 13,
    img_id: 50,
  },
  {
    product_id: 13,
    img_id: 51,
  },
  {
    product_id: 13,
    img_id: 52,
  },
  {
    product_id: 4,
    img_id: 53,
  },
];

const seedProdImg = () => Tag.bulkCreate(prodImgData);

module.exports = seedProdImg;
