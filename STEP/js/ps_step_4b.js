Homeworks.aufgabe = 4;

Homeworks.aufgabe = 4;
/*1. Auf Click ändert ein zufälliges Field die Farbe
2. auf Click ändert ein Field die Form
3. auf Click ändert ein zufälliges Field die Grösse  (optional)
4. oder was Euch sonst so interessiert (optional)
*/

let colors = [];
let size = 40;
let gap = 8;
let numCol = 10;
let numRow = 10;
let borderX;
let borderY;
let bereitgesamt = numCol * size + (numCol - 1) * gap;
let hochgesamt = numRow * size + (numRow - 1) * gap;
//zufällige Größe
let zufallsSize
//zufällige position
let zufallsX;
let zufallsY;
let feld = [];
//zufällige colors
let r;
let g;
let b;
//zufällige form
let useRect = true;
//原来有的（class是个特别的function）
//必须用constructor


class Block {
  constructor(attrs) {
    this.attrs = attrs;
  }
  draw() {
    fill(this.attrs.color);
    rectMode(CENTER);
    if (this.attrs.useRect) {
      rect(
        this.attrs.pos.x,
        this.attrs.pos.y,
        this.attrs.size,
        this.attrs.size);
    } else {
      ellipse(
        this.attrs.pos.x,
        this.attrs.pos.y,
        this.attrs.size,
        this.attrs.size);
    }
  }
}


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener('click', onMouseClick);
  borderY = (windowHeight - hochgesamt) / 2;
  borderX = (windowHeight - bereitgesamt) / 2;
  for (let col = 0; col < numCol; col++) {
    feld[col] = [];
    for (let row = 0; row < numRow; row++) {
      feld[col][row] = new Block({
        color: 'white',
        pos: {
          x: borderX + (size + gap) * col,
          y: borderY + (size + gap) * row
        },
        size: size,
        useRect: true
      }); //block ({...});
    }
  }
}


function onMouseClick() {
  //zufällige position
  zufallsX = round(random(0, numCol - 1));
  zufallsY = round(random(0, numRow - 1));
  // feld[0] = zufallsX;
  // feld[1] = zufallsY;
  console.log("zufallsposition", zufallsX, zufallsY);
  //zufällige Größe
  zufallsSize = Math.floor(random(size, size * 2));
  console.log("size", zufallsSize);
  feld[zufallsX][zufallsY].attrs.size = zufallsSize;
  //zufällige colors
  r = Math.floor(Math.random() * (255 - 0 + 1));
  g = Math.floor(Math.random() * (255 - 0 + 1));
  b = Math.floor(Math.random() * (255 - 0 + 1));
  console.log("color", r, g, b);
  feld[zufallsX][zufallsY].attrs.color = color(r, g, b);
  //zufällige form
  var zufall = random(0, 1);
  if (zufall < 0.5) {
    feld[zufallsX][zufallsY].attrs.useRect = true;
  } else {
    feld[zufallsX][zufallsY].attrs.useRect = false;
  }
  console.log("zufall", zufall);
} //function


function draw() {
  for (let col = 0; col < numCol; col++) {
    for (let row = 0; row < numRow; row++) {
      feld[col][row].draw(); //warum gibt es【】？
    } //for
  } //for
} //function


function keyTyped() {
  let divToHide = document.getElementsByClassName("overlay")[0];
  if (key == "h") {
    divToHide.style.visibility = "hidden";
  } else if (key == "s") {
    divToHide.style.visibility = "visible"
  }
}
