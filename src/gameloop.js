// const Player = require("./player");
import Player from "./player";

let players = [];

function gameSetup(playerName, computerName) {
  const player = new Player(playerName, "human");
  const computer = new Player(computerName, "computer");

  //predetermined coordinates for now
  player.board.placeShip(player.ships[0], 2, 2);
  player.ships[1].flip();
  player.board.placeShip(player.ships[1], 8, 2);
  player.board.placeShip(player.ships[2], 2, 4);
  player.ships[3].flip();
  player.board.placeShip(player.ships[3], 2, 6);
  player.board.placeShip(player.ships[4], 4, 6);
  //same
  computer.board.placeShip(computer.ships[0], 2, 2);
  computer.ships[1].flip();
  computer.board.placeShip(computer.ships[1], 8, 2);
  computer.board.placeShip(computer.ships[2], 2, 4);
  computer.ships[3].flip();
  computer.board.placeShip(computer.ships[3], 2, 6);
  computer.board.placeShip(computer.ships[4], 4, 6);

  players = [];
  players.push(player, computer);
}

export { gameSetup, players };
