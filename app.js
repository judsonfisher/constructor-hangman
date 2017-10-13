//Word is chosen in word.js, letters are broken down in letter.js, then app.js runs the game using the info provided

// Create initial variables that take in functions and user commands
var word = require("./word.js");
var letter = require("./letter.js");
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; // j _ _ n _ _ 

// Game counters 
var guessesLeft = 5;

//FUNCTIONS
//Start game function
//Inquirer function within startGame, must prompt endGame if no guesses remain

function playGame() {
	inquirer.prompt([
		{
	    	type: 'input',
	    	name: 'guess',
	    	message: 'Guess a letter!'
	 	}
		]).then(function(answers) {
			//Run function checking if letters and input match
		}  
};

function gameOver() {
	inquirer.prompt([
	 	{
	 		type: 'confirm',
	 		name: 'endGame',
	 		message: 'Out of guesses! Would you like to end the game?'
	 	}
		]).then(function (answers) {
			// Load new question if answer says no, end all functionality if yes(or new question no matter what)
		} 
};


// Initiate game using startGame();



