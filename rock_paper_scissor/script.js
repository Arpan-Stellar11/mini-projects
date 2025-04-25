let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
let scoreElement = document.querySelector(".js-score");
let resultElement = document.querySelector(".js-result");
scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

let result = "";
function computerMove() {
  let random = Math.random();
  if (random < 1 / 3) {
    return "rock";
  } else if (random < 2 / 3) {
    return "paper";
  } else {
    return "scissor";
  }
}

function play(playerMove) {
  let computer = computerMove();
  if (playerMove === computer) {
    result = "Tie.";
    score.ties += 1;
  } else if (
    (playerMove === "rock" && computer === "scissor") ||
    (playerMove === "paper" && computer === "rock") ||
    (playerMove === "scissor" && computer === "paper")
  ) {
    result = "You Win.";
    score.wins += 1;
  } else {
    result = "You Lose.";
    score.losses += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  resultElement.innerHTML = `${result}<br>
   You:
  <img src="${playerMove}-emoji.png" alt="" />
  <img src="${computer}-emoji.png" alt="" />: Computer;`;
  scoreElement.innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
}

function reset() {
  (score.wins = 0), (score.losses = 0), (score.ties = 0);
  localStorage.removeItem("score");
  scoreElement.innerHTML = `Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
  resultElement.innerHTML = "score reset to 0";
}
