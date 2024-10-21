"use strict";

const checkEl = document.querySelector(".check");
const guessEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const bodyEl = document.querySelector("body");
const againEl = document.querySelector(".again");
const highscoreEl = document.querySelector(".highscore");

const displayMessage = function (message) {
  messageEl.textContent = message;
};

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function updateScore() {
  scoreEl.textContent = score;
}

let score = 20;
let highScore = 0;
let secretNumber = generateSecretNumber();

// numberEl.textContent = secretNumber;
console.log(`When start the game random number = ${secretNumber}`);

againEl.addEventListener("click", function () {
  // restore score to default
  score = 20;
  updateScore();

  // restroe message to default
  displayMessage(`Start guessing...`);

  // random secretNumber again
  secretNumber = generateSecretNumber();
  console.log(`When press againBtn random number =  ${secretNumber}`);

  // restore background color
  bodyEl.style.backgroundColor = `#222`;
  numberEl.style.width = `15rem`;

  // restore input field to empty
  guessEl.value = ``;

  // restore guess value to ?
  numberEl.textContent = `?`;
});

checkEl.addEventListener("click", function () {
  const guess = Number(guessEl.value);

  // When player is no input
  if (!guess) {
    displayMessage(`No Number 😞`);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Check score is too high or to low
      displayMessage(guess > secretNumber ? `Too High 📈` : `Too low 📉`);
      score--;
      updateScore();
    } else {
      displayMessage(`🤯 You lost the game!`);
      score = 0;
      updateScore();
    }
    // When player win the game
  } else if (guess === secretNumber) {
    displayMessage(`🥳 Correct Number`);
    bodyEl.style.backgroundColor = `#60b347`;
    numberEl.style.width = `30rem`;
    numberEl.textContent = secretNumber;

    // Set highscore
    if (score > highScore) {
      highScore = score;
      highscoreEl.textContent = score;
    }
  }
});
