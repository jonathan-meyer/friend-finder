const express = require("express");
const router = express.Router();
const Friends = require("../lib/Friends");
const Question = require("../lib/Question");
const FriendCalculator = require("../lib/FriendCalculator");

let x = 0;
const questions = [
  new Question(x++, "I make friends easily."),
  new Question(x++, "I have a vivid imagination."),
  new Question(x++, "I love large parties."),
  new Question(x++, "I get angry easily."),
  new Question(x++, "I believe in the importance of art."),
  new Question(x++, "I would never cheat on my taxes."),
  new Question(x++, "I make people feel welcome."),
  new Question(x++, "I complete tasks successfully."),
  new Question(x++, "I go straight for the goal."),
  new Question(x++, "I get chores done right away.")
];

router.get("/friends", (req, res) => {
  res.json(Friends.get());
});

router.post("/friends", (req, res) => {
  const { body } = req;

  console.log({ body });

  if (body) {
    const friend_calculator = new FriendCalculator(Friends.get());

    const data = {
      friend: friend_calculator.getHigestMatch(body.name, body.scores),
      me: {
        name: body.name,
        photo: body.photo,
        scores: body.scores
      }
    };

    Friends.add(body.name, body.photo, body.scores);

    res.json(data);
  } else {
    res.status(400).end();
  }
});

router.get("/questions", (req, res) => {
  res.json(questions);
});

module.exports = router;
