// variables
const p1 = {
  scoreValue: 0,
  btn: document.querySelector("#player1Btn"),
  score: document.querySelector("#player1Score"),
};
const p2 = {
  scoreValue: 0,
  btn: document.querySelector("#player2Btn"),
  score: document.querySelector("#player2Score"),
};
let endScore = document.querySelector("#endScore");
let resetBtn = document.querySelector("#resetBtn");
let endScoreValue = 0;
let gameOver = false;

//event listeners
endScore.addEventListener("change", function () {
  endScoreValue = parseInt(this.value);
});
p1.btn.addEventListener("click", function () {
  increaseScore(p1, p2);
});
p2.btn.addEventListener("click", function () {
  increaseScore(p2, p1);
});
resetBtn.addEventListener("click", resetApp());

//functions
function resetApp() {
  resetBtn.addEventListener("click", function () {
    p1.scoreValue = 0;
    p2.scoreValue = 0;
    p1.score.textContent = 0;
    p2.score.textContent = 0;
    p1.score.classList.remove("winner", "loser");
    p2.score.classList.remove("winner", "loser");
    endScore.value = 0;
    endScoreValue = 0;
    gameOver = false;
  });
}
function increaseScore(pOne, pTwo) {
  if (pOne.scoreValue !== endScoreValue && gameOver == false) {
    pOne.scoreValue += 1;
    pOne.score.textContent = pOne.scoreValue;
    if (pOne.scoreValue === endScoreValue) {
      gameOver = true;
      pOne.score.classList.add("winner");
      pTwo.score.classList.add("loser");
    }
  }
}
