// dependency for inquirer npm package
const inquirer = require("inquirer");
const Letter = require("./Letter.js");

// var A = new 

// var guessA = A.

// var newLetter = new Letter.Letter(answers.letter, false);


inquirer.prompt([
    {
      name: "letter",
      message: "Guess a letter"
    }
  ]).then(function(answers) {
    var newLetter = new Letter(answers.letter, false);
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
    var char =  newLetter.toString();
    console.log(char);
  });