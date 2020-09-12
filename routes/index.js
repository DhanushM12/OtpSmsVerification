const express = require("express");
const router = express.Router();

//to home page
router.get("/", function (req, res, next) {
  res.render("index");
});
router.use("/register", require("./register"));
router.use("/verify", require("./verify"));
router.use("/status", require("./status"));

module.exports = router;
