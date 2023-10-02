import { gameSetup, players } from "./gameloop";

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
    gameSetup(playerNameInput.value, computerNameInput.value);
    playerNameInput.value = "";
    computerNameInput.value = "";
    formContainer.classList.add("hidden");
    //create player areas after getting name input:
    const leftPlayer = printPlayerArea(players[0]);
    const rightPlayer = printPlayerArea(players[1]);
    document.querySelector("body").appendChild(leftPlayer);
    document.querySelector("body").appendChild(rightPlayer);
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
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("div");
      cell.dataset.x = i;
      cell.dataset.y = j;
      cell.dataset.type = player.type;
      cell.classList.add("cell");
      container.appendChild(cell);
    }
  }
  return container;
}

export { printPage };
