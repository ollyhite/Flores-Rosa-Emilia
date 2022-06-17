const router = require("express").Router();
const { Category, Product, ProdImg, Img } = require("../models");

// GET homepage
router.get("/", async (req, res) => {
  try {
    const bdImgData = await Img.findAll();
    const imgArry = bdImgData.map((img) =>
      img.get({ plain: true })
    );
    // console.log({imgArry});
    // console.log("imgArry.length",imgArry.length);
    const getRandomInt =(max) => {
     return Math.ceil(Math.random() * max);}
    const idArry=[];
    for (let i = 0; i < 6; i++) {
      const randomId = getRandomInt(imgArry.length);
      idArry.push(randomId);
    }    
    console.log({idArry});
    const sameIdArr = imgArry.filter(function (o1) {
      return idArry.some(function (o2) {
          return o1.id === o2; // return the ones with equal id
        });
    });
    const randomImgArry = sameIdArr.map((item)=>item.img_path)
    console.log(randomImgArry);
    res.render("homepage", {randomImgArry});
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
    console.log(bouquets);
    res.render('bouquets', {
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

router.get("/product/:id", async (req, res) =>{
  try {
    const product = await Product.findByPk(req.params.id,{
      include:[
        {
          model: Img,
          attributes: ["img_path"],
        }
      ]
    })
    res.render('product', {
      product:product.get({plain: true}),
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get("/login", (req, res) => {
  // if (req.session.loggedIn) {
  res.redirect("/");
  return;
  // }
  // res.render('login');
});

module.exports = router;
