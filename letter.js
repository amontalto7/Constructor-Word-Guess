// constructor function used to create programmer objects

module.exports = Letter;
  function Letter(character, wasGuessed) {
    this.character = character; // string
    this.wasGuessed = wasGuessed; // boolean
  }

  // creates the toString method and applies it to all Letter objects
  // HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)
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
