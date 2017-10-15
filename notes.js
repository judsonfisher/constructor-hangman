// Create initial variables that take in functions and user commands
var word = require("./word.js");
var letter = require("./letter.js");
// var guessesRemaining = 6;


var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // j _ _ n _ _ 
var wrongLetters = [];

// Game counters 
var guessesLeft = 9;

//functions

function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	// Reset variables 
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];
	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}
	// Display blank spaces in the console (figure out on your own)
	console.log(blanksAndSuccesses.join(" "));
	console.log(guessesLeft);
	console.log("Wins: " + winCount + " Losses: " + lossCount);

	// Make sure variables and setup properly
	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
};

function checkLetters(letter) {
	// check if letter exists in word
	var isLetterInWord = false;
	for (var i=0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}
	//Check location in word and populate
	if(isLetterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if (selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}
	// letter not found
	else {
		wrongLetters.push(letter);
		guessesLeft--;
	}

	console.log(blanksAndSuccesses);


}

function roundComplete() {
	console.log("Wins: " + winCount + " Losses: " + lossCount + " Guesses Left: " + guessesLeft);
	// Ensure changes are reflected (console log all recent changes)
	console.log("Guesses Left: " + guessesLeft);
	console.log("Word: " + blanksAndSuccesses.join(" "));
	console.log("Wrong guesses: " + wrongLetters.join(" "));
	//Check if won
	if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		console.log("you won");
		startGame();
	} else if (guessesLeft == 0) {
		lossCount++;
		console.log("you lost");
		startGame();
	}

	//Check if lost
}

// Initiate game
startGame();

// Register key clicks
function userGuess (guess) {
	var letterGuessed = guess;
	checkLetters(letterGuessed);
	roundComplete();

	console.log(letterGuessed);
};


// USE INQUIRER YOU IDIOT



