const router = require("express").Router();
const { Category, Product, ProdImg, Img } = require("../models");

// GET homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/bouquets", async (req, res) => {
  try {
    const dbBouquetData = await Category.findByPk(1, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "product_desc", "price"],
        },
      ],
    });

    const y = [];
    for (let element of dbBouquetData.products) {
      const newy = await element.getImgs();
      // console.log(newy);
      // console.log(newy[0].img_path);
      let z = newy.map((element) => element.img_path);
      y.push({
        product_id: element.id,
        product_name: element.product_name,
        product_desc: element.product_desc,
        price: element.price,
        img_path: z,
      });
    }
    console.log(y);
    res.json(y);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/arrangements", async (req, res) => {
  try {
    const dbArrangementData = await Category.findByPk(2, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "product_desc", "price"],
        },
      ],
    });

    const category = dbArrangementData.get({ plain: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/boxes", async (req, res) => {
  try {
    const dbBoxedData = await Category.findByPk(3, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "product_desc", "price"],
        },
      ],
    });

    const category = dbBoxedData.get({ plain: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/extras", async (req, res) => {
  try {
    const dbExtrasData = await Category.findByPk(4, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "product_desc", "price"],
        },
      ],
    });

    const category = dbExtrasData.get({ plain: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if (req.session.loggedIn) {
  res.redirect("/");
  return;
  // }
  // res.render('login');
});

module.exports = router;
