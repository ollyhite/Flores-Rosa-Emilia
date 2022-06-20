const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const homeRoutesEs = require("./home-routes-es.js");

router.use("/", homeRoutes);
router.use("/es", homeRoutesEs);
router.use("/api", apiRoutes);

module.exports = router;
