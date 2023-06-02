const triangle = require("../lib/triangle");

describe("trianlge", () => {
  it("Should render the triangle shape and color", () => {
    const newTriangle = new triangle();
    newTriangle.shapeColor = "blue";
    const renderString =
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';

    expect(newTriangle.render()).toEqual(renderString);
  });
});
