Homeworks.aufgabe = 5;
/*Hausaufgabe:
  1. der bunte Punkt bewegt sich in alle Richtungen
  2. der Magenta Punkt und ein grüner Punkt werden zufällig platziert
  3. Es wird erkannt (über die Farbe und nicht über die Koordinaten!), wenn ich den grünen Punkt umgefärbt habe (Console.log(“Game Over”);)
  4. für die Enthusiasten (optional): Es bewegen sich 2 Punkte in alle Richtungen
*/
let fields = [];

let hugoObject = {
  color: "red",
  pos: {
    x: 90,
    y: 0
  },
  size: 300,
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
hugoFunc('zhijin');
hugoFunc('newworld!');

class Block {
  constructor(attrs) {
    this.attrs = attrs;
    console.log(attrs.useRect);
    if (attrs.useRect) {
      this.drawFunc = rect;
    } else {
      this.drawFunc = ellipse;
    }
  }

  draw() {
    fill(this.attrs.color);
    this.drawFunc(this.attrs.pos.x, this.attrs.pos.y, this.attrs.size, this.attrs.size);
  }

  sleep() {
    console.log("zzz");
  }

  changeColor(newColor) {
    this.attrs.color = newColor;
  }
}

let size = 30;
let gap = 7;
let numCol = 10;
let numRow = 10;
let actCol = 2;
let actRow = 3;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("thecanvas");

  let patternWidth = (size + gap) * numCol - gap;
  let borderX = (windowWidth - patternWidth) / 2;
  let patternHeight = (size + gap) * numRow - gap;
  let borderY = (windowHeight - patternHeight) / 2;

  for (let col = 0; col < numCol; col++) {
    fields[col] = [];
    for (let row = 0; row < numRow; row++) {
      //fields[row] = [];
      let field = new Block({
        color: "red", pos: { x: borderX + col * (size + gap), y: borderY + row * (size + gap)}, size: size, useRect: true});
      fields[col][row] = field;
    }
  }
  fields[actCol][actRow].attrs.color = "magenta";
  fields[0][0].attrs.color = "green";
  //fields[0][2].drawFunc = ellipse;
  //fields[0][2].attrs.size = 15;
  //console.log(fields[0][2]);
  //fields[0][3].changeColor("blue");
}

function draw() {
  // fields.forEach((field, idx) => {
  //   field.draw();
  // });

  for (let col = 0; col < numCol; col += 1) {
    for (let row = 0; row < numRow; row++) {
      fields[col][row].draw();
    }
  }
}

//Hide the HTML Text with h and show it again with s
function keyPressed() {
  let divToHide = document.getElementsByClassName("overlay")[0];
  //divToHide.innerHTML = 'Hallo IG1!'
  switch (key) {
    case "h":
      divToHide.style.visibility = "hidden";
      break;
    case "s":
      divToHide.style.visibility = "visible";
      break;
    case "ArrowDown":
      console.log("Bewege den Punkt nach unten", actCol, actRow);
      fields[actCol][actRow].changeColor("red");

      if (actRow < numRow - 1) {
        actRow++;
      } else {
        actRow = 0;
      }
      istEsGelb();

      fields[actCol][actRow].changeColor("magenta");
      break;

    case "ArrowUp":
      console.log("Bewege den Punkt nach oben", actCol, actRow);
      fields[actCol][actRow].changeColor("red");

      if (actRow > 0) {
        actRow--;
      } else {
        actRow = numRow - 1;
      }
      istEsGelb();

      fields[actCol][actRow].changeColor("magenta");
      break;

    case "ArrowRight":
      console.log("Bewege den Punkt nach rechts", actCol, actRow);
      fields[actCol][actRow].changeColor("red");

      if (actCol < numCol - 1) {
        actCol++;
      } else {
        actCol = 0;
      }
      istEsGelb();

      fields[actCol][actRow].changeColor("magenta");
      break;

    case "ArrowLeft":
      console.log("Bewege den Punkt nach links", actCol, actRow);
      fields[actCol][actRow].changeColor("red");

      if (actCol > 0) {
        actCol--;
      } else {
        actCol = numCol - 1;
      }
      istEsGelb();

      fields[actCol][actRow].changeColor("magenta");

      break;
    default:
      console.log(key);
      break;
  }
}

function istEsGelb() {

  if (fields[actCol][actRow].attrs.color == "green") {
    console.log("green");
    let greenCol = round(random(0, numCol));
    let greenRow = round(random(0, numRow));
    fields[greenCol][greenRow].attrs.color = "green";
  }
}
