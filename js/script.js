const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const playAgain = document.querySelector("#play-again");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function updateScore() {
  document.querySelector("#player-score").innerHTML = `${playerScore}`;
  document.querySelector("#computer-score").innerHTML = `${computerScore}`;
}

function announceWinner() {
  const buttons = document.querySelectorAll(".buttons button"); // Selecione todos os botões no seu jogo
  const winner = document.querySelector("#announce-winner"); // Selecione todos os botões no seu jogo

  // Anuncie o vencedor
  if (playerScore > computerScore) {
    winner.innerHTML = "Congratulations! You won the game!";
  } else if (computerScore > playerScore) {
    winner.innerHTML = "You lost! The computer won the game!";
  } else {
    winner.innerHTML = "The game ended in a draw!";
  }

  // Desabilite cada botão
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function playRound(e, computerSelection) {
  const playerSelection = e.target.value.toLowerCase();
  computerSelection = getComputerChoice();
  const resultElement = document.querySelector("#result");

  if (computerSelection === "paper" && playerSelection === "rock") {
    resultElement.innerHTML = "You Lose! Paper beats Rock";
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    resultElement.innerHTML = "You Lose! Scissors beats Paper";
    computerScore++;
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    resultElement.innerHTML = "You Lose! Rock beats Scissors";
    computerScore++;
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    resultElement.innerHTML = "You Won! Rock beats Scissors";
    playerScore++;
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    resultElement.innerHTML = "You Won! Paper beats Rock";
    playerScore++;
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    resultElement.innerHTML = "You Won! Scissors beats Paper";
    playerScore++;
  } else if (computerSelection === playerSelection) {
    resultElement.innerHTML = "It's a tie!";
  }

  updateScore();

  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
  }
}

function reloadPage() {
  location.reload();
  console.log("reiniciou");
}

playAgain.addEventListener("click", reloadPage);
buttonRock.addEventListener("click", playRound);
buttonPaper.addEventListener("click", playRound);
buttonScissors.addEventListener("click", playRound);
