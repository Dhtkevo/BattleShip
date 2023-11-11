const Ship = require("../js/Ship");

describe("A Battleship", () => {
  let ship1;

  beforeEach(() => {
    ship1 = new Ship(4, 2, true);
  });

  it("Should have a length", () => {
    expect(ship1.length).toBe(4);
  });

  it("track number of hits on ship", () => {
    expect(ship1.timesHit).toBe(2);
  });

  it("Should know if it's been sunk", () => {
    expect(ship1.sunk).toBe(true);
  });

  it("Should increment times hit when hit", () => {
    ship1.hit();
    expect(ship1.timesHit).toBe(3);
  });

  it("should calculate if sunk based on hits and length of ship", () => {
    ship1.hit();
    ship1.hit();
    let result = ship1.isSunk();
    expect(result).toBe(true);
  });
});
