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
let score = 0;
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

  scoreText.textContent = score;
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
  cpuChoose = chooseRandElement(PIECES.filter(piece => piece != playerChoose));

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
  if (rules[playerChoose].lose === cpuChoose) {
    gameResult = "lose";
    score -= 1;
  }

  updateScoreText(score);
  updateGameStateText(gameResult);

  showStateContainer();
}

rockButton.addEventListener("click", () => {
  showFirstStep();
  showSecondStep();

  gameLogic(player = "rock");
})

paperButton.addEventListener("click", () => {
  showFirstStep();
  showSecondStep();

  gameLogic(player = "paper");
})

scissorsButton.addEventListener("click", () => {
  showFirstStep();
  showSecondStep();

  gameLogic(player = "scissors");
})

playAgainButton.addEventListener("click", () => {
  gameStateText.textContent = "";
  cpuContainer.removeChild(cpuContainer.firstChild);
  playerContainer.removeChild(playerContainer.firstChild);

  showStateContainer();
  showSecondStep();

  showFirstStep();
})