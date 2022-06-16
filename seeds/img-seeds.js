const { Img } = require("../models");

const imgData = [
  {
    img_path: "../public/Images/2GlobesRosesOrangeLillies.jpeg",
    product_id: 8,
  }, // 1
  {
    img_path: "../public/Images/BearInBalloon.jpeg",
    product_id: 21,
  }, // 2
  {
    img_path: "../public/Images/BoxRosesWineBut.jpeg",
    product_id: 14,
  }, // 3
  {
    img_path: "../public/Images/DoubleBalloon.jpeg",
    product_id: 22,
  }, // 4
  {
    img_path: "../public/Images/GradBalloon.jpeg",
    product_id: 23,
  }, // 5
  {
    img_path: "../public/Images/GreeneryTulipsRosesArr.jpeg",
    product_id: 9,
  }, // 6
  {
    img_path: "../public/Images/HSBoxFRBut.jpeg",
    product_id: 19,
  }, // 7
  {
    img_path: "../public/Images/HSBoxFRHeart.jpeg",
    product_id: 19,
  }, // 8
  {
    img_path: "../public/Images/HSBoxFRParalell.jpeg",
    product_id: 19,
  }, // 9
  {
    img_path: "../public/Images/HSBoxHollowFRHeart.jpeg",
    product_id: 19,
  }, // 10
  {
    img_path: "../public/Images/HSBoxSpringRoses.jpeg",
    product_id: 18,
  }, // 11
  {
    img_path: "../public/Images/HSBoxSpringRosesFR.jpeg",
    product_id: 19,
  }, // 12
  {
    img_path: "../public/Images/HSBoxWBalloon.jpeg",
    product_id: 21,
  }, // 13
  {
    img_path: "../public/Images/HSBoxWYORoses.jpeg",
    product_id: 18,
  }, // 14
  {
    img_path: "../public/Images/HSBoxYRWRosesHearts.jpeg",
    product_id: 18,
  }, // 15
  {
    img_path: "../public/Images/HSBRWStripes.jpeg",
    product_id: 18,
  }, // 16
  {
    img_path: "../public/Images/HSBWhiteBlue.jpeg",
    product_id: 18,
  }, // 17
  {
    img_path: "../public/Images/IHeartUBox.jpeg",
    product_id: 17,
  }, // 18
  {
    img_path: "../public/Images/LaReinaBouquet.jpeg",
    product_id: 5,
  }, // 19
  {
    img_path: "../public/Images/MomDayBalloon.jpeg",
    product_id: 24,
  }, // 20
  {
    img_path: "../public/Images/OrangeTulipArr.jpeg",
    product_id: 9,
  }, // 21
  {
    img_path: "../public/Images/OrangeWhiteMomDayBalloon.jpeg",
    product_id: 24,
  }, // 22
  {
    img_path: "../public/Images/PastelPinkPurpleBouquet.jpeg",
    product_id: 4,
  }, // 23
  {
    img_path: "../public/Images/PinkAndGreenBouquet.jpeg",
    product_id: 1,
  }, // 24
  {
    img_path: "../public/Images/PinkAndPurpleBouquet.jpeg",
    product_id: 3,
  }, // 25
  {
    img_path: "../public/Images/PinkNButMomDayBalloon.jpeg",
    product_id: 24,
  }, // 26
  {
    img_path: "../public/Images/PurpleAndPinkWreath.jpeg",
    product_id: 13,
  }, // 27
  {
    img_path: "../public/Images/PurpleAndWhiteArr.jpeg",
    product_id: 9,
  }, // 28
  {
    img_path: "../public/Images/PurpleGradBox.jpeg",
    product_id: 16,
  }, // 29
  {
    img_path: "../public/Images/PurpleRoseAndLilyArr.jpeg",
    product_id: 6,
  }, // 30
  {
    img_path: "../public/Images/PurpleWhiteGradWreatheArr.jpeg",
    product_id: 13,
  }, // 31
  {
    img_path: "../public/Images/QuinceañeraBouquet.jpeg",
    product_id: 2,
  }, // 32
  {
    img_path: "../public/Images/RedBlackArr.jpeg",
    product_id: 11,
  }, // 33
  {
    img_path: "../public/Images/RedWhiteBouquetWButFR.jpeg",
    product_id: 1,
  }, // 34
  {
    img_path: "../public/Images/RedWhitePinkWreath.jpeg",
    product_id: 13,
  }, // 35
  {
    img_path: "../public/Images/RedWhitePurpleArr.jpeg",
    product_id: 9,
  }, // 36
  {
    img_path: "../public/Images/RosesAndPurpleSmallBouquet.jpeg",
    product_id: 3,
  }, // 37
  {
    img_path: "../public/Images/RosesandTulipsBouquet.jpeg",
    product_id: 3,
  }, // 38
  {
    img_path: "../public/Images/RosesNButMomDayBalloon.jpeg",
    product_id: 23,
  }, // 39
  {
    img_path: "../public/Images/SpreadingRoseArr.jpeg",
    product_id: 12,
  }, // 40
  {
    img_path: "../public/Images/SprFreshWarmArr.jpeg",
    product_id: 6,
  }, // 41
  {
    img_path: "../public/Images/SpringArrangement.jpeg",
    product_id: 9,
  }, // 42
  {
    img_path: "../public/Images/SpringBoxArr.jpeg",
    product_id: 9,
  }, // 43
  {
    img_path: "../public/Images/SpringCornucopiaArr.jpeg",
    product_id: 10,
  }, // 44
  {
    img_path: "../public/Images/SpringLilyRoseAndWhiteWreath.jpeg",
    product_id: 13,
  }, // 45
  {
    img_path: "../public/Images/SummerArrangement.jpeg",
    product_id: 6,
  }, // 46
  {
    img_path: "../public/Images/SunflowerAndLilyArr.jpeg",
    product_id: 6,
  }, // 47
  {
    img_path: "../public/Images/VidBoxRosesCrysPin.jpeg",
    product_id: 15,
  }, // 48
  {
    img_path: "../public/Images/WhiteAndPurpleBouquet.jpeg",
    product_id: 3,
  }, // 49
  {
    img_path: "../public/Images/WhitePinkRoseLilyWreath.jpeg",
    product_id: 13,
  }, // 50
  {
    img_path: "../public/Images/WhiteRoseAndLilyWreath.jpeg",
    product_id: 13,
  }, // 51
  {
    img_path: "../public/Images/WhiteWreath.jpeg",
    product_id: 13,
  }, // 52
  {
    img_path: "../public/Images/YellowRoseCrysPin.jpeg",
    product_id: 4,
  }, // 53
];

const seedImg = () => Img.bulkCreate(imgData);

module.exports = seedImg;
