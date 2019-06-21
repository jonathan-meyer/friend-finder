const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app
  .use("/api", require("./app/routing/apiRoutes"))
  .use("/", require("./app/routing/htmlRoutes"))

  .listen(port, err => {
    console.log(`Listening to port ${port}`);
  });
