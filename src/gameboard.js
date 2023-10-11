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

  //for computer plays only:
  // isHot(x, y) {
  //   if (this.board[x][y] instanceof Ship && this.board[x][y].isSunk === false) {
  //     return true;
  //   }
  //   const previousHit = this.hitList[this.hitList.length - 2];
  //   if (
  //     this.board[x][y] === null &&
  //     previousHit &&
  //     this.isHot(previousHit[0], previousHit[1])
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  // hasGoodTarget() {
  //   return this.placedShips.some((ship) => {
  //     return ship.damage > 0 && !ship.isSunk;
  //   });
  // }

  // hasGoodTarget() {
  //   return this.placedShips.filter((ship) => {
  //     return ship.damage > 0 && !ship.isSunk;
  //   });
  // }

  //returns a cell with a unsunken ship that has been hit
  hasGoodTarget() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = this.board[i][j];
        if (
          cell instanceof Ship &&
          cell.damage > 0 &&
          !cell.isSunk &&
          this.hitList.some((arr) => arr[0] === i && arr[1] === j)
        ) {
          return [i, j];
        }
      }
    }
    return [];
  }

  findNeighbors(x, y) {
    let neighbors = [];
    if (x + 1 >= 0 && x + 1 < 10 && y >= 0 && y < 10) {
      neighbors.push([x + 1, y]);
    }
    if (x - 1 >= 0 && x - 1 < 10 && y >= 0 && y < 10) {
      neighbors.push([x - 1, y]);
    }
    if (x >= 0 && x < 10 && y + 1 >= 0 && y + 1 < 10) {
      neighbors.push([x, y + 1]);
    }
    if (x >= 0 && x < 10 && y - 1 >= 0 && y - 1 < 10) {
      neighbors.push([x, y - 1]);
    }
    return neighbors;
  }
}

// module.exports = Gameboard;
export default Gameboard;
