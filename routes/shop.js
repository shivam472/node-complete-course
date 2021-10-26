const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: adminData.products,
    pageTitle: "Shop",
    path: "/",
  });
});

module.exports = router;
