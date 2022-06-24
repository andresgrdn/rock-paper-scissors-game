import { getScore } from "./score_storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const scoreText = document.getElementById("scoreText");
  const score = getScore();
  const scoreFormated =
    score < 10
      ? "0" + score
      : score;

  scoreText.textContent = scoreFormated;
})