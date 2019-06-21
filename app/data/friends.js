const writeJson = require("write-json");
const readJson = require("read-json");
const path = require("path");

const file = path.resolve("app", "data", "friends.json");

const all = () => {
  let data = readJson.sync(file);
  return data;
};

module.exports = {
  all
};
