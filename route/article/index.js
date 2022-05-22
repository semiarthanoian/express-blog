const express = require("express");
const router = express.Router();

router.use("/view"  , require("./action/view"));
router.use("/add"   , require("./action/add"));
router.use("/edit"  , require("./action/edit"));
router.use("/delete", require("./action/delete"));

module.exports = router;
