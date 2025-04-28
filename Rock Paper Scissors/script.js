// script.js

const choices = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");

// Possible choices
const options = ["rock", "paper", "scissors"];

// Listen to all button clicks
choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const playerChoice = this.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    // Update the screen
    playerChoiceDisplay.textContent = `You chose: ${capitalize(playerChoice)}`;
    computerChoiceDisplay.textContent = `Computer chose: ${capitalize(
      computerChoice
    )}`;
    winnerDisplay.textContent = winner;
  });
});

// Random computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Decide winner
function getWinner(player, computer) {
  if (player === computer) {
    return "It's a Tie!";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You Win! 🎉";
  } else {
    return "Computer Wins! 🤖";
  }
}

// Helper to capitalize first letter
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
