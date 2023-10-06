// const Ship = require("./ship");
import Ship from "./ship";

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
  hitList = [];
  placedShips = [];

  placeShip(ship, x, y) {
    if (this.placementIsValid(ship, x, y)) {
      if (ship.orientation === "horizontal") {
        for (let i = 0; i < ship.length; i++) {
          this.board[x + i][y] = ship;
        }
        this.placedShips.push(ship);
      } else {
        for (let i = 0; i < ship.length; i++) {
          this.board[x][y + i] = ship;
        }
        this.placedShips.push(ship);
      }
    } else throw new Error("invalid placement");
  }

  // placementIsValid(ship, x, y) {
  //   if (ship.orientation === "horizontal") {
  //     if (x + ship.length - 1 > this.columns) return false;
  //     for (let i = 0; i < ship.length - 1; i++) {
  //       if (!this.board[x + i] || this.board[x + i][y] !== null) return false; //might be enough to validate placement
  //     }
  //   } else {
  //     if (y + ship.length - 1 > this.rows) return false;
  //     for (let i = 0; i < ship.length - 1; i++) {
  //       if (!this.board[x][y + i] || this.board[x][y + i] !== null)
  //         return false; //might be enough to validate placement
  //     }
  //   }
  //   return true;
  // }

  placementIsValid(ship, x, y) {
    if (ship.orientation === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (x + i >= this.board.length || this.board[x + i][y] !== null) {
          // console.log(`invalid. x: ${x}, y: ${y}, i: ${i}`);
          return false; //might be enough to validate placement
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (y + i >= this.board[x].length || this.board[x][y + i] !== null) {
          // console.log(`invalid. x: ${x}, y: ${y}, i: ${i}`);
          return false; //might be enough to validate placement
        }
      }
    }
    // console.log(`valid. x: ${x}, y: ${y}`);
    return true;
  }

  attackIsValid(x, y) {
    if (
      this.hitList.some(
        (coordinate) => coordinate[0] === x && coordinate[1] === y
      )
    ) {
      return false;
    } else {
      return true;
    }
  }

  receiveAttack(x, y) {
    this.hitList.push([x, y]);
    if (this.board[x][y] instanceof Ship) {
      this.board[x][y].hit();
    }
  }
  remainingShips() {
    return this.placedShips.reduce((notSunk, ship) => {
      return ship.isSunk ? notSunk : notSunk + 1;
    }, 0);
  }
  //this might have to include clearing placedShips and else
  clearBoard() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.board[i][j] = null;
      }
    }
  }
}

// module.exports = Gameboard;
export default Gameboard;
