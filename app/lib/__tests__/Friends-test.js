const Friends = require("../Friends");

describe("Friends", () => {
  it("get()", () => {
    expect(Friends.get()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          photo: expect.any(String),
          scores: expect.arrayContaining([expect.any(Number)])
        })
      ])
    );
  });

  it("set()", () => {
    expect(Friends.set).toEqual(expect.any(Function));
  });

  it("add()", () => {
    expect(Friends.add).toEqual(expect.any(Function));
  });
});
