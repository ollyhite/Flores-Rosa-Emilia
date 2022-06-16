const { Img } = require("../models");

const imgData = [
  {
    img_path: "2GlobesRosesOrangeLillies.jpeg",
    product_id: 8,
  }, // 1
  {
    img_path: "BearInBalloon.jpeg",
    product_id: 21,
  }, // 2
  {
    img_path: "BoxRosesWineBut.jpeg",
    product_id: 14,
  }, // 3
  {
    img_path: "DoubleBalloon.jpeg",
    product_id: 22,
  }, // 4
  {
    img_path: "GradBalloon.jpeg",
    product_id: 23,
  }, // 5
  {
    img_path: "GreeneryTulipsRosesArr.jpeg",
    product_id: 9,
  }, // 6
  {
    img_path: "HSBoxFRBut.jpeg",
    product_id: 19,
  }, // 7
  {
    img_path: "HSBoxFRHeart.jpeg",
    product_id: 19,
  }, // 8
  {
    img_path: "HSBoxFRParalell.jpeg",
    product_id: 19,
  }, // 9
  {
    img_path: "HSBoxHollowFRHeart.jpeg",
    product_id: 19,
  }, // 10
  {
    img_path: "HSBoxSpringRoses.jpeg",
    product_id: 18,
  }, // 11
  {
    img_path: "HSBoxSpringRosesFR.jpeg",
    product_id: 19,
  }, // 12
  {
    img_path: "HSBoxWBalloon.jpeg",
    product_id: 21,
  }, // 13
  {
    img_path: "HSBoxWYORoses.jpeg",
    product_id: 18,
  }, // 14
  {
    img_path: "HSBoxYRWRosesHearts.jpeg",
    product_id: 18,
  }, // 15
  {
    img_path: "HSBRWStripes.jpeg",
    product_id: 18,
  }, // 16
  {
    img_path: "HSBWhiteBlue.jpeg",
    product_id: 18,
  }, // 17
  {
    img_path: "IHeartUBox.jpeg",
    product_id: 17,
  }, // 18
  {
    img_path: "LaReinaBouquet.jpeg",
    product_id: 5,
  }, // 19
  {
    img_path: "MomDayBalloon.jpeg",
    product_id: 24,
  }, // 20
  {
    img_path: "OrangeTulipArr.jpeg",
    product_id: 9,
  }, // 21
  {
    img_path: "OrangeWhiteMomDayBalloon.jpeg",
    product_id: 24,
  }, // 22
  {
    img_path: "PastelPinkPurpleBouquet.jpeg",
    product_id: 4,
  }, // 23
  {
    img_path: "PinkAndGreenBouquet.jpeg",
    product_id: 1,
  }, // 24
  {
    img_path: "PinkAndPurpleBouquet.jpeg",
    product_id: 3,
  }, // 25
  {
    img_path: "PinkNButMomDayBalloon.jpeg",
    product_id: 24,
  }, // 26
  {
    img_path: "PurpleAndPinkWreath.jpeg",
    product_id: 13,
  }, // 27
  {
    img_path: "PurpleAndWhiteArr.jpeg",
    product_id: 9,
  }, // 28
  {
    img_path: "PurpleGradBox.jpeg",
    product_id: 16,
  }, // 29
  {
    img_path: "PurpleRoseAndLilyArr.jpeg",
    product_id: 6,
  }, // 30
  {
    img_path: "PurpleWhiteGradWreatheArr.jpeg",
    product_id: 13,
  }, // 31
  {
    img_path: "QuinceañeraBouquet.jpeg",
    product_id: 2,
  }, // 32
  {
    img_path: "RedBlackArr.jpeg",
    product_id: 11,
  }, // 33
  {
    img_path: "RedWhiteBouquetWButFR.jpeg",
    product_id: 1,
  }, // 34
  {
    img_path: "RedWhitePinkWreath.jpeg",
    product_id: 13,
  }, // 35
  {
    img_path: "RedWhitePurpleArr.jpeg",
    product_id: 9,
  }, // 36
  {
    img_path: "RosesAndPurpleSmallBouquet.jpeg",
    product_id: 3,
  }, // 37
  {
    img_path: "RosesandTulipsBouquet.jpeg",
    product_id: 3,
  }, // 38
  {
    img_path: "RosesNButMomDayBalloon.jpeg",
    product_id: 23,
  }, // 39
  {
    img_path: "SpreadingRoseArr.jpeg",
    product_id: 12,
  }, // 40
  {
    img_path: "SprFreshWarmArr.jpeg",
    product_id: 6,
  }, // 41
  {
    img_path: "SpringArrangement.jpeg",
    product_id: 9,
  }, // 42
  {
    img_path: "SpringBoxArr.jpeg",
    product_id: 9,
  }, // 43
  {
    img_path: "SpringCornucopiaArr.jpeg",
    product_id: 10,
  }, // 44
  {
    img_path: "SpringLilyRoseAndWhiteWreath.jpeg",
    product_id: 13,
  }, // 45
  {
    img_path: "SummerArrangement.jpeg",
    product_id: 6,
  }, // 46
  {
    img_path: "SunflowerAndLilyArr.jpeg",
    product_id: 6,
  }, // 47
  {
    img_path: "VidBoxRosesCrysPin.jpeg",
    product_id: 15,
  }, // 48
  {
    img_path: "WhiteAndPurpleBouquet.jpeg",
    product_id: 3,
  }, // 49
  {
    img_path: "WhitePinkRoseLilyWreath.jpeg",
    product_id: 13,
  }, // 50
  {
    img_path: "WhiteRoseAndLilyWreath.jpeg",
    product_id: 13,
  }, // 51
  {
    img_path: "WhiteWreath.jpeg",
    product_id: 13,
  }, // 52
  {
    img_path: "YellowRoseCrysPin.jpeg",
    product_id: 4,
  }, // 53
];

const seedImg = () => Img.bulkCreate(imgData);

module.exports = seedImg;
