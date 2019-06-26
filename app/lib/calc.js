const calc = (profile, friends) => {
  return friends
    .filter(f => f.name !== profile.name)
    .map(f => ({
      name: f.name,
      calc: profile.scores
        .map((score, x) => Math.abs(score - f.scores[x]))
        .reduce((p, c) => p + c, 0)
    }))
    .sort((a, b) => b.calc - a.calc)
    .pop();
};

module.exports = calc;
