const path = require("path");
const express = require("express");
const router = express.Router();

router
  .use(
    "/",
    express.static(path.resolve("app", "public"), { index: "home.html" })
  )
  .use("/survey", express.static(path.resolve("app", "public", "survey.html")));

module.exports = router;
