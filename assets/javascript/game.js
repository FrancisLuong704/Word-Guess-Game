//possible word choices
var gameWords = ["mario", "link", "samus", "fox", "kirby"]

//vars for guesses and whatnot
var guessesLeft = 9;
var wrongGuess = [];
var blanks = [];
var wins = 0;
var loss = 0;

//grabbing classes from HTML
var underScoreText = document.getElementsByClassName("underscore");
var correctGuessText = document.getElementsByClassName("correctGuess");
var wrongGuessText = document.getElementsByClassName("wrongGuess");
var guessesLeftText = document.getElementsByClassName("guessesLeft");
var winsText = document.getElementsByClassName("wins");
var lossText = document.getElementsByClassName("loss");

//chooses a word from the list at random
var currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];

console.log(currentWord);
//makes blanks for each index of the chosen word
function makeBlanks() {
    for (var i = 0; i < currentWord.length; i++) {
        blanks.push("_"); //pushes a underscore for each index of the current word
        underScoreText[0].innerText = blanks.join(" "); // for each time the for loop runs it adds a space inbetween each underscore
    }
    console.log(blanks)
    return blanks;
}
makeBlanks();

document.onkeyup = function (event) {
    //puts user guess to each key you press
    var userGuess = event.key;
    console.log(userGuess);
    //replaces the blanks with whatever you type if it matches the letter of index of chosen word
    for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === userGuess) {
            blanks[i] = userGuess;
            underScoreText[0].innerText = blanks.join(" ");
        } else { //if its wrong then it adds to wrong letters array and displays it. also subtracts from guesses left 
            guessesLeft--;
            guessesLeftText.textContent = "Guesses Left: " + guessesLeft;

        }
    }
}

