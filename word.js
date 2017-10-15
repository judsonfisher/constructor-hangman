// Create constructor that takes in word from array and exprots it's information
var Word = function(selectedWord) {
	this.text = selectedWord;
	this.length = selectedWord.length;
}

//Export word info (to letters?)
module.exports = Word;