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
    // let lastPlay = opponent.board.hitList[opponent.board.hitList.length - 1];

    //board is cold -> random hit
    const goodTarget = opponent.board.hasGoodTarget();
    // console.log("good target:");
    // console.log(goodTarget);
    if (goodTarget.length === 0) {
      console.log("no good target, attacking random");
      while (!valid) {
        attackX = Math.floor(Math.random() * 10);
        attackY = Math.floor(Math.random() * 10);
        if (opponent.board.attackIsValid(attackX, attackY)) valid = true;
      }
      opponent.board.receiveAttack(attackX, attackY);
      return [attackX, attackY];
    }
    //if there is a hit on unsunk ship
    let lastHit = undefined;
    let i = 1;
    //iterate through hitList to find last hit on unsunk ship
    while (lastHit === undefined) {
      if (opponent.board.hitList.length - i < 0) {
        lastHit = null;
        console.log("there's no last hit bc game just started");
      }
      let play = opponent.board.hitList[opponent.board.hitList.length - i];
      // console.log(play);
      if (
        opponent.board.board[play[0]][play[1]] instanceof Ship &&
        !opponent.board.board[play[0]][play[1]].isSunk
      ) {
        lastHit = play;
      }
      i += 1;
    }

    // console.log("last hit: " + lastHit);

    let nextHit = undefined;

    let neighbors = opponent.board.findNeighbors(lastHit[0], lastHit[1]);
    let emptyNeighbors = neighbors.reduce((acc, current) => {
      if (
        !opponent.board.hitList.some((arr) =>
          arr.every((val, index) => val === current[index])
        )
      ) {
        // if (opponent.board.board[current[0]][current[1]] === null) {
        return acc.concat([[current[0], current[1]]]);
      }
      return acc;
    }, []);
    let unsunkShipNeighbors = neighbors.reduce((acc, current) => {
      if (
        opponent.board.board[current[0]][current[1]] instanceof Ship &&
        !opponent.board.board[current[0]][current[1]].isSunk &&
        opponent.board.hitList.some((arr) =>
          arr.every((val, index) => val === current[index])
        )
      ) {
        return acc.concat([[current[0], current[1]]]);
      }
      return acc;
    }, []);
    //no neighboring hits
    console.log("unsunkShipNeighbors:");
    console.log(unsunkShipNeighbors);
    console.log("emptyNeighbors:");
    console.log(emptyNeighbors);
    if (unsunkShipNeighbors.length === 0) {
      console.log("No neighbor hits");
      let randomIndex = Math.floor(Math.random() * emptyNeighbors.length);
      // console.log("Random index: " + randomIndex);
      nextHit = emptyNeighbors[randomIndex];
      // console.log("Next hit: " + nextHit);
      if (nextHit) {
        opponent.board.receiveAttack(nextHit[0], nextHit[1]);
        return [nextHit[0], nextHit[1]];
      }
    }
    //if neighbor hit on top, attack below if valid. If not, try further above
    if (unsunkShipNeighbors[0][1] === lastHit[1] - 1) {
      console.log("Neighbor hit on top");
      if (opponent.board.attackIsValid(lastHit[0], lastHit[1] + 1)) {
        opponent.board.receiveAttack(lastHit[0], lastHit[1] + 1);
        console.log("Attacking below");
        return [lastHit[0], lastHit[1] + 1];
      } else {
        let i = 1;
        //shitty condition but let's see
        while (unsunkShipNeighbors[0][1] - i >= 0) {
          if (
            opponent.board.attackIsValid(
              unsunkShipNeighbors[0][0],
              unsunkShipNeighbors[0][1] - i
            )
          ) {
            //this is to prevent attacking further if cells before it are empty
            if (
              opponent.board.board[unsunkShipNeighbors[0][0]][
                unsunkShipNeighbors[0][1] - i + 1
              ] === null
            ) {
              break;
            }
            opponent.board.receiveAttack(
              unsunkShipNeighbors[0][0],
              unsunkShipNeighbors[0][1] - i
            );
            console.log("Attacking further above");
            return [unsunkShipNeighbors[0][0], unsunkShipNeighbors[0][1] - i];
          }
          i += 1;
        }
      }
    }

    //if neighbour hit on right, attack left if valid. If not, try further right
    if (unsunkShipNeighbors[0][0] === lastHit[0] + 1) {
      console.log("Neighbor hit on right");
      if (opponent.board.attackIsValid(lastHit[0] - 1, lastHit[1])) {
        opponent.board.receiveAttack(lastHit[0] - 1, lastHit[1]);
        console.log("Attacking left");
        return [lastHit[0] - 1, lastHit[1]];
      } else {
        let i = 1;
        //shitty condition but let's see
        while (unsunkShipNeighbors[0][0] + i < 10) {
          if (
            opponent.board.attackIsValid(
              unsunkShipNeighbors[0][0] + i,
              unsunkShipNeighbors[0][1]
            )
          ) {
            //this is to prevent attacking further if cells before it are empty
            if (
              opponent.board.board[unsunkShipNeighbors[0][0] + i - 1][
                unsunkShipNeighbors[0][1]
              ] === null
            ) {
              break;
            }
            opponent.board.receiveAttack(
              unsunkShipNeighbors[0][0] + i,
              unsunkShipNeighbors[0][1]
            );
            console.log("Attacking further right");
            return [unsunkShipNeighbors[0][0] + i, unsunkShipNeighbors[0][1]];
          }
          i += 1;
        }
      }
    }

    //if neighbour hit below, attack top if valid. If not, try further below
    if (unsunkShipNeighbors[0][1] === lastHit[1] + 1) {
      console.log("Neighbor below");
      if (opponent.board.attackIsValid(lastHit[0], lastHit[1] - 1)) {
        console.log("Attacking top");
        opponent.board.receiveAttack(lastHit[0], lastHit[1] - 1);
        return [lastHit[0], lastHit[1] - 1];
      } else {
        let i = 1;
        //shitty condition but let's see
        while (unsunkShipNeighbors[0][1] + i < 10) {
          if (
            opponent.board.attackIsValid(
              unsunkShipNeighbors[0][0],
              unsunkShipNeighbors[0][1] + i
            )
          ) {
            //this is to prevent attacking further if cells before it are empty
            if (
              opponent.board.board[unsunkShipNeighbors[0][0]][
                unsunkShipNeighbors[0][1] + i - 1
              ] === null
            ) {
              break;
            }
            opponent.board.receiveAttack(
              unsunkShipNeighbors[0][0],
              unsunkShipNeighbors[0][1] + i
            );
            console.log("Attacking further below");
            return [unsunkShipNeighbors[0][0], unsunkShipNeighbors[0][1] + i];
          }
          i += 1;
        }
      }
    }

    //if neighbour hit on left, attack right if valid. If not, try further left
    if (unsunkShipNeighbors[0][0] === lastHit[0] - 1) {
      console.log("Neighbor on left");
      if (opponent.board.attackIsValid(lastHit[0] + 1, lastHit[1])) {
        console.log("Attacking right");
        opponent.board.receiveAttack(lastHit[0] + 1, lastHit[1]);
        return [lastHit[0] + 1, lastHit[1]];
      } else {
        let i = 1;
        //shitty condition but let's see
        while (unsunkShipNeighbors[0][0] - i >= 0) {
          if (
            opponent.board.attackIsValid(
              unsunkShipNeighbors[0][0] - i,
              unsunkShipNeighbors[0][1]
            )
          ) {
            //this is to prevent attacking further if cells before it are empty
            if (
              opponent.board.board[unsunkShipNeighbors[0][0]][
                unsunkShipNeighbors[0][1] - i + 1
              ] === null
            ) {
              break;
            }
            opponent.board.receiveAttack(
              unsunkShipNeighbors[0][0] - i,
              unsunkShipNeighbors[0][1]
            );
            console.log("Attacking further left");
            return [unsunkShipNeighbors[0][0] - i, unsunkShipNeighbors[0][1]];
          }
          i += 1;
        }
      }
    }
    //find good target and attack a neighbor:
    let newNeighbors = opponent.board.findNeighbors(
      goodTarget[0],
      goodTarget[1]
    );
    for (let i = 0; i < newNeighbors.length; i++) {
      let candidate = newNeighbors[i];
      if (opponent.board.attackIsValid(candidate[0], candidate[1])) {
        console.log("Attacking new target");
        opponent.board.receiveAttack(candidate[0], candidate[1]);
        return [candidate[0], candidate[1]];
      }
    }

    // newNeighbors.forEach(element => {
    //   if(opponent.board.attackIsValid(element[0], element[1])) {

    //   }
    // });

    //shouldn't get here, but if so, do random attack:
    while (!valid) {
      attackX = Math.floor(Math.random() * 10);
      attackY = Math.floor(Math.random() * 10);
      if (opponent.board.attackIsValid(attackX, attackY)) valid = true;
    }
    console.log("something's wrong... random attack");
    opponent.board.receiveAttack(attackX, attackY);
    return [attackX, attackY];
  }
}

// module.exports = Player;
export default Player;
