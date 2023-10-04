// const Player = require("./player");
import Player from "./player";

// let players = [];

const gameloop = {
  players: [],
  currentTurn: null,

  gameSetup(playerName, computerName) {
    const player = new Player(playerName, "human");
    const computer = new Player(computerName, "computer");

    player.board.placeShip(player.ships[0], 1, 1);
    player.ships[1].flip();
    player.board.placeShip(player.ships[1], 7, 1);
    player.board.placeShip(player.ships[2], 1, 3);
    player.ships[3].flip();
    player.board.placeShip(player.ships[3], 1, 5);
    player.board.placeShip(player.ships[4], 3, 5);
    //same
    computer.board.placeShip(computer.ships[0], 1, 1);
    computer.ships[1].flip();
    computer.board.placeShip(computer.ships[1], 7, 1);
    computer.board.placeShip(computer.ships[2], 1, 3);
    computer.ships[3].flip();
    computer.board.placeShip(computer.ships[3], 1, 5);
    computer.board.placeShip(computer.ships[4], 3, 5);

    this.players = [player, computer];
    this.next();
    this.currentTurn = player;
  },

  next() {
    if (this.currentTurn === null) {
      this.currentTurn = this.players[Math.round(Math.random() * 2)];
      return;
    }
    if (this.currentTurn === this.players[0]) {
      this.currentTurn = this.players[1];
      // players[1].computerPlays(players[0]);
    } else {
      this.currentTurn = this.players[0];
    }
  },
};

// function gameSetup(playerName, computerName) {
//   const player = new Player(playerName, "human");
//   const computer = new Player(computerName, "computer");

//   player.board.placeShip(player.ships[0], 1, 1);
//   player.ships[1].flip();
//   player.board.placeShip(player.ships[1], 7, 1);
//   player.board.placeShip(player.ships[2], 1, 3);
//   player.ships[3].flip();
//   player.board.placeShip(player.ships[3], 1, 5);
//   player.board.placeShip(player.ships[4], 3, 5);
//   //same
//   computer.board.placeShip(computer.ships[0], 1, 1);
//   computer.ships[1].flip();
//   computer.board.placeShip(computer.ships[1], 7, 1);
//   computer.board.placeShip(computer.ships[2], 1, 3);
//   computer.ships[3].flip();
//   computer.board.placeShip(computer.ships[3], 1, 5);
//   computer.board.placeShip(computer.ships[4], 3, 5);

//   players = [];
//   players.push(player, computer);
// }

// export { gameSetup, players };
export default gameloop;
