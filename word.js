//Create array of words
var wordOptions = ["javascript", "python", "ruby", "mysql", "jquery", "html", "react", "node", "express", "devtools", "github"];

// Create function that adds random word
selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

// Create constructor that takes in word from array and exprots it's information
var Word = function(selectedWord) {
	this.text = selectedWord;
	this.length = selectedWord.length;
}

var currentWord = new Word(selectedWord);

//Export word info (to letters?)
module.exports = {
	wordOptions: wordOptions,
	currentWord: currentWord 
}