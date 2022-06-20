const scoreText = document.getElementById("scoreText");
const secondStepContainer = document.getElementById("SecondStepContainer");
const firstStepContainer = document.getElementById("FirstStepContainer");
const gameStateContainer = document.getElementById("GameStateContainer");
const rockButton = document.getElementById("RockButton");

const PIECES = ['rock', 'paper', 'scissors'];
let score = 0;

// Helpers
function chooseRandElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex]
}

function updateScoreText(score = 0) {
  if (!(score >= 0 && score <= 99)) return;

  scoreText.textContent = score;
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

let playerChoose = prompt(`Please choose one of the following options => ${pieces}`);
let cpuChoose = chooseRandElement(pieces.filter(piece => piece != playerChoose));

console.log(`Player: ${playerChoose} <==> Cpu: ${cpuChoose}`);
console.log("Player wins ", rules[playerChoose].wins === cpuChoose);
console.log("Player Lose ", rules[playerChoose].lose === cpuChoose);

/** Rules */
/**
 * Both cannot use the same piece at the time
 * 
 * The player choose a piece from the pieces available
 * 
 * The cpu choose a random piece from the pieces available
 * 
 * If the player choose rock
 *  cpu choosed from the pieces (paper, scissors)
 *  if cpu choose paper then cpu wins
 *  if cpu choose scissors then cpu loses
 * 
 * If the player choose paper
 *  cpu choosed from the pieces (rock, scissors)
 *  if cpu choose scissors then cpu wins
 *  if cpu choose rock then cpu loses
 * 
 * If the player choose scissors
 *  cpu choosed from the pieces (paper, rock)
 *  if cpu choose rock then cpu wins
 *  if cpu choose paper then cpu loses
 * 
 * when the player wins the score adds one
 * but if the cpu wins the score low one
 * 
 * Play again is returning to the first view
 * but the score is not updated
 */
