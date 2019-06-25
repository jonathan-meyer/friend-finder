const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const server = app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())

  .use("/api", require("./app/routing/apiRoutes"))
  .use("/", require("./app/routing/htmlRoutes"))

  .listen(port, err => {
    console.log(`Listening to port ${port}`);
  });

module.exports = server;
