// dependency for inquirer npm package
const inquirer = require("inquirer");
const Letter = require("./Letter.js");
const Word = require("./Word.js");


var words = {
    wordlist:
        [
            "Apple",
            "Cat",
            "Bananna",
            "Dog",
            "School",
            "Dinosaur",
            "Pizza",
            "Television",
            "Netflix",
            "Baseball"
        ],

    randomWord: function() {
      let i = Math.floor(Math.random()*this.wordlist.length);
      let currentWord = this.wordlist[i]

      // remove word from array to prevent duplicates
      this.wordlist.splice(i,1);
      return currentWord;

    }
}

let currentWord = words.randomWord();
let currentLetters = currentWord.split("");
let letterArray = [];
currentLetters.forEach(function(l) {
  let letter = new Letter(l,false);
  letterArray.push(letter);
})


let newWord = new Word(letterArray);

console.log(newWord.showWord().split("").join(" "));


// inquirer.prompt([
//     {
//       name: "letter",
//       message: "Guess a letter"
//     }
//   ]).then(function(answers) {
//     var newLetter = new Letter("A", false);
//     // printInfo method is run to show that the newProgrammer object was successfully created and filled
//     newLetter.checkChar(answers.letter);
//     var char =  newLetter.toString();
//     console.log(char);
//   });


// console.log(letterArray);