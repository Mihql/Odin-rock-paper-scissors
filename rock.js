let result = 0;
let playerScore = 0;
let computerScore = 0;
let count = 0;

function playRound(player, computerChoice) {
  if (player === computerChoice) {
    result = "It's a tie!";
    count++;
  } else if (
    (player === "rock" && computerChoice === "scissor") ||
    (player === "paper" && computerChoice === "rock") ||
    (player === "scissor" && computerChoice === "paper")
  ) {
    playerScore++;
    count++;
    result = "Player Won";
  } else {
    computerScore++;
    count++;
    result = "Computer Won";
  }

  if (playerScore == 5) {
    result = "Player Won this Round, New Game";
    resetGame();
  } else if (computerScore == 5) {
    result = "Computer Won this Round, new Game";
    resetGame();
  }

  document.getElementById("round").textContent = count;
  document.getElementById("scoreplayer").textContent =
    "Player Score: " + playerScore;
  document.getElementById("scorecomputer").textContent =
    "Computer Score: " + computerScore;

  // Update game result in the new div
  document.getElementById("game-result").textContent = result;
}

// Get computerChoice array string from random()
function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

// Reset game function
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  count = 0;
  document.getElementById("scoreplayer").textContent =
    "Player Score: " + playerScore;
  document.getElementById("scorecomputer").textContent =
    "Computer Score: " + computerScore;
  document.getElementById("round").textContent = "Rounds: " + count;
  document.getElementById("game-result").textContent = "";
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", function () {
  const playerSelection = "rock";
  const computerChoice = getComputerChoice();
  playRound(playerSelection, computerChoice);
});

document.getElementById("paper").addEventListener("click", function () {
  const playerSelection = "paper";
  const computerChoice = getComputerChoice();
  playRound(playerSelection, computerChoice);
});

document.getElementById("scissor").addEventListener("click", () => {
  const playerSelection = "scissor";
  const computerChoice = getComputerChoice();
  playRound(playerSelection, computerChoice);
});
