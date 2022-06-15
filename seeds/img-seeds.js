const { Img } = require("../models");

const imgData = [
  {
    img_path: "../public/Images/2GlobesRosesOrangeLillies.jpeg",
  }, // 1
  {
    img_path: "../public/Images/BearInBalloon.jpeg",
  }, // 2
  {
    img_path: "../public/Images/BoxRosesWineBut.jpeg",
  }, // 3
  {
    img_path: "../public/Images/DoubleBalloon.jpeg",
  }, // 4
  {
    img_path: "../public/Images/GradBalloon.jpeg",
  }, // 5
  {
    img_path: "../public/Images/GreeneryTulipsRosesArr.jpeg",
  }, // 6
  {
    img_path: "../public/Images/HSBoxFRBut.jpeg",
  }, // 7
  {
    img_path: "../public/Images/HSBoxFRHeart.jpeg",
  }, // 8
  {
    img_path: "../public/Images/HSBoxFRParalell.jpeg",
  }, // 9
  {
    img_path: "../public/Images/HSBoxHollowFRHeart.jpeg",
  }, // 10
  {
    img_path: "../public/Images/HSBoxSpringRoses.jpeg",
  }, // 11
  {
    img_path: "../public/Images/HSBoxSpringRosesFR.jpeg",
  }, // 12
  {
    img_path: "../public/Images/HSBoxWBalloon.jpeg",
  }, // 13
  {
    img_path: "../public/Images/HSBoxWYORoses.jpeg",
  }, // 14
  {
    img_path: "../public/Images/HSBoxYRWRosesHearts.jpeg",
  }, // 15
  {
    img_path: "../public/Images/HSBRWStripes.jpeg",
  }, // 16
  {
    img_path: "../public/Images/HSBWhiteBlue.jpeg",
  }, // 17
  {
    img_path: "../public/Images/IHeartUBox.jpeg",
  }, // 18
  {
    img_path: "../public/Images/LaReinaBouquet.jpeg",
  }, // 19
  {
    img_path: "../public/Images/MomDayBalloon.jpeg",
  }, // 20
  {
    img_path: "../public/Images/OrangeTulipArr.jpeg",
  }, // 21
  {
    img_path: "../public/Images/OrangeWhiteMomDayBalloon.jpeg",
  }, // 22
  {
    img_path: "../public/Images/PastelPinkPurpleBouquet.jpeg",
  }, // 23
  {
    img_path: "../public/Images/PinkAndGreenBouquet.jpeg",
  }, // 24
  {
    img_path: "../public/Images/PinkAndPurpleBouquet.jpeg",
  }, // 25
  {
    img_path: "../public/Images/PinkNButMomDayBalloon.jpeg",
  }, // 26
  {
    img_path: "../public/Images/PurpleAndPinkWreath.jpeg",
  }, // 27
  {
    img_path: "../public/Images/PurpleAndWhiteArr.jpeg",
  }, // 28
  {
    img_path: "../public/Images/PurpleGradBox.jpeg",
  }, // 29
  {
    img_path: "../public/Images/PurpleRoseAndLilyArr.jpeg",
  }, // 30
  {
    img_path: "../public/Images/PurpleWhiteGradWreatheArr.jpeg",
  }, // 31
  {
    img_path: "../public/Images/QuinceañeraBouquet.jpeg",
  }, // 32
  {
    img_path: "../public/Images/RedBlackArr.jpeg",
  }, // 33
  {
    img_path: "../public/Images/RedWhiteBouquetWButFR.jpeg",
  }, // 34
  {
    img_path: "../public/Images/RedWhitePinkWreath.jpeg",
  }, // 35
  {
    img_path: "../public/Images/RedWhitePurpleArr.jpeg",
  }, // 36
  {
    img_path: "../public/Images/RosesAndPurpleSmallBouquet.jpeg",
  }, // 37
  {
    img_path: "../public/Images/RosesandTulipsBouquet.jpeg",
  }, // 38
  {
    img_path: "../public/Images/RosesNButMomDayBalloon.jpeg",
  }, // 39
  {
    img_path: "../public/Images/SpreadingRoseArr.jpeg",
  }, // 40
  {
    img_path: "../public/Images/SprFreshWarmArr.jpeg",
  }, // 41
  {
    img_path: "../public/Images/SpringArrangement.jpeg",
  }, // 42
  {
    img_path: "../public/Images/SpringBoxArr.jpeg",
  }, // 43
  {
    img_path: "../public/Images/SpringCornucopiaArr.jpeg",
  }, // 44
  {
    img_path: "../public/Images/SpringLilyRoseAndWhiteWreath.jpeg",
  }, // 45
  {
    img_path: "../public/Images/SummerArrangement.jpeg",
  }, // 46
  {
    img_path: "../public/Images/SunflowerAndLilyArr.jpeg",
  }, // 47
  {
    img_path: "../public/Images/VidBoxRosesCrysPin.jpeg",
  }, // 48
  {
    img_path: "../public/Images/WhiteAndPurpleBouquet.jpeg",
  }, // 49
  {
    img_path: "../public/Images/WhitePinkRoseLilyWreath.jpeg",
  }, // 50
  {
    img_path: "../public/Images/WhiteRoseAndLilyWreath.jpeg",
  }, // 51
  {
    img_path: "../public/Images/WhiteWreath.jpeg",
  }, // 52
  {
    img_path: "../public/Images/YellowRoseCrysPin.jpeg",
  }, // 53
];

const seedImg = () => Img.bulkCreate(imgData);

module.exports = seedImg;
