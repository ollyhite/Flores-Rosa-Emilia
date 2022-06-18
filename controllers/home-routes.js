const router = require("express").Router();
const { Category, Product, ProdImg, Img } = require("../models");

// GET homepage
router.get("/", async (req, res) => {
  try {
    const bdImgData = await Img.findAll();
    const imgArry = bdImgData.map((img) => img.get({ plain: true }));
    // console.log({imgArry});
    // console.log("imgArry.length",imgArry.length);
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(imgArry);
    // console.log(imgArry);
    const randomImgArry =[];
    for (let i = 0; i < 8; i++) {
      const element = imgArry[i];
      randomImgArry.push(element.img_path)
    }
    
    res.render("homepage", { randomImgArry });
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

    const bouquets = [];
    for (let element of dbBouquetData.products) {
      const newy = await element.getImgs();
      // console.log(newy);
      // console.log(newy[0].img_path);
      let z = newy.map((element) => element.img_path);
      bouquets.push({
        product_id: element.id,
        product_name: element.product_name,
        product_desc: element.product_desc,
        price: element.price,
        img_path: z,
      });
    }
    // console.log(bouquets);
    res.render("bouquets", {
      bouquets,
      loggedIn: req.session.loggedIn,
    });
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

    const arrangements = [];
    for (let element of dbArrangementData.products) {
      const newy = await element.getImgs();
      // console.log(newy);
      // console.log(newy[0].img_path);
      let z = newy.map((element) => element.img_path);
      arrangements.push({
        product_id: element.id,
        product_name: element.product_name,
        product_desc: element.product_desc,
        price: element.price,
        img_path: z,
      });
    }
    // console.log(arrangements);
    res.render("arrangements", {
      arrangements,
      loggedIn: req.session.loggedIn,
    });
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

    const boxes = [];
    for (let element of dbBoxedData.products) {
      const newy = await element.getImgs();
      // console.log(newy);
      // console.log(newy[0].img_path);
      let z = newy.map((element) => element.img_path);
      boxes.push({
        product_id: element.id,
        product_name: element.product_name,
        product_desc: element.product_desc,
        price: element.price,
        img_path: z,
      });
    }
    // console.log(boxes);
    res.render("boxes", {
      boxes,
      loggedIn: req.session.loggedIn,
    });
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

    const extras = [];
    for (let element of dbExtrasData.products) {
      const newy = await element.getImgs();
      // console.log(newy);
      // console.log(newy[0].img_path);
      let z = newy.map((element) => element.img_path);
      extras.push({
        product_id: element.id,
        product_name: element.product_name,
        product_desc: element.product_desc,
        price: element.price,
        img_path: z,
      });
    }
    // console.log(extras);
    res.render("extras", {
      extras,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Img,
          attributes: ["img_path"],
        },
      ],
    });
    res.render("product", {
      product: product.get({ plain: true }),
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
  res.redirect("/");
  return;
  }
  res.render('login');
});

module.exports = router;
