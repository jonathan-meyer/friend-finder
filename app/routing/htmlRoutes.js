const path = require("path");
const express = require("express");
const router = express.Router();

router
  .use("/survey", express.static(path.resolve("app", "public", "survey.html")))
  .use("/bootstrap", express.static(path.resolve("node_modules", "bootstrap")))
  .use("/jquery", express.static(path.resolve("node_modules", "jquery")))

  .use(
    "/",
    express.static(path.resolve("app", "public"), {
      index: "home.html"
    })
  );

module.exports = router;
