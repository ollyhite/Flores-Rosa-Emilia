const router = require("express").Router();
const { Category, Product, Img, Reviews, User } = require("../models");

// GET homepage
router.get("/", async (req, res) => {
  console.log(
    "~~~~~~~~~~~~~~~~~~ " +
      req.session.user_id +
      " is the current user!" +
      " ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
  );
  try {
    const bdImgData = await Img.findAll();
    const imgArry = bdImgData.map((img) => img.get({ plain: true }));
    console.log({ imgArry });
    // console.log("imgArry.length",imgArry.length);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // console.log(j);
        // console.log([array[i], array[j]]);
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(imgArry);
    console.log(imgArry);
    const randomImgArry = [];
    for (let i = 0; i < 8; i++) {
      const element = imgArry[i];
      randomImgArry.push({ id: element.product_id, src: element.img_path });
    }
    console.log(randomImgArry);
    res.render("homepage", { randomImgArry, loggedIn: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// GET bouquets page
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
      userID: req.session.user_id,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// GET arrangements page

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
      userID: req.session.user_id,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// GET boxes page

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
      userID: req.session.user_id,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// GET extras page

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
      userID: req.session.user_id,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// GET product page
router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Img,
          attributes: ["img_path"],
        },
        {
          model: Reviews,
          attributes: ["review_title", "review_text", "rating", "user_id"],
        },
        // {
        //   model: User,
        //   attributes: ["username"],
        //   where: ["username = user_id"],
        // }
      ],
    });
    const dbProductData = product.get({ plain: true });
    const newUserData = [];
    if (dbProductData.reviews) {
      for (let i = 0; i < dbProductData.reviews.length; i++) {
        const userData = await User.findOne({
          where: { id: dbProductData.reviews[i].user_id },
        });
        const newData = {
          ...dbProductData.reviews[i],
          username: userData.username,
        };
        newUserData.push(newData);
      }
    }
    res.render("product", {
      product: product.get({ plain: true }),
      reviews: newUserData,
      userID: req.session.user_id,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET cart page
router.get("/cart", async (req, res) => {
  try {
    res.render("cart", {
      userID: req.session.user_id,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
