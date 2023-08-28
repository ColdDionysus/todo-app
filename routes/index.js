const router = require("express").Router();
const apiRoutes = require("./routes.api");
router.use("api/v1/", apiRoutes);
module.exports = router;
