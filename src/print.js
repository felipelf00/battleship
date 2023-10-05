// import { gameSetup, players } from "./gameloop";
import gameloop from "./gameloop";
import Ship from "./ship";

function printPage() {
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Battleship: a battle of ships";
  document.querySelector("body").appendChild(mainTitle);
  //main area
  const main = document.createElement("div");
  main.id = "main";
  document.body.appendChild(main);
  //player name form:
  main.appendChild(printNameForm());
  //winner screen
  // main.appendChild(printGameOver());
}

function printNameForm() {
  const formContainer = document.createElement("div");
  formContainer.id = "name-form";
  document.querySelector("body").appendChild(formContainer);

  const playerName = document.createElement("div");
  playerName.textContent = "Player name: ";
  const playerNameInput = document.createElement("input");
  const computerName = document.createElement("div");
  computerName.textContent = "Opponent name (computer): ";
  const computerNameInput = document.createElement("input");
  const submitNames = document.createElement("button");
  submitNames.textContent = "Start";

  formContainer.appendChild(playerName);
  formContainer.appendChild(playerNameInput);
  formContainer.appendChild(computerName);
  formContainer.appendChild(computerNameInput);
  formContainer.appendChild(submitNames);

  submitNames.addEventListener("click", () => {
    gameloop.gameSetup(playerNameInput.value, computerNameInput.value);
    // playerNameInput.value = "";
    // computerNameInput.value = "";
    // formContainer.classList.add("hidden");
    document.querySelector("#main").innerHTML = "";
    const leftPlayer = printPlayerArea(gameloop.players[0]);
    const rightPlayer = printPlayerArea(gameloop.players[1]);
    document.querySelector("#main").appendChild(leftPlayer);
    document.querySelector("#main").appendChild(rightPlayer);
    fillBoard(gameloop.players[0]);
    fillBoard(gameloop.players[1]);
    gameloop.next();
  });
  return formContainer;
}

function printGameOver() {
  const container = document.createElement("div");
  container.id = "game-over";
  container.classList.add("hidden");
  const winnerMessage = document.createElement("div");
  winnerMessage.id = "winner-message";
  const playAgain = document.createElement("button");
  playAgain.textContent = "Play again";
  container.appendChild(winnerMessage);
  container.appendChild(playAgain);
  playAgain.addEventListener("click", () => {
    // container.classList.add("hidden");
    // document.querySelector("#name-form").classList.remove("hidden");
    document.querySelector("#main").innerHTML = "";
    document.querySelector("#main").appendChild(printNameForm());
  });
  return container;
}

function printPlayerArea(player) {
  const container = document.createElement("div");
  container.classList.add("player-area");
  const playerName = document.createElement("h3");
  playerName.textContent = player.name;
  playerName.classList.add("player-name");
  container.appendChild(playerName);
  container.appendChild(printBoard(player));

  return container;
}

function printBoard(player) {
  const container = document.createElement("div");
  container.classList.add("board");
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      const cell = document.createElement("div");
      cell.dataset.x = i;
      cell.dataset.y = j;
      cell.dataset.type = player.type;
      cell.classList.add("cell");
      container.appendChild(cell);

      if (player.type === "computer") {
        const human = gameloop.players[0];
        const computer = gameloop.players[1];

        cell.addEventListener("click", () => {
          if (
            gameloop.currentTurn === human &&
            computer.board.attackIsValid(i, j)
          ) {
            computer.board.receiveAttack(i, j);
            registerAttack(i, j, computer);
            gameloop.next();
            // // Set a timeout for the computer play
            // const computerAttack = computer.computerPlays(human);
            // registerAttack(computerAttack[0], computerAttack[1], human);
            // gameloop.next();
          }
        });
      }
    }
  }
  return container;
}

function fillBoard(player) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (player.board.board[i][j] instanceof Ship) {
        const cell = document.querySelector(
          `.cell[data-x="${i}"][data-y="${j}"][data-type="${player.type}"]`
        );
        cell.classList.add("ship");
        if (player.type === "computer") {
          cell.classList.add("invisible");
        }
        if (player.board.board[i][j].isSunk) {
          cell.classList.add("sunk");
        }
      }
    }
  }
}

function registerAttack(x, y, player) {
  const cell = document.querySelector(
    `.cell[data-x="${x}"][data-y="${y}"][data-type="${player.type}"]`
  );
  cell.classList.add("hit");
  if (
    player.board.board[x][y] instanceof Ship &&
    player.board.board[x][y].isSunk
  ) {
    fillBoard(player);
  }
}

function declareWinner(winner) {
  document.querySelector("#main").innerHTML = "";
  document.querySelector("#main").appendChild(printGameOver());
  const gameOver = document.querySelector("#game-over");
  gameOver.classList.remove("hidden");
  document.querySelector(
    "#winner-message"
  ).textContent = `${winner.name} wins!`;
}

export { printPage, registerAttack, declareWinner };
