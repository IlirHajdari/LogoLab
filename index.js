const inquirer = require("inquirer");
const generateSVG = require("./lib/generateSvg");
const fs = require("fs");

const userQuestions = [
  {
    type: "input",
    message: "Enter 3 characters for your logo: ",
    name: "text",
    validate: function (value) {
      if (value.length > 3) {
        return "Please enter no more than 3 characters!";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "Choose the color of your text: ",
    name: "textColor",
  },
  {
    type: "list",
    message: "Choose the shape of your logo: ",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
  },
  {
    type: "input",
    message: "Choose the color of your shape(enter the word or hex)",
    name: "shapeColor",
  },
];

inquirer.prompt(userQuestions).then((data) => {
  fs.writeFile("./work/logo.svg", generateSVG(data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
});
