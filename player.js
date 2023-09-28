const Ship = require("./ship");
const Gameboard = require("./gameboard");

class Player {
  constructor(name) {
    this.name = name;
  }
  myBoard = new Gameboard();
  myShips = this.generateShips();

  generateShips() {
    const carrier = new Ship(5);
    const battleShip = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);
    return [carrier, battleShip, destroyer, submarine, patrolBoat];
  }
}

module.exports = Player;
