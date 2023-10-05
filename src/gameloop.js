import Player from "./player";
import { registerAttack, declareWinner } from "./print";

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
    // console.log("1, 1 is: " + computer.board.board[1][1]);
    this.players = [player, computer];
    this.currentTurn = this.players[Math.round(Math.random())];
  },

  next() {
    if (this.currentTurn === this.players[0]) {
      if (this.players[1].board.remainingShips() === 0) {
        declareWinner(this.players[0]);
        return;
      }
      this.currentTurn = this.players[1];
      const computerAttack = this.players[1].computerPlays(this.players[0]);
      //imported from print
      registerAttack(computerAttack[0], computerAttack[1], this.players[0]);
      this.next();
    } else {
      if (this.players[0].board.remainingShips() === 0) {
        declareWinner(this.players[1]);
        return;
      }
      this.currentTurn = this.players[0];
    }
  },
};

export default gameloop;
