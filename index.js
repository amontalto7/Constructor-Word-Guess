// dependency for inquirer npm package
const inquirer = require("inquirer");
const Letter = require("./Letter.js");

var words = {
    wordlist:
        [
            "Apple", "Cat", "Bananna", "Dog", "School"
        ],

    randomWord: function() {
    // Math.random
    }
}

inquirer.prompt([
    {
      name: "letter",
      message: "Guess a letter"
    }
  ]).then(function(answers) {
    var newLetter = new Letter("A", false);
    // printInfo method is run to show that the newProgrammer object was successfully created and filled
    newLetter.checkChar(answers.letter);
    var char =  newLetter.toString();
    console.log(char);
  });