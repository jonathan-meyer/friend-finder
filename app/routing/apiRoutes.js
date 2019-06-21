const express = require("express");
const router = express.Router();
const friends = require("../data/friends");

router.get("/friends", (req, res) => {
  res.json(friends.all());
});

router.post("/friends", (req, res) => {
  res.json({ a: 1 });
});

module.exports = router;
