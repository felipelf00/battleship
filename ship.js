class Ship {
  constructor(length) {
    this.length = length;
  }
  damage = 0;
  isSunk = false;
  orientation = "horizontal";
  hit() {
    this.damage += 1;
    if (this.damage >= this.length) this.isSunk = true;
  }
}

module.exports = Ship;
