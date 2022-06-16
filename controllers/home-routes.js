const router = require('express').Router();
const { Category, Product } = require('../models');


// GET homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Bouquets', async (req, res) => {
  try {
    const dbBouquetData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: [
          'id',
          'product_name',
          'product_desc',
          'price',
        ],
      }],
    })
  
    const category = dbBouquetData.get({ plain: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/Arrangement', async (req, res) => {
  try {
    const dbArrangementData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: [
          'id',
          'product_name',
          'product_desc',
          'price',
        ],
      }],
    })
  
    const category = dbArrangementData.get({ plain: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/boxed', async (req, res) => {
  try {
    const dbBoxedData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: [
          'id',
          'product_name',
          'product_desc',
          'price',
        ],
      }],
    })
  
    const category = dbBoxedData.get({ plain: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/extras', async (req, res) => {
  try {
    const dbExtrasData = await Category.findByPk(req.params.id, {
      include: [{
        model: Product,
        attributes: [
          'id',
          'product_name',
          'product_desc',
          'price',
        ],
      }],
    })
  
    const category = dbExtrasData.get({ plain: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
    res.redirect('/');
    return;
  // }
  // res.render('login');
});

module.exports = router;
