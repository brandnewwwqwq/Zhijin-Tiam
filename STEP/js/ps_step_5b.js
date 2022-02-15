Homeworks.aufgabe = 5;

let fields = [];

let hugoObject = {
  color: 'red',
  pos: { x: 90, y: 0 },
  size: 20,
  getElementsByClassName: function(className) {
    console.log(className);
  }
};
console.log(hugoObject.getElementsByClassName);
hugoObject.getElementsByClassName('overlay');

function hugoFunc(text) {
  console.log("hallo " + text);
}

hugoFunc('Benno');
hugoFunc('Elijah');

class Block {

  constructor(attrs) {
    this.attrs = attrs;
    if (this.attrs.useRect) {
      this.drawFunc = rect;
    } else {
      this.drawFunc = ellipse;
    }
  }

  draw() {
    fill(this.attrs.color);
    this.drawFunc(this.attrs.pos.x, this.attrs.pos.y, this.attrs.size, this.attrs.size);
  }

  // sleep() {
  //   console.log(this.attrs);
  // }

  changeColor(newColor) {
    if (this.drawFunc == rect) {
      this.attrs.color = newColor;
    }
  }

}

let size = 20;
let gap = 8;
let numCol = 15;
let numRow = 15;

let actCol = 10;
let actRow = 0;

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
      fields[col][row] = new Block({ color: 'red', pos: { x: borderX + col * (size + gap), y: borderY + row * (size + gap) }, size: size, useRect: true, hallo: false });
    }
  }
  //drawx();
  // let myBlock = fields[actCol][actRow];
  // myBlock.drawFunc = ellipse;
  // myBlock.attrs.color = 'blue';
  // myBlock.changeColor('green');
  // myBlock.attrs.size = 40;
  // console.log(myBlock.attrs);
  //myBlock.draw();
  fields[actCol][actRow].changeColor('magenta');
  fields[11][7].changeColor('green');
}

function draw() {
  clear();
  for (let col = 0; col < numCol; col += 1) {
    for (let row = 0; row < numRow; row++) {
      fields[col][row].draw();
    }
  }
  // fields.forEach((field, idx) => {
  //   field.draw();
  // });
}

//Hide the HTML Text with h and show it again with s
function keyPressed(evt) {
  evt.preventDefault();
  let divToHide = document.getElementsByClassName("overlay")[0];
  //divToHide.innerHTML = 'Hallo IG1!'
  switch (key) {
    case "h":
      divToHide.style.visibility = "hidden";
      break;
    case "s":
      divToHide.style.visibility = "visible";
      break;
    case "ArrowUp":
      fields[actCol][actRow].changeColor('red');
      if (actRow > 0) {
        actRow = actRow - 1;
      } else {
        actRow = numRow - 1;
      }
      //actRow = (actRow + 1) % numRow;
      fields[actCol][actRow].changeColor('magenta');
      console.log("UP");
      break;
    case "ArrowDown":
      fields[actCol][actRow].changeColor('red');
      // if (actRow < numRow -1) {
      //   actRow = actRow + 1;
      // } else {
      //   actRow = 0;
      // }
      actRow = (actRow + 1) % numRow;
      fields[actCol][actRow].changeColor('magenta');
      console.log("DOWN");
      break;
    default:
      console.log(key)
      break;
  }
}
