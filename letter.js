// constructor function used to create programmer objects

module.exports = Letter;
  function Letter(character, wasGuessed) {
    this.character = character; // string
    this.wasGuessed = wasGuessed; // boolean
  }

  // creates the printChar method and applies it to all Letter objects
Letter.prototype.toString = function() {
  if (this.wasGuessed) {
    return this.character;
  } else {
    return "_";
  }
};

Letter.prototype.checkChar = function(c) {
  if (c === this.character) {
    this.wasGuessed = true;
  }
};
