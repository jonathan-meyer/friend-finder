const writeJson = require("write-json");
const readJson = require("read-json");
const path = require("path");

const file = path.resolve("app", "data", "friends.json");

const all = () => {
  let data = readJson.sync(file);
  return data;
};

const add = (name, photo = "/avatar-blank-male.png", scores = []) => {
  if (typeof name !== "string" || name.length === 0) {
    throw "name param required";
  }

  let data = readJson.sync(file);
  data.push({ name, photo, scores: scores.map(s => Number(s)) });
  writeJson.sync(file, data);
  return data;
};

module.exports = {
  all,
  add
};
