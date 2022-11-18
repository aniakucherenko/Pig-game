"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const playerActive = document.querySelector(".player--active");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

rollBtn.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`.current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.querySelector(`.current--${activePlayer}`).textContent = 0;
  }
});
