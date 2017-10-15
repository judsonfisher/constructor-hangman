var Word = require('./word.js');

var Letter = function(input) {
	var inUse = new Word(input)
	this.letters = inUse.text.split("");
	this.length = inUse.length;
	this.array = [];
	this.displayBlanks = function() {
		for (var i = 0; i < this.length; i++) {
			this.array.push("_");
		}
		// this.array = this.array.join("  ");
		console.log(this.array);
	}
	this.replaceBlank = function(answer) {
		for (var i = 0; i < this.length; i++) {
			if (this.letters[i] == answer) {
				this.array[i] = answer;
			}
		}
	}
}

// var testWord = new Word("judson");
var testing = new Letter("judson");
// console.log(testing);

// testing.displayBlanks();
// testing.joinBlanks();

module.exports = Letter;
