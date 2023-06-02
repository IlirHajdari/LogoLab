const shapes = require("../lib/shape");
const circle = require("../lib/circle");
const triangle = require("../lib/triangle");
const square = require("../lib/square");
const shape = require("../lib/shape");

const generateSVG = (data) => {
  let newStr = "";
  const newShape = new shapes();
  newStr = newShape.render();

  if (data.shape === "Circle") {
    const newCircle = new circle(data.text, data.textColor, data.shapeColor);
    newStr += `\n     ${newCircle.render()}\n     ${newCircle.renderBottom()}`;
  } else if (data.shape === "Triangle") {
    const newTriangle = new triangle(
      data.text,
      data.textColor,
      data.shapeColor
    );
    newStr += `\n     ${newTriangle.render()}\n   ${newTriangle.renderBottom()}`;
  } else if (data.shape === "Square") {
    const newSquare = new square(data.text, data.textColor, data.shapeColor);
    newStr += `\n     ${newSquare.render()}\n     ${newSquare.renderBottom()}`;
  }

  return newStr;
};

module.exports = generateSVG;
