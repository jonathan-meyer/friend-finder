const FriendCalculator = function(friends) {
  this.friends = friends;
};

FriendCalculator.prototype.calculateMatches = function(name, scores) {
  return this.friends
    .filter(f => f.name !== name)
    .map(f => ({
      name: f.name,
      photo: f.photo,
      scores: f.scores,
      matchPercent: Number(
        (
          1 -
          scores
            .map((score, x) => Math.abs(score - f.scores[x]))
            .reduce((p, c) => p + c, 0) *
            (1 / 40)
        ).toFixed(4)
      )
    }))
    .sort((a, b) => b.matchPercent - a.matchPercent);
};

FriendCalculator.prototype.getHigestMatch = function(name, scores) {
  return this.calculateMatches(name, scores).shift();
};

module.exports = FriendCalculator;
