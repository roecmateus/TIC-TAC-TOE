let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

let symbol1 = document.querySelector("#symbol-x");
let symbol2 = document.querySelector("#symbol-o");
let checkSymbol;
let computerSymbol;

symbol1.addEventListener("click", () => {
  checkSymbol = true;
  computerSymbol = "o";
  document.querySelector(".symbol-selector").classList.add("hide");
});

symbol2.addEventListener("click", () => {
  checkSymbol = false;
  computerSymbol = "x";
  document.querySelector(".symbol-selector").classList.add("hide");
});

//  CONTADOR DE JOGADAS
let player1 = 0;
let player2 = 0;

// ADICIONANDO O EVENTO DE CLICK AOS BOXES
for (let i = 0; i < boxes.length; i++) {
  // QUANDO ALGUÉM CLICA NA CAIXA
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    //   LIMITANDO PARA MARCAR APENAS 1 VEZ POR ESPAÇO
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      this.appendChild(cloneEl);

      // COMPUTAR JOGADA
      if (player1 == player2) {
        player1++;

        if (secondPlayer == "ai-player") {
          //FUNÇÃO EXECUTAR A JOGADA
          computerPlay();
          player2++;
        }
      } else {
        player2++;
      }

      // CHECAR QUEM VENCEU
      checkWinCondition();
    }
  });
}

// EVENTO PARA SABER SE É COM 2 JOGADORES OU CONTRA BOT
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id");

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }

    setTimeout(function () {
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    }, 50);
  });
}

// VER QUEM VAI JOGAR
function checkEl(player1, player2) {
  if (player1 == player2) {
    // X
    checkSymbol ? (el = x) : (el = o);
  } else {
    // O
    checkSymbol ? (el = o) : (el = x);
  }

  return el;
}

function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL HORIZONTAL
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    // X
    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      declareWinner("x");

      // O
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    // X
    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      declareWinner("x");
      // O
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    // X
    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      declareWinner("x");
      // O
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }

  // VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICAL VERTICA
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    // X
    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      declareWinner("x");
      // O
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    // X
    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      declareWinner("x");
      // O
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    // X
    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      declareWinner("x");
      // O
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }

  //  DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL DIAGONAL
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    // X
    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      declareWinner("x");
      // O
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    // X
    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      declareWinner("x");
      // O
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      declareWinner("o");
    }
  }
  //  VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA VELHA
  let counter = 0;
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner("Deu velha!");
  }
}

// LIMPAR JOGO, DECLARAR VENCEDOR E ATUALIZAR PLACAR
function declareWinner(winner) {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = " ";
  if (winner == "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "X venceu!";
  } else if (winner == "o") {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = "O venceu!";
  } else {
    msg = "Deu velha!";
  }

  // EXIBIR MENSAGEM NA TELA
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // ESCONDER MENSAGEM
  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 2000);

  // ZERAR AS JOGADAS
  player1 = 0;
  player2 = 0;

  // REMOVER X E O
  let boxesRemove = document.querySelectorAll(".box div");
  for (let i = 0; i < boxesRemove.length; i++) {
    boxesRemove[i].parentNode.removeChild(boxesRemove[i]);
  }
}

// EXECUTAR A LÓGICA DA JOGADA DO CPU
function computerPlay() {
  let cloneSymbol =
    computerSymbol === "x" ? x.cloneNode(true) : o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    //   SÓ PREENCHER SE ESTIVER VAZIO O FILHO
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneSymbol);
        counter++;
        break;
      }
      // CHECAR DE QUANTAS ESTÃO PREENCHIDAS
    } else {
      filled++;
    }
  }

  if (counter == 0 && filled < 9) {
    computerPlay();
  }
}
