class Gameboard {
  createBoard(rows, columns) {
    let board = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push(null);
      }
      board.push(row);
    }
    return board;
  }
  rows = 10;
  columns = 10;
  board = this.createBoard(this.rows, this.columns);

  placeShip(ship, x, y) {
    if (this.placementIsValid(ship, x, y)) {
      if (ship.orientation === "horizontal") {
        for (let i = 0; i < ship.length; i++) {
          this.board[x + i][y] = ship;
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          this.board[x][y + i] = ship;
        }
      }
    } else throw new Error("invalid placement");
  }

  placementIsValid(ship, x, y) {
    if (ship.orientation === "horizontal") {
      return x + ship.length - 1 > this.columns ? false : true;
    } else {
      return y + ship.length - 1 > this.rows ? false : true;
    }
  }
}

// const myBoard = new Gameboard();
// console.log(myBoard.board);

module.exports = Gameboard;
