class Ship {
  constructor(length, timesHit, sunk) {
    this.length = length;
    this.timesHit = timesHit;
    this.sunk = sunk;
  }

  hit() {
    this.timesHit++;
  }

  isSunk() {
    if (this.timesHit >= this.length) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;
