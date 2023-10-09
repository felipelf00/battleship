// import { gameSetup, players } from "./gameloop";
import Gameboard from "./gameboard";
import gameloop from "./gameloop";
import Ship from "./ship";

function printPage() {
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Battleship: a battle of ships";
  mainTitle.id = "main-title";
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
    rightPlayer.classList.add("computer"); //check if necessary

    document.querySelector("#main").appendChild(leftPlayer);
    document.querySelector("#main").appendChild(rightPlayer);

    const rightPlayerBoard = document.querySelector(
      ".player-area.computer .board"
    );
    rightPlayerBoard.appendChild(printPositioningDisplay());

    fillBoard(gameloop.players[0]);
    fillBoard(gameloop.players[1]);
    // gameloop.next();
  });
  return formContainer;
}

function printPositioningDisplay() {
  const container = document.createElement("div");
  container.id = "positioning-display";
  const instructions = document.createElement("div");
  instructions.id = "instructions";
  instructions.textContent = "Click your board to position your ship";
  const shipDisplay = document.createElement("div");
  shipDisplay.id = "ship-display";
  shipDisplay.appendChild(printShip(gameloop.players[0].ships[0]));
  shipDisplay.dataset.ship = 0;
  const flip = document.createElement("button");
  flip.id = "flip";
  flip.textContent = "Flip orientation (f)";
  // flip.addEventListener("click", () => {
  //   const currentShip = gameloop.players[0].ships[shipDisplay.dataset.ship];
  //   currentShip.flip();
  //   shipDisplay.innerHTML = "";
  //   shipDisplay.appendChild(
  //     printShip(gameloop.players[0].ships[shipDisplay.dataset.ship])
  //   );
  // });
  flip.addEventListener("click", flipShip);
  document.addEventListener("keydown", flipShip);

  container.appendChild(instructions);
  container.appendChild(shipDisplay);
  container.appendChild(flip);

  return container;
}

function flipShip(event) {
  if (
    event.type === "click" ||
    (event.type === "keydown" && event.key === "f")
  ) {
    const shipDisplay = document.querySelector("#ship-display");
    const currentShip = gameloop.players[0].ships[shipDisplay.dataset.ship];
    currentShip.flip();
    shipDisplay.innerHTML = "";
    shipDisplay.appendChild(
      printShip(gameloop.players[0].ships[shipDisplay.dataset.ship])
    );
    //clear classes of cells being hovered
    const cellsGood = document.querySelectorAll(".good-pos");
    cellsGood.forEach((cell) => cell.classList.remove("good-pos"));
    const cellsBad = document.querySelectorAll(".bad-pos");
    cellsBad.forEach((cell) => cell.classList.remove("bad-pos"));
  }
}

function printShip(ship) {
  const shipDisplay = document.createElement("div");
  shipDisplay.id = "ship";
  if (ship.orientation === "horizontal")
    shipDisplay.classList.add("horizontal");
  if (ship.orientation === "vertical") shipDisplay.classList.add("vertical");
  for (let i = 0; i < ship.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "ship");
    shipDisplay.appendChild(cell);
  }
  return shipDisplay;
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

      if (player.type === "human") {
        const human = gameloop.players[0];
        // const computer = gameloop.players[1];

        //placement preview on hover
        cell.addEventListener("mouseenter", () => {
          if (!gameloop.ready) {
            const currentShip = human.ships[human.board.placedShips.length];
            let x = parseInt(cell.dataset.x);
            let y = parseInt(cell.dataset.y);
            if (currentShip.orientation === "horizontal") {
              if (x + currentShip.length - 1 > 9) {
                for (let i = 0; i + x <= 9; i++) {
                  const currentCell = document.querySelector(
                    `.cell[data-x="${x + i}"][data-y="${y}"]`
                  );
                  if (currentCell) {
                    currentCell.classList.add("bad-pos");
                  }
                }
              } else {
                for (let i = 0; i < currentShip.length; i++) {
                  //out of bounds?

                  const currentCell = document.querySelector(
                    `.cell[data-x="${x + i}"][data-y="${y}"]`
                  );
                  if (currentCell) {
                    currentCell.classList.add("good-pos");
                  }
                }
              }
            } else {
              if (y + currentShip.length - 1 > 9) {
                for (let i = 0; i + y <= 9; i++) {
                  const currentCell = document.querySelector(
                    `.cell[data-x="${x}"][data-y="${y + i}"]`
                  );
                  if (currentCell) {
                    currentCell.classList.add("bad-pos");
                  }
                }
              } else {
                for (let i = 0; i < currentShip.length; i++) {
                  //out of bounds?

                  const currentCell = document.querySelector(
                    `.cell[data-x="${x}"][data-y="${y + i}"]`
                  );
                  if (currentCell) {
                    currentCell.classList.add("good-pos");
                  }
                }
              }
            }
          }
        });

        cell.addEventListener("mouseleave", () => {
          if (!gameloop.ready) {
            const currentShip = human.ships[human.board.placedShips.length];
            let x = parseInt(cell.dataset.x);
            let y = parseInt(cell.dataset.y);
            if (currentShip.orientation === "horizontal") {
              if (x + currentShip.length - 1 > 9) {
                for (let i = 0; i + x <= 9; i++) {
                  const currentCell = document.querySelector(
                    `.cell[data-x="${x + i}"][data-y="${y}"]`
                  );
                  if (currentCell) {
                    currentCell.classList.remove("bad-pos");
                  }
                }
              } else {
                for (let i = 0; i < currentShip.length; i++) {
                  //out of bounds?

                  const currentCell = document.querySelector(
                    `.cell[data-x="${x + i}"][data-y="${y}"]`
                  );
                  if (currentCell) {
                    currentCell.classList.remove("good-pos");
                  }
                }
              }
            } else {
              if (y + currentShip.length - 1 > 9) {
                for (let i = 0; i + y <= 9; i++) {
                  const currentCell = document.querySelector(
                    `.cell[data-x="${x}"][data-y="${y + i}"]`
                  );
                  if (currentCell) {
                    currentCell.classList.remove("bad-pos");
                  }
                }
              } else {
                for (let i = 0; i < currentShip.length; i++) {
                  //out of bounds?

                  const currentCell = document.querySelector(
                    `.cell[data-x="${x}"][data-y="${y + i}"]`
                  );
                  if (currentCell) {
                    currentCell.classList.remove("good-pos");
                  }
                }
              }
            }
          }
        });

        //place human ships
        cell.addEventListener("click", () => {
          if (!gameloop.ready) {
            const currentShip = human.ships[human.board.placedShips.length];
            human.board.placeShip(currentShip, i, j); //check for error
            fillBoard(player);
            //all ships placed?
            if (human.board.placedShips.length >= 5) {
              gameloop.ready = true;
              const parent = document.querySelector(
                ".player-area.computer .board"
              );
              const child = document.querySelector("#positioning-display");
              parent.removeChild(child);
              gameloop.next();
              return;
            }

            const nextShip = human.ships[human.board.placedShips.length];
            console.log(nextShip);
            document.querySelector("#ship-display").innerHTML = "";
            document
              .querySelector("#ship-display")
              .appendChild(printShip(nextShip));

            document.querySelector("#ship-display").dataset.ship =
              human.board.placedShips.length;
            // return;
          }
        });
      }

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
