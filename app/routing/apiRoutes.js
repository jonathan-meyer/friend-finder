const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

router.get("/friends", (req, res) => {
  res.json(friends.all());
});

router.post("/friends", (req, res) => {
  const { body } = req;
  res.json(friends.add(body.name, body.photo, body.scores));
});

module.exports = router;
