const shape = require("../lib/shape");

class circle extends shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }

  renderBottom() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>\n</svg>`;
  }
}

module.exports = circle;
