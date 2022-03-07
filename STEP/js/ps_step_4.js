/*Homeworks.aufgabe = 4;

let rand = 400;
let grid = 40;
let field;

class Block {

  constructor(attrs) {
    this.attrs = attrs;
  }

  draw() {
    fill(this.attrs.color);
    rect(rand + this.attrs.pos.x * grid, rand + this.attrs.pos.y * grid, this.attrs.size, this.attrs.size);
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  field = new Block({color: 'white', pos: {x: 0, y: 0}, size: 20});
}

function draw() {
  field.draw();
}

function onMouseClick() {
  if (click == 1){
    size = 50;
    click = 2;
  }else if (click == 2){
color = 'red';
click = 3;{
}
}
*/


let zufallsX;
let zufallsY;
let fields = [];

// farben
let r;
let g;
let b;


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
let numCol = 10;
let numRow = 10;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener('click', onMouseClick);

  let patternWidth = (size + gap) * numCol - gap;
  let borderX = (windowWidth - patternWidth) / 2;
  let patternHeight = (size + gap) * numRow - gap;
  let borderY = (windowHeight - patternHeight) / 2;

  for (let col = 0; col < numCol; col += 1) {
    fields[col] = [];
    for (let row = 0; row < numRow; row++) {
      fields[col][row] = new Block({color: 'black', pos: {x: borderX + col * (size + gap), y: borderY + row * (size + gap)}, size: size, useRect: true});
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

function onMouseClick(){

}
