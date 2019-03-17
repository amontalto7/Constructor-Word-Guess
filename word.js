const Letter = require("./Letter.js");

// constructor function
module.exports = Word;

function Word(letters, wasGuessed) {
  this.letters = letters; // array of Letter objects
}

Word.prototype.showWord = function() {
  var thisWord = "";
  for (var i = 0; i < this.letters.length; i++) {
    thisWord += this.letters[i].toString();
  }
  return thisWord;
};

Word.prototype.guessLetter = function(c) {
    for(var i = 0; i < this.letters.length; i++) {
        this.letters[i].checkChar(c);
    }
}

// MAP function

// const word = 'dallin'
// const input = 'a'
// word.split('').map((val, i, a) => {
//   return val === input ? val : '_'
// }).join(' ')