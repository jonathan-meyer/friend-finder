const express = require("express");
const app = express();

app.get("/", express.static("public"));

app.listen(process.env.PORT || 3000, () => {});
