var countryName = ["brazil", "china", "finland", "sweden"];
var guessesRemaining = 12;
var guessedLetters = [];
var displayedWord = "";
var wins = 0;
var losses = 0;
var computerPick = selectWord();
var wordDiv = document.getElementById("wordDisplay");


// computer pics random word from Word bank of countries
function selectWord() {
    var randomWord = countryName[[Math.floor(Math.random() * countryName.length)]];
    return randomWord;
}
function addTheImage () {
    var img = document.getElementById('hmimg');
    
    switch(computerPick) {
        case "brazil":
        img.src = "assets/images/brazil.png";
        break;
        case "china":
        img.src = "assets/images/China.png";
        break;
        case "finland":
        img.src = "assets/images/Finalnd.png";
        break;
        case "sweden":
        img.src = "assets/images/Sweden.png";
        break;
    }


}

addTheImage();

// display the stat or score headers from ID's in HTML file
function displayStats() {
    document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters;
    document.getElementById("guessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;
}


// create underline based on computerPick 
function setDisplayWord() {
    for (var i = 0; i < computerPick.length; i++) {
        displayedWord = displayedWord + "_";
        wordDiv.textContent = displayedWord;

    }
}

// Displays the last rounds word when user wins
function newRound() {
    document.getElementById("lastWord").innerHTML = "<h2>Last Round's Word: " + computerPick + "</h2>";
    displayedWord = "";
    computerPick = selectWord();
    setDisplayWord();
    guessesRemaining = 12;
    guessedLetters = [];
    addTheImage();
}

//replaces the underscore
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

displayStats();

// calls function to create underscore
setDisplayWord();

// initates game when user presses any key to startyhg
document.onkeyup = function (event) {
    var userGuess = event.key;


    userGuess = userGuess.toLowerCase();
    //check if key user picked is a letter A-Z
    if (userGuess.match(/[a-z]/i) && userGuess.length == 1) {
        //check if letter already guessed
        if (!guessedLetters.includes(userGuess)) {
            //check if letter is in selected word
            if (computerPick.includes(userGuess)) {
                for (var i = 0; i < computerPick.length; i++) {
                    // replaces selected word if correct in the correct placement of the blanks
                    if (userGuess === computerPick.charAt(i)) {
                        displayedWord = setCharAt(displayedWord, i, userGuess);
                        wordDiv.textContent = displayedWord;
                    }
                }
            }
            //update display of guessed letters & guesses remaining no matter if it's in the word or not
            guessesRemaining--;
            guessedLetters.push(userGuess);
            console.log(guessedLetters);
        }

    }
    //check for win/loss conditions & update
    if (displayedWord === computerPick) {
        wins++;

        newRound();
        
    }
    else if (guessesRemaining === 0) {
        losses++;

        newRound();
        
    }
    displayStats();
}