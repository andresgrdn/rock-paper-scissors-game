import { getScore, setScore } from "./score_storage.js";

const secondStepContainer = document.getElementById("SecondStepContainer");
const firstStepContainer = document.getElementById("FirstStepContainer");
const gameStateContainer = document.getElementById("GameStateContainer");
const gameStateText = document.getElementById("GameStateText");
const scoreText = document.getElementById("scoreText");

const playerContainer = document.getElementById("PlayerContainer");
const cpuContainer = document.getElementById("CpuContainer");

const rockButton = document.getElementById("RockButton");
const paperButton = document.getElementById("PaperButton");
const scissorsButton = document.getElementById("ScissorsButton");

const playAgainButton = document.getElementById("PlayAgainButton");

const PIECES = ['rock', 'paper', 'scissors'];
let score = getScore();
let rules = {
  rock: {
    'wins': 'scissors',
    'lose': 'paper',
  },
  paper: {
    'wins': 'rock',
    'lose': 'scissors',
  },
  scissors: {
    'wins': 'paper',
    'lose': 'rock',
  },
}
let playerChoose, cpuChoose;
let gameResult = "";

const defaultBtnClasses = ["pick-button"];

// Helpers
function chooseRandElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex]
}

function updateScoreText(score = 0) {
  if (!(score >= 0 && score <= 99)) return;

  scoreText.textContent =
    score < 10
      ? "0" + score
      : score;
}

function updateGameStateText(gameState) {
  gameStateText.textContent = gameState;
}

function showFirstStep() {
  firstStepContainer.classList.toggle("first-step--hidden");
}

function showSecondStep() {
  secondStepContainer.classList.toggle("second-step--hidden");
}

function showStateContainer() {
  gameStateContainer.classList.toggle("game-state-container--hidden");
}

// Main
function gameLogic(player = "") {
  playerChoose = player;
  cpuChoose = chooseRandElement(PIECES);

  const playerbtn = document.createElement("button");
  const cpubtn = document.createElement("button");

  playerbtn.classList.add(...defaultBtnClasses, playerChoose + "-icon");
  cpubtn.classList.add(...defaultBtnClasses, cpuChoose + "-icon");

  playerContainer.prepend(playerbtn);
  cpuContainer.prepend(cpubtn);

  if (rules[playerChoose].wins === cpuChoose) {
    gameResult = "win";
    score += 1;
  }
  if (playerChoose === cpuChoose) {
    gameResult = "draw";
  }
  else if (rules[playerChoose].lose === cpuChoose) {
    gameResult = "lose";
    playAgainButton.classList.toggle("game-state__try-again-btn--lose");
    score -= 1;
  }
  if (score < 0) score = 0;

  updateScoreText(score);
  updateGameStateText(gameResult);

  showStateContainer();

  setScore(score);
}

rockButton.addEventListener("click", () => {
  showFirstStep();
  showSecondStep();

  gameLogic("rock");
})

paperButton.addEventListener("click", () => {
  showFirstStep();
  showSecondStep();

  gameLogic("paper");
})

scissorsButton.addEventListener("click", () => {
  showFirstStep();
  showSecondStep();

  gameLogic("scissors");
})

playAgainButton.addEventListener("click", () => {
  if (gameStateText.textContent === "lose") {
    playAgainButton.classList.toggle("game-state__try-again-btn--lose");
  }

  gameStateText.textContent = "";
  cpuContainer.removeChild(cpuContainer.firstChild);
  playerContainer.removeChild(playerContainer.firstChild);

  showStateContainer();
  showSecondStep();

  showFirstStep();
})