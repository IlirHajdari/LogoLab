const circle = require("../lib/circle");

describe("circle", () => {
  it("should render the circle shape and color", () => {
    const newCircle = new circle();
    newCircle.shapeColor = "red";
    const renderString = '<circle cx="150" cy="100" r="80" fill="red" />';

    expect(newCircle.render()).toEqual(renderString);
  });
});
