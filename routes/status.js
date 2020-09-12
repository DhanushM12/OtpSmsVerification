const express = require("express");
const router = express.Router();

router.get("/status", function (req, res, next) {
  res.render("status");
});

module.exports = router;
