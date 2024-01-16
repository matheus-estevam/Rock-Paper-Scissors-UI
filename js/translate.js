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
}

translateButton.addEventListener("click", translateItems);
