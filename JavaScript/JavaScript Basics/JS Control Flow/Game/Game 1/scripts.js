// Create Secret Number
var secretNumber = 4;

// Ask for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is correcct
if (guess === secretNumber) {
    alert("You Got It Right!");
}

// if too high
else if (guess > secretNumber) {
    alert("Too high. Guess again!");
}

// if too low
else {
    alert("Too low. Guess again!");
}
