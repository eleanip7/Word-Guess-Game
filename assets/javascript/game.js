var countryNames = ["brazil", "china", "Sweden", "Finaland"];
var totalGueses = 10; // number of tries
var lettersGuessed = []; //letters the user guessed
var computerPick; //computer random pick
var wordGuessed = [] // word picked to match current word
var guessesRemaining = 0; // how many tries the user has left
var finishedGame = false; // "press key to try again"
var wins = 0;


//user presses any key to start the game


function startGame () {
    guessesRemaining = totalGueses;
    
    

computerPick = Math.floor(Math.random()* (countryNames.length));

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


for (var i=0; i < countryNames[computerPick].length; i++) {
    wordGuessed.push("__");
}

document.getElementById("tryagain").style.cssText ="display: none;"



};

function refreshScreen () {

    document.getElementById('gamewins').innerText = wins;

    var guessingWordText = "";
    for (var i=0; i < wordGuessed.length; i++) {
        guessingWordText += wordGuessed[i];
    }

    
    document.getElementById("guessesRemaining").innerText = guessesRemaining;


};

    








//generate a word at random and store it in a variable

//display the length of the word to the user

// if the guess is correct add letter to its correct placement under current word

// if the guess is incorrect then decreases guesses remaining by 1 

// if the guess is incorrect then add the letter to letters guessed

// if the amount of incorrect guesses is equal to 10, tell the user they lost

// If all the letters in current word are entered increment wins by 1
