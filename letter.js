// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmer objects
function Letter(character, wasGuessed) {
  this.character = character;
  this.wasGuessed = wasGuessed;
}

// creates the printChar method and applies it to all Letter objects
Letter.prototype.printChar = function() {
    if (this.wasGuessed) { return this.character; }
    else {return "_";}
  };

Letter.prototype.checkChar = function(c) {
    if (c === this.character) { this.wasGuessed = true}
}