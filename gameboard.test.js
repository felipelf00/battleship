const Gameboard = require("./gameboard");
const Ship = require("./ship");

const myBoard = new Gameboard();

const shipH3 = new Ship(3);
const shipV2 = new Ship(2);
shipV2.orientation = "vertical";

test("ship is placed horizontally", () => {
  myBoard.placeShip(shipH3, 0, 0);
  expect(myBoard.board[0][0]).toBe(shipH3);
  expect(myBoard.board[1][0]).toBe(shipH3);
  expect(myBoard.board[2][0]).toBe(shipH3);
  expect(myBoard.board[3][0]).not.toBe(shipH3);
  expect(myBoard.board[0][1]).not.toBe(shipH3);
  myBoard.clearBoard();
});

test("ship is placed vertically", () => {
  myBoard.placeShip(shipV2, 2, 2);
  expect(myBoard.board[2][2]).toBe(shipV2);
  expect(myBoard.board[2][3]).toBe(shipV2);
  expect(myBoard.board[2][4]).not.toBe(shipV2);
  expect(myBoard.board[2][1]).not.toBe(shipV2);
  myBoard.clearBoard();
});

test("placement out of bounds", () => {
  expect(() => myBoard.placeShip(shipH3, 9, 0)).toThrow("invalid placement");
  myBoard.clearBoard();
});

test("ship can only be placed in empty spaces", () => {
  myBoard.placeShip(shipH3, 4, 5);
  expect(() => myBoard.placeShip(shipV2, 5, 5)).toThrow("invalid placement");
  myBoard.clearBoard();
});

test("receiveAttack calls hit() when attack is a hit", () => {
  const mockHit = jest.fn();
  shipH3.hit = mockHit;
  myBoard.placeShip(shipH3, 3, 2);

  myBoard.receiveAttack(4, 2);
  expect(mockHit).toHaveBeenCalled();

  const isHitRecorded = myBoard.hitList.some(
    (coord) => coord[0] === 4 && coord[1] === 2
  );

  expect(isHitRecorded).toBe(true);
  myBoard.clearBoard();
});

test("correctly counts unsunk ships", () => {
  const anotherBoard = new Gameboard();
  const ship1 = new Ship(3);
  ship1.orientation = "vertical";
  const ship2 = new Ship(4);

  anotherBoard.placeShip(ship1, 3, 4);
  anotherBoard.placeShip(ship2, 6, 6);
  anotherBoard.receiveAttack(3, 4);
  anotherBoard.receiveAttack(3, 5);
  anotherBoard.receiveAttack(3, 6);

  expect(anotherBoard.remainingShips()).toBe(1);
});

test("clearBoard clears board", () => {
  myBoard.placeShip(shipH3, 6, 7);
  expect(() => myBoard.placeShip(shipH3, 7, 7)).toThrow("invalid placement");
  myBoard.clearBoard();
  expect(() => myBoard.placeShip(shipH3, 7, 7)).not.toThrow(
    "invalid placement"
  );
});
