const FriendCalculator = function(friends) {
  this.friends = friends;
};

FriendCalculator.prototype.calculateMatches = function(profile) {
  return this.friends
    .filter(f => f.name !== profile.name)
    .map(f => ({
      name: f.name,
      scores: f.scores,
      match: Number(
        (
          1 -
          profile.scores
            .map((score, x) => Math.abs(score - f.scores[x]))
            .reduce((p, c) => p + c, 0) *
            (1 / 40)
        ).toFixed(4)
      )
    }))
    .sort((a, b) => b.match - a.match);
};

FriendCalculator.prototype.getHigestMatch = function(profile) {
  return this.calculateMatches(profile).shift();
};

module.exports = FriendCalculator;
