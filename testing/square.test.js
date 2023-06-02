const square = require("../lib/square");

describe("square", () => {
  it("Should render the square shape and color", () => {
    const newSquare = new square();
    newSquare.shapeColor = "purple";
    const renderString = '<rect width="200" height="200" fill="purple" />';

    expect(newSquare.render()).toEqual(renderString);
  });
});
