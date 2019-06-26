const calc = require("../calc");

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
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: "Barny",
    scores: [1, 2, 4, 3, 2, 5, 1, 4, 3, 3]
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

describe("calculate friend", () => {
  it("should be Larry", () => {
    const profile = {
      name: "Ahmed",
      photo: "/avatar-blank-male.png",
      scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    };

    expect(calc(profile, friends)).toEqual(
      expect.objectContaining({
        calc: 16,
        name: "Larry"
      })
    );
  });

  it("should be Fred", () => {
    const profile = {
      name: "Ahmed",
      photo: "/avatar-blank-male.png",
      scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    };

    expect(calc(profile, friends)).toEqual(
      expect.objectContaining({
        calc: 10,
        name: "Fred"
      })
    );
  });
});
