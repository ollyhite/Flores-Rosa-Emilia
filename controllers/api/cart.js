const router = require("express").Router();
const { Cart } = require("../../models");

router.post("/cart", async (req, res) => {
  var cart = req.body;
  req.session.cart = cart;
  req.session.save((err, sessionCart) => {
    console.log(sessionCart);
    if (err) {
      throw err;
    }
    res.json(req.session.cart);
  });
});
