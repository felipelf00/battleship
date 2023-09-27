const Gameboard = require("./gameboard");

const myBoard = new Gameboard();

const shipH3 = {
  length: 3,
  damage: 0,
  isSunk: false,
  orientation: "horizontal",
};

const shipV2 = {
  length: 2,
  damage: 0,
  isSunk: false,
  orientation: "vertical",
};

test("ship is placed horizontally", () => {
  myBoard.placeShip(shipH3, 0, 0);
  expect(myBoard.board[0][0]).toBe(shipH3);
  expect(myBoard.board[1][0]).toBe(shipH3);
  expect(myBoard.board[2][0]).toBe(shipH3);
  expect(myBoard.board[3][0]).not.toBe(shipH3);
  expect(myBoard.board[0][1]).not.toBe(shipH3);
});

test("ship is placed vertically", () => {
  myBoard.placeShip(shipV2, 2, 2);
  expect(myBoard.board[2][2]).toBe(shipV2);
  expect(myBoard.board[2][3]).toBe(shipV2);
  expect(myBoard.board[2][4]).not.toBe(shipV2);
  expect(myBoard.board[2][1]).not.toBe(shipV2);
});

test("wrong placement", () => {
  expect(() => myBoard.placeShip(shipH3, 9, 0)).toThrow("invalid placement");
});
