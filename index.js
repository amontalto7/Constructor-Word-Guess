// dependency for inquirer npm package
const inquirer = require("inquirer");
const Letter = require("./Letter.js");
const Word = require("./Word.js");

let tries = 7;
let wins = 0;
let correctGuess = false;

var words = {
  wordlist: [
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
    let i = Math.floor(Math.random() * this.wordlist.length);
    let currentWord = this.wordlist[i];

    // remove word from array to prevent duplicates
    this.wordlist.splice(i, 1);
    return currentWord;
  }
};

function getNewWord() {
  let currentWord = words.randomWord();
  let currentLetters = currentWord.toUpperCase().split("");
  let letterArray = [];
  currentLetters.forEach(function(l) {
    let letter = new Letter(l, false);
    letterArray.push(letter);
  });

  let newWord = new Word(letterArray);

  console.log("New word: ")
  console.log(
    newWord
      .showWord()
      .split("")
      .join(" ")
  );
  console.log(newWord.letters);
  return newWord;
}


let playGame = function(thisWord) {
  console.log("Tries remaining: " +tries);


  inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter"
      }
    ]).then(function(answers) {
      // var newLetter = new Letter("A", false);
      // newLetter.checkChar(answers.letter);
      // var char =  newLetter.toString();
      // console.log(char);
      let guessedLetter = answers.letter.toUpperCase();
      thisWord.guessLetter(guessedLetter);
      console.log(
        thisWord
          .showWord()
          .split("")
          .join(" "));

          console.log(thisWord.letters);
          for (var i = 0; i < thisWord.letters.length; i++) {
            if ((thisWord.letters[i].wasGuessed) && (thisWord.letters[i].character === guessedLetter)) {
              correctGuess = true;
              break;
            } else {
              correctGuess = false;
            }
          }

          if (!correctGuess) {
            console.log("Nope. Try again.");
          }

          tries--;
          if (tries > 0) {
            playGame(thisWord);
          } else {
            console.log("\nGame Over");
          }

  });
// console.log(letterArray);
}

let thisWord = getNewWord();
playGame(thisWord);