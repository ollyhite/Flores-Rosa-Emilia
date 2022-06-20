const { Product } = require("../models");

const productData = [
  {
    product_name: "24 Roses Bouquet",
    product_desc:
      "A bouquet of two dozen roses carefully wrapped in wrapping paper and tied with a ribbon.",
    product_name_es: "",
    product_desc_es: "",
    price: 180.0,
    category_id: 1,
  }, // 1
  {
    product_name: "Quinceañera Bouquet",
    product_desc:
      "Made to be held by hand, this bouquet of bright spring colors is a perfect addition for a quinceañera.",
    product_name_es: "",
    product_desc_es: "",
    price: 120.0,
    category_id: 1,
  }, // 2
  {
    product_name: "24 Mixed Flowers Bouquet",
    product_desc:
      "This bouquet of two dozen mixed flowers is perfect for adding a touch of color and beauty to spring and summer occasions.",
    product_name_es: "",
    product_desc_es: "",
    price: 180.0,
    category_id: 1,
  }, // 3
  {
    product_name: "100 Roses Bouquet",
    product_desc:
      "100 beautiful roses carefully wrapped in paper and tied with a bow, this bouquet is perfect for making a big and bold statement.",
    product_name_es: "",
    product_desc_es: "",
    price: 280.0,
    category_id: 1,
  }, // 4
  {
    product_name: '"La Reina" Bouquet',
    product_desc:
      "100 exquisite roses wrapped in paper, lit with lights and given a crown, this bouquet will proclaim your love the Queen of your Heart.",
    product_name_es: "",
    product_desc_es: "",
    price: 280.0,
    category_id: 1,
  }, // 5
  {
    product_name: "Small Mixed Flower Arrangement",
    product_desc:
      "Carefully arranged in a vase or a basket, this arrangement will add a touch of color and beauty to any room.",
    product_name_es: "",
    product_desc_es: "",
    price: 200.0,
    category_id: 2,
  }, // 6
  {
    product_name: "Small Arrangment with Balloon",
    product_desc:
      "Inside the balloon are flowers that will never wilt, just like your love for her.",
    product_name_es: "",
    product_desc_es: "",
    price: 65.0,
    category_id: 2,
  }, // 7
  {
    product_name: "Double Globe Arrangment",
    product_desc:
      "This beautiful and stylish arrangment will add color and life wherever it is placed.",
    product_name_es: "",
    product_desc_es: "",
    price: 300.0,
    category_id: 2,
  }, // 8
  {
    product_name: "Mixed Flower Arrangment with Greenery",
    product_desc:
      "This arrangment is perfect for lighting up a room with the beauty of springtime!",
    product_name_es: "",
    product_desc_es: "",
    price: 280.0,
    category_id: 2,
  }, // 9
  {
    product_name: "Spring Cornucopia",
    product_desc:
      "A perfect placement to display joy and prosperity in any room.",
    product_name_es: "",
    product_desc_es: "",
    price: 150.0,
    category_id: 2,
  }, // 10
  {
    product_name: "Rose Arrangement",
    product_desc: "Remind her of your love every time she walks into the room.",
    product_name_es: "",
    product_desc_es: "",
    price: 250.0,
    category_id: 2,
  }, // 11
  {
    product_name: "Large Rose Arrangement",
    product_desc:
      "Your love for her is big and bold; this arrangment will say it louder than any words.",
    product_name_es: "",
    product_desc_es: "",
    price: 280.0,
    category_id: 2,
  }, // 12
  {
    product_name: "Wreath with Mixed Flowers",
    product_desc: "Add a touch of life and love to any door or wall.",
    product_name_es: "",
    product_desc_es: "",
    price: 280.0,
    category_id: 2,
  }, // 13
  {
    product_name: "Large Box of Roses with Wine",
    product_desc: "The perfect addition to any romantic evening.",
    product_name_es: "",
    product_desc_es: "",
    price: 250.0,
    category_id: 3,
  }, // 14
  {
    product_name: "Large Box of Roses with Video Player",
    product_desc: "When words alone aren't enough, let this box speak for you.",
    product_name_es: "",
    product_desc_es: "",
    price: 280.0,
    category_id: 3,
  }, // 15
  {
    product_name: "Large Round Box",
    product_desc: "Let this box add beauty and enjoyment to any celebration.",
    product_name_es: "",
    product_desc_es: "",
    price: 180.0,
    category_id: 3,
  }, // 16
  {
    product_name: '"I 💓 U" Box with Roses',
    product_desc: "Words are cheap, so let this box speak for you.",
    product_name_es: "",
    product_desc_es: "",
    price: 190.0,
    category_id: 3,
  }, // 17
  {
    product_name: "Heart-Shaped Box of Roses",
    product_desc: "You've already given her your heart; let this box prove it.",
    product_name_es: "",
    product_desc_es: "",
    price: 180.0,
    category_id: 3,
  }, // 18
  {
    product_name: "Heart-Shaped Box of Roses with Chocolates",
    product_desc:
      "For when flowers alone aren't enough, give her something as sweet as she is.",
    product_name_es: "",
    product_desc_es: "",
    price: 190.0,
    category_id: 3,
  }, // 19
  {
    product_name: "Heart-Shaped Box of Roses with Large Balloon",
    product_desc:
      "Bold feelings require bold arrangements. Show her how bold you can be.",
    product_name_es: "",
    product_desc_es: "",
    price: 150.0,
    category_id: 3,
  }, // 20
  {
    product_name: "Stuffed Bear in Balloon",
    product_desc:
      "Give her a constant companion to remind her of your love for her.",
    product_name_es: "",
    product_desc_es: "",
    price: 150.0,
    category_id: 4,
  }, // 21
  {
    product_name: "Double Balloon",
    product_desc: "Give her something as unique and beautiful as she is.",
    product_name_es: "",
    product_desc_es: "",
    price: 65.0,
    category_id: 4,
  }, // 22
  {
    product_name: "Printed Balloon",
    product_desc:
      "Actions speak louder than words; this arrangement does both.",
    product_name_es: "",
    product_desc_es: "",
    price: 100.0,
    category_id: 4,
  }, // 23
  {
    product_name: "Printed Balloon with Flowers",
    product_desc:
      "Give her the gift of words and flowers that will last as long as your love.",
    product_name_es: "",
    product_desc_es: "",
    price: 65.0,
    category_id: 4,
  }, // 24
];

const seedProducts = () => Product.bulkCreate(productData);
module.exports = seedProducts;
