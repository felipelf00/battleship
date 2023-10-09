// const Ship = require("./ship");
// const Gameboard = require("./gameboard");

import Ship from "./ship";
import Gameboard from "./gameboard";

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  board = new Gameboard();
  ships = this.generateShips();

  generateShips() {
    const carrier = new Ship(5);
    const battleShip = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);
    return [carrier, battleShip, destroyer, submarine, patrolBoat];
  }

  computerPlays(opponent) {
    let valid = false;
    let attackX;
    let attackY;
    while (!valid) {
      attackX = Math.floor(Math.random() * 10);
      attackY = Math.floor(Math.random() * 10);
      if (opponent.board.attackIsValid(attackX, attackY)) valid = true;
    }
    opponent.board.receiveAttack(attackX, attackY);
    return [attackX, attackY];
  }
}

// module.exports = Player;
export default Player;
