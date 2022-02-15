Homeworks.aufgabe = 4;

let fields = [];

//let hugoObject = {color: 'green', pos: {x: 90, y: 0}, size: 20};

class Block {

  constructor(attrs) {
    this.attrs = attrs;
  }

  draw() {
    fill(this.attrs.color);
    if (this.attrs.useRect) {
      rect(this.attrs.pos.x, this.attrs.pos.y, this.attrs.size, this.attrs.size);
    } else {
      ellipse(this.attrs.pos.x, this.attrs.pos.y, this.attrs.size, this.attrs.size);
    }
  }

  // sleep() {
  //   console.log(this.attrs);
  // }

  changeColor(newColor) {

  }

}

let size = 20;
let gap = 8;
let numCol = 15;
let numRow = 17;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');

  let patternWidth = (size + gap) * numCol - gap;
  let borderX = (windowWidth - patternWidth) / 2;
  let patternHeight = (size + gap) * numRow - gap;
  let borderY = (windowHeight - patternHeight) / 2;

  for (let col = 0; col < numCol; col += 1) {
    fields[col] = [];
    for (let row = 0; row < numRow; row++) {
      fields[col][row] = new Block({color: 'red', pos: {x: borderX + col * (size + gap), y: borderY + row * (size + gap)}, size: size, useRect: true});
    }
  }
}

function draw() {
  for (let col = 0; col < numCol; col += 1) {
    for (let row = 0; row < numRow; row++) {
      fields[col][row].draw();
    }
  }
  // fields.forEach((field, idx) => {
  //   field.draw();
  // });
}
