const Ship = require("./ship");

test("increase damage when hit", () => {
  const newShip = new Ship(3);
  newShip.hit();
  expect(newShip.damage).toBe(1);
});

test("ship doesn't sink if damage < length", () => {
  const newShip = new Ship(2);
  newShip.hit();
  expect(newShip.isSunk).toBe(false);
});

test("sink ship when damage = length", () => {
  const newShip = new Ship(2);
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk).toBe(true);
});
