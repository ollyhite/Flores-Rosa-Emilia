const { Reviews } = require("../models");

const reviewData = [
  {
    rating: 4,
    review_title: "Wife Loved It!",
    review_text:
      "I had almost forgotten our anniversary, so this was a bit of a rush order. Despite the short notice, the flowers were delivered to my wife the next day while she was at work. She loved them, and her coworkers did too! Rosa Emilia does great work!",
    user_id: 1,
    product_id: 4,
  },
  {
    rating: 5,
    review_title: "Perfect!",
    review_text:
      "I bought these flowers for my friend's birthday. The beautiful pink and purple bouquet was delivered right on time while we were at lunch! She was so happy! I definitely recommend Rosa Emilia for any kind of flowers you need!",
    user_id: 2,
    product_id: 4,
  },
  {
    rating: 3,
    review_title: "Good bouquet, but not good enough.",
    review_text:
      "I got this bouquet for my girlfriend for Valentine's Day. I thought it looked fine, but my girlfriend wasn't very enthusiastic about it. I guess it's true what they say; you can't buy love.",
    user_id: 3,
    product_id: 4,
  },
];

const seedReviews = () => Reviews.bulkCreate(reviewData);
module.exports = seedReviews;
