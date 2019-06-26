const writeJson = require("write-json");
const readJson = require("read-json");
const path = require("path");

const file = path.resolve("app", "data", "friends.json");

const get = () => {
  return readJson.sync(file);
};

const set = data => {
  writeJson.sync(file, data);
};

const add = (name, photo = "/avatar-blank-male.png", scores = []) => {
  if (typeof name !== "string" || name.length === 0) {
    throw "name param required";
  }

  let data = get();

  data.push({ name, photo, scores });

  set(data);

  return data;
};

module.exports = {
  get,
  set,
  add
};
