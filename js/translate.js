const translateButton = document.querySelector("#buttonTranslate");

// Items
const h1 = document.querySelector("#titleH1");
const h2 = document.querySelector("#titleH2");
const h3 = document.querySelector("#titleH3");

const labelPlayer = document.querySelector("#playerLabel");
const labelComputer = document.querySelector("#compLabel");

const labelResult = document.querySelector("#resultsLabel");

const footerText = document.querySelector("#footer span");

function translateItems() {
  h1.innerHTML = "Pedra Papel Tesoura";
  h2.innerHTML = "Escolha sua arma";
  h3.innerHTML = "Faça 5 pontos para ganhar";

  buttonRock.innerHTML = "Pedra";
  buttonPaper.innerHTML = "Papel";
  buttonScissors.innerHTML = "Tesoura";

  labelPlayer.innerHTML = "Sua Pontuação";
  labelComputer.innerHTML = "Pontuação do Computador";
  labelResult.innerHTML = "Resultado";

  playAgain.innerHTML = "Jogue Denovo!";

  footerText.innerHTML = "Feito por:";

  function updateScore() {
    document.querySelector("#player-score").innerHTML = `${playerScore}`;
    document.querySelector("#computer-score").innerHTML = `${computerScore}`;
  }

  function announceWinnerPtBr() {
    const buttons = document.querySelectorAll(".buttons button"); // Selecione todos os botões no seu jogo
    const winner = document.querySelector("#announce-winner"); // Selecione todos os botões no seu jogo

    // Anuncie o vencedor
    if (playerScore > computerScore) {
      winner.innerHTML = "Parabéns! Você ganhou o jogo!";
    } else if (computerScore > playerScore) {
      winner.innerHTML = "Você perdeu! O computador ganhou o jogo!";
    } else {
      winner.innerHTML = "O jogo terminou empatado!";
    }

    // Desabilite cada botão
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }

  function playRoundPtBr(e, computerSelection) {
    const playerSelection = e.target.value.toLowerCase();
    computerSelection = getComputerChoice();
    const resultElement = document.querySelector("#result");

    if (computerSelection === "paper" && playerSelection === "rock") {
      resultElement.innerHTML = "Você perdeu! O papel vence o rock";
      computerScore++;
    } else if (
      computerSelection === "scissors" &&
      playerSelection === "paper"
    ) {
      resultElement.innerHTML = "Você perdeu! Tesoura vence papel";
      computerScore++;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      resultElement.innerHTML = "Você perdeu! Rock vence tesoura";
      computerScore++;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
      resultElement.innerHTML = "Você ganhou! Rock vence tesoura";
      playerScore++;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
      resultElement.innerHTML = "Você ganhou! O papel vence o rock";
      playerScore++;
    } else if (
      computerSelection === "paper" &&
      playerSelection === "scissors"
    ) {
      resultElement.innerHTML = "Você ganhou! Tesoura vence papel";
      playerScore++;
    } else if (computerSelection === playerSelection) {
      resultElement.innerHTML = "É um empate!";
    }

    updateScore();

    if (playerScore === 5 || computerScore === 5) {
      announceWinnerPtBr();
    }
  }

  buttonRock.addEventListener("click", playRoundPtBr);
  buttonPaper.addEventListener("click", playRoundPtBr);
  buttonScissors.addEventListener("click", playRoundPtBr);
}

translateButton.addEventListener("click", translateItems);
