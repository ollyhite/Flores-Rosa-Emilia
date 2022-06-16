const { User } = require("../models");

const userData = [
  {
    name: "frank",
    email: "frank@none.net",
    password: "supersecret",
  },
  {
    name: "jess",
    email: "jess@none.net",
    password: "supersecret",
  },
  {
    name: "steve",
    email: "steve@none.net",
    password: "supersecret",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
