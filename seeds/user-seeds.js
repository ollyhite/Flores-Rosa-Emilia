const { User } = require("../models");

const userData = [
  {
    username: "frank",
    email: "frank@none.net",
    password: "supersecret",
  },
  {
    username: "jess",
    email: "jess@none.net",
    password: "supersecret",
  },
  {
    username: "steve",
    email: "steve@none.net",
    password: "supersecret",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
