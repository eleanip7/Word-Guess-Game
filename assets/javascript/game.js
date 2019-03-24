var countryNames = ["brazil", "china", "Sweden", "Finaland"];
var totalGueses = 10; // number of tries
var lettersGuessed = []; //letters the user guessed
var computerPick; //computer random pick
var wordGuessed = [] // word picked to match current word
var guessesRemaining = 0; // how many tries the user has left
var finishedGame = false; // "press key to try again"
var wins = 0;
var losses =0;


//user presses any key to start the game


function startGame () {
    guessesRemaining = totalGueses;
    
    

computerPick = Math.floor(Math.random()* (countryNames.length));

function displayStats() {
    document.getElementById("lettersGuessed").textContent = "Guessed Letters: " + lettersGuessed;
    document.getElementById("guessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;
}

if(countryNames[computerPick] == countryNames[0]) {
    document.getElementById ("brazil0").src = "assets/images/brazil.png";
}

else if(countryNames[computerPick] == countryNames[1]) {
    document.getElementById ("china1").src = "assets/images/China.png";
}

else if(countryNames[computerPick] == countryNames[2]) {
    document.getElementById ("finland2").src = "assets/images/Finalnd.png";
}

else if (countryNames[computerPick] == countryNames[3]) {
    document.getElementById ("sweden3").src = "assets/images/Sweden.png";
}

userGuesses = [];
wordGuessed = [];

for (var i=0; i < countryNames[computerPick].length; i++) {
    wordGuessed.push(" __ ");
}

document.getElementById("tryagain").style.cssText ="display: none;"

refreshScreen();

};

function refreshScreen () {

    document.getElementById("lettersGuessed").textContent = "Guessed Letters: " + lettersGuessed;
    document.getElementById("guessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;

};



