"use strict";

// const player0El = document.querySelector(".player--0");
// const player1El = document.querySelector(".player--1");

// const score0El = document.querySelector("#score--0");
// const score1El = document.querySelector("#score--1");
// const diceEl = document.querySelector(".dice");
// const newBtn = document.querySelector(".btn--new");
// const rollBtn = document.querySelector(".btn--roll");
// const holdBtn = document.querySelector(".btn--hold");
// const current0El = document.querySelector("#current--0");
// const current1El = document.querySelector("#current--1");

// let scores, currentScore, activePlayer, playing;

// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   player0El.classList.remove("player--winner");
//   player1El.classList.remove("player--winner");
//   player0El.classList.add("player--active");
//   player1El.classList.remove("player--active");
//   diceEl.classList.add("hidden");
// };
// init();

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add("hidden");

// const switchUser = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle("player--active");
//   player1El.classList.toggle("player--active");
// };

// rollBtn.addEventListener("click", function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6 + 1);
//     diceEl.classList.remove("hidden");
//     diceEl.src = `dice-${dice}.png`;

//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       switchUser();
//     }
//   }
// });

// holdBtn.addEventListener("click", function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 100) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add("player--winner");
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove("player--active");
//     } else {
//       switchUser();
//     }
//   }
// });

// newBtn.addEventListener("click", init);

//Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 1;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//Rolling dice

btnRoll.addEventListener("click", function () {
  if (playing) {
    //Generate a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //Display dice

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //Check for rolled 1

    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    console.log("hold the button");

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});
