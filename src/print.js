// import { gameSetup, players } from "./gameloop";
import gameloop from "./gameloop";
import Ship from "./ship";

function printPage() {
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Battleship: a battle of ships";
  document.querySelector("body").appendChild(mainTitle);
  //Player name form:
  document.querySelector("body").appendChild(printNameForm());
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
    playerNameInput.value = "";
    computerNameInput.value = "";
    formContainer.classList.add("hidden");
    //create player areas after getting name input:
    const leftPlayer = printPlayerArea(gameloop.players[0]);
    const rightPlayer = printPlayerArea(gameloop.players[1]);
    document.querySelector("body").appendChild(leftPlayer);
    document.querySelector("body").appendChild(rightPlayer);
    fillBoard(gameloop.players[0]);
    fillBoard(gameloop.players[1]); //only for debug
  });

  return formContainer;
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
        //must also check if cell was already attacked
        cell.addEventListener("click", () => {
          if (gameloop.currentTurn === gameloop.players[0]) {
            gameloop.players[1].board.receiveAttack(i, j);
            registerAttack(i, j, gameloop.players[1]);
            // console.log("human attacked at " + i + ", " + j);
            gameloop.next();
            //set timeout for computer play
            // console.log(gameloop.players[1]);
            const computerAttack = gameloop.players[1].computerPlays(
              gameloop.players[0]
            );
            registerAttack(
              computerAttack[0],
              computerAttack[1],
              gameloop.players[0]
            );
            gameloop.next();
          }
        });
      }
    }
  }
  return container;
}

function fillBoard(player) {
  // console.log("filling board for " + player.name);
  // console.log("1, 1 is " + player.board.board[1][1]);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (player.board.board[i][j] instanceof Ship) {
        const cell = document.querySelector(
          `.cell[data-x="${i}"][data-y="${j}"][data-type="${player.type}"]`
        );
        cell.classList.add("ship");
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

export { printPage };
