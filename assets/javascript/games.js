var win = 0;
var loss = 0;
var guess = 9;
var listOfChoices = [];
var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");

document.onkeyup = function(event) {
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log (computerGuess);
  var userGuess = event.key;
  if (userGuess === computerGuess) {
    win++;
    guess = 9;
    listOfChoices = [];
  }
  if (userGuess !== computerGuess) {
    guess--;
    listOfChoices.push(userGuess);
  }
  if (guess === 0) {
    loss++;
    guess = 9;
    listOfChoices = [];
  }
  document.getElementById("win").textContent = win;
  document.getElementById("loss").textContent = loss;
  document.getElementById("guess").textContent = guess;
  document.getElementById("listOfChoices").textContent = listOfChoices;
};
