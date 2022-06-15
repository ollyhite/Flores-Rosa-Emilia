const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedImg = require("./tag-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n ~~~~~~~ DATABASE SYNCED ~~~~~~~~\n");
  await seedCategories();
  console.log("\n ~~~~~~~ CATEGORIES SEEDED ~~~~~~~~\n");

  await seedProducts();
  console.log("\n ~~~~~~~ PRODUCTS SEEDED ~~~~~~~~\n");

  await seedImg();
  console.log("\n ~~~~~~~ PRODUCTS SEEDED ~~~~~~~~\n");

  ProcessingInstruction.exit(0);
};

seedAll();
