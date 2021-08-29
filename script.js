"use strict";

//declaring / selecting all elements
const totalScore1 = document.getElementById("score--0"); // if using ids use getelementid it is a bit faster and
const totalScore2 = document.getElementById("score--1"); // use without #
const currentPlayer1Score = document.getElementById("current--0");
const currentPlayer2Score = document.getElementById("current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const imgDice = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const isWinner = document.querySelector(".isWinner");
//Specifying Starting Values
let currentScore = 0;
let activePlayer = 0;
let totalScore01 = 0;
let totalScore02 = 0;

const winner = function () {
  if (totalScore01 >= 100 || totalScore02 >= 100) {
    player1.classList.remove("player--active");
    player2.classList.remove("player--active");
    imgDice.classList.add("hidden");
    isWinner.classList.remove("hidden");
    activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
    isWinner.textContent = `Player ${activePlayer + 1} WON!!! 😍`;
  }
};

btnRollDice.addEventListener("click", function () {
  if (totalScore01 < 100 && totalScore02 < 100) {
    imgDice.classList.remove("hidden");
    //rolling random number and image
    const randomDiceRoll = Math.trunc(Math.random() * 6 + 1);
    imgDice.src = `dice-${randomDiceRoll}.png`;
    if (randomDiceRoll !== 1) {
      currentScore += randomDiceRoll;
      console.log(currentScore);
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      if (activePlayer == 0) {
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
        activePlayer = 1;
      } else {
        player1.classList.add("player--active");
        player2.classList.remove("player--active");
        activePlayer = 0;
      }
    }
  }
});

btnHold.addEventListener("click", function () {
  if (activePlayer == 0) {
    player1.classList.remove("player--active");
    player2.classList.add("player--active");
    totalScore01 = totalScore01 + currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore01;
    currentPlayer1Score.textContent = 0;
    currentScore = 0;
    activePlayer = 1;
    winner();
  } else if (activePlayer == 1) {
    player1.classList.add("player--active");
    player2.classList.remove("player--active");
    totalScore02 = totalScore02 + currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore02;
    currentPlayer2Score.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    winner();
  }
});

btnNewGame.addEventListener("click", function () {
  imgDice.classList.add("hidden");
  currentPlayer1Score.textContent = 0;
  currentPlayer2Score.textContent = 0;
  currentScore = 0;
  totalScore01 = 0;
  totalScore02 = 0;
  totalScore1.textContent = 0;
  totalScore2.textContent = 0;
  isWinner.classList.add("hidden");
  activePlayer = 0;
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
});
