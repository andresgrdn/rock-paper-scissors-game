const openRulesBtn = document.getElementById("openRulesBtn");
const closeRulesBtn = document.getElementById("closeRulesBtn");
const rulesView = document.getElementById("rulesView");

openRulesBtn.addEventListener("click", () => {
  rulesView.classList.toggle("rulesview--hidden");
});

closeRulesBtn.addEventListener("click", () => {
  rulesView.classList.toggle("rulesview--hidden");
});