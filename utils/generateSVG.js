const shape = require("../lib/shape");
const circle = require("../lib/circle");
const triangle = require("../lib/triangle");
const square = require("../lib/square");

const generateSVG = (data) => {
    let newStr = " "
    const newShape = new shape 
    newStr = newShape.render();

    if(data.shape === 'circle') {
        const newCircle = new circle(data.text, data.textColor, data.shapeColor)
        newStr += `\n ${newCircle.render()}\n ${newCircle.renderBottom()}`
    } else if (data.shape === 'triangle') {
        const newTrianlge = new triangle(data.text, data.textColor, data.shapeColor)
        new Str += `\n ${newTrianlge.render()}\n ${newTrianlge.renderBottom()}`
    } else if (data.shape === 'square') {
        const newSquare = new square(data.text, data.textColor, data.shapeColor)
        newStr += `\n ${newSquare.render()}\n ${newSquare.renderBottom()}`
    }
    return newStr;
}
module.exports = generateSVG