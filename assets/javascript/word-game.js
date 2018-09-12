
// array for possible guesses
var gameWords = ["link", "samus", "mario", "fox", "kirby", "akuma", "sonic", "snake", "cammy", "ryu", "falco", "ken"]

//grabbing IDs from html
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("loss-text");
var guessesLeftText = document.getElementById("guesses-left");
var guessText = document.getElementById("guess");
var currentWordText = document.getElementById("current-word");

//var for the guesses?
var guessesLeft = 9;
var userGuess = [];
var wins = 0;
var loss = 0;
//var for the blanks above that arent filled in yet( idk if i should have it as gameWords.length or letters.length)
var blanks = gameWords.length

$(document).ready(function () {
//where all the fun begins. heres a while loop that makes it so the game goes on till the requirements are set.
// i learned this in codeacademy like half a year ago. is this right? ish? i guess i'll figure that out later. 
    while (blanks > 0) {
        //this makes it type
        document.onkeyup = function (event) {
            var userGuess = event.key;
            //this makes it all lowercase i think 
            userGuess = userGuess.valueOf().toLowerCase();
            //generates a random word from the array of characters
            var randomWord = function () {
                gameWords[Math.floor(Math.random() * gameWords.length)];
            }
            //what the user guesses. 
            for (var g = 0; g < gameWords.length; g++) {
                blanks[g] = "_";    //this part makes the hangman portion.
                if (gameWords[g] === userGuess) {
                    $(blanks[g]).append(userGuess);
                    blank--;
                } else {
                    guessesLeft--;
                    guessesLeftText.textContent = guessesLeft;
                }
                if (blank === 0) {
                    currentWordText.textContent = "Nice! the word was" + gameWords;
                    //this line below calls on random function for a new word 
                    currentWord.randomWord();
                }
                if (guessesLeft === 0); {
                    loss++;
                    lossText.textContent = "Losses: " + loss;
                }
            }

        }
    }
})