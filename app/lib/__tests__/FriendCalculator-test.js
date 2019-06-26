const FriendCalculator = require("../FriendCalculator");

const friends = [
  {
    name: "Ahmed",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Larry",
    scores: [3, 3, 3, 3, 1, 3, 3, 5, 3, 3]
  },
  {
    name: "Tom",
    scores: [1, 5, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: "Fred",
    scores: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: "Barny",
    scores: [1, 2, 4, 3, 2, 5, 1, 4, 3, 3]
  },
  {
    name: "High",
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    name: "Low",
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: "Mid",
    scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  }
];

/***
       6. Determine the user's most compatible friend using the following as a guide:

         - Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
         - With that done, compare the difference between current user's scores against those from other users,
         question by question. Add up the differences to calculate the `totalDifference`.
           - Example:
             - User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
             - User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
             - Total Difference: **2 + 1 + 2 =** **_5_**
         - Remember to use the absolute value of the differences. Put another way: no negative solutions! Your
         app should calculate both `5-3` and `3-5` as `2`, and so on.
         - The closest match will be the user with the least amount of difference.
      */

describe("FriendCalculator", () => {
  let fc;

  beforeEach(() => {
    fc = new FriendCalculator(friends);
  });

  it("calculateMatches() should return a list with matches", () => {
    const profile = {
      name: "Test#0",
      scores: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
    };
    const matches = fc.calculateMatches(profile);

    console.log({ matches });

    expect(matches).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          match: expect.any(Number),
          scores: expect.arrayContaining([expect.any(Number)])
        })
      ])
    );
  });

  it("getHigestMatch() should return friend `Larry`", () => {
    const profile = {
      name: "Test#1",
      scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    };

    expect(fc.getHigestMatch(profile)).toEqual(
      expect.objectContaining({
        name: "Ahmed",
        match: 1
      })
    );
  });

  it("getHigestMatch() should return friend `Larry`", () => {
    const profile = {
      name: "Test#2",
      scores: [5, 5, 3, 5, 2, 3, 3, 5, 3, 3]
    };

    expect(fc.getHigestMatch(profile)).toEqual(
      expect.objectContaining({
        name: "Larry",
        match: 0.825
      })
    );
  });

  it("getHigestMatch() should return friend `Low`", () => {
    const profile = {
      name: "Test#3",
      scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    };

    expect(fc.getHigestMatch(profile)).toEqual(
      expect.objectContaining({
        name: "Low",
        match: 1
      })
    );
  });

  it("getHigestMatch() should return friend `High`", () => {
    const profile = {
      name: "Test#4",
      scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    };

    expect(fc.getHigestMatch(profile)).toEqual(
      expect.objectContaining({
        name: "High",
        match: 1
      })
    );
  });
});
