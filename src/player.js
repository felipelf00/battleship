const Ship = require("./ship");
const Gameboard = require("./gameboard");

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
    let attackX = Math.floor(Math.random() * 10);
    let attackY = Math.floor(Math.random() * 10);
    opponent.Gameboard.receiveAttack(attackX, attackY);
  }
}

module.exports = Player;
