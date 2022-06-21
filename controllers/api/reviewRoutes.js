const router = require("express").Router();
const { Reviews } = require("../../models");
const withAuth = require("../../utils/auth");
//creat new review
router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.session.user_id);
    const newReviews = await Reviews.create({
      // ...req.body,
      rating:req.body.rating,
      review_title:req.body.review_title,
      review_text:req.body.review_text,
      product_id:req.body.product_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newReviews);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const ReviewsData = await Reviews.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!ReviewsData) {
      res.status(404).json({ message: "No Reviews found with this id!" });
      return;
    }

    res.status(200).json(ReviewsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
