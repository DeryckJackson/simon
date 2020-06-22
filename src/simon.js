export class Colors {
  constructor() {
    this.colors = [];
    this.colorIndex = 0;
  }

  checkColor(userColor) {
    if (this.colors[this.colorIndex] === userColor) {
      this.colorIndex++;
      return true;
    } else {
      this.colors = [];
      this.colorIndex = 0;
      return false;
    }
  }

  getColor() {
    const colors = ["red", "blue", "green"];
    
    return colors[getRandomInt(0, 2)];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}