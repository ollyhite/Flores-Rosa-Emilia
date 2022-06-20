const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedImg = require("./img-seeds");
const seedProdImg = require("./prodimg-seeds");
const seedUser = require("./user-seeds");
const seedReviews = require("./reviews-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n ~~~~~~~ DATABASE SYNCED ~~~~~~~~\n");

  await seedCategories();
  console.log("\n ~~~~~~~ CATEGORIES SEEDED ~~~~~~~~\n");

  await seedProducts();
  console.log("\n ~~~~~~~ PRODUCTS SEEDED ~~~~~~~~\n");

  await seedImg();
  console.log("\n ~~~~~~~ IMAGES SEEDED ~~~~~~~~\n");

  // await seedProdImg();
  // console.log("\n ~~~~~~~ PRODUCT IMAGES SEEDED ~~~~~~~~\n");

  await seedUser();
  console.log("\n ~~~~~~~ USERS SEEDED ~~~~~~~~\n");

  await seedReviews();
  console.log("\n ~~~~~~~ REVIEWS SEEDED ~~~~~~~~\n");

  process.exit(0);
};

seedAll();
