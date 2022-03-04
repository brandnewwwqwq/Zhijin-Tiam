Homeworks.aufgabe = 6;
/* Hausaufgabe:
  1. die function placeFood mit Code füllen, der zufällig Food erzeugt - aber nicht dort, wo schon die Schlange ist. Am Besten die Food color als Parameter mitgeben, dann kann man damit jegliches Food erzeugen
  2. auch wenn die Snake Food gefunden hat, soll neues Food erzeugt werden
  3. bei grünen Food, wird die Schlange länger
  4. bei gelbem Food wird sie kürzer - oder stirbt, wenn sie kein Feld mehr hat
  5. die Snake stirbt auch, wenn sie sich selber beisst
  6. optional: denkt Euch noch weitere Foods/Features aus


  Das Spiel besteht aus vier Teilen: dem Kopf der Schlange, dem Körper der Schlange, dem Futter und den Hindernissen.
  Der Kopf der Schlange.
  1. grün
  2 Bereich der Bewegung (x<15, y<15)
  3. position: zufällig

  Körper der Schlange.
  1. grün
  2 Bereich der Bewegung (x<15, y<15)
  3. position: zufällig
  4. Wenn die Schlange Nahrung zu sich nimmt, fügt sie ihrem Körper eine hinzu.
  Schlangenkörper minus eins, wenn er ein Hindernis frisst.
  Game over, wenn sich die Schlange selbst frisst.

  Essen.
  1. magenta
  2. position: Zufällig (x<15, y<15)
  3. wenn das Futter auf die Schlange trifft und gegessen wird, wird ein Futter dem Körper der Schlange hinzugefügt und das nächste Futter erscheint zufällig

  Hindernisse.
  1. gelb
  2.position: zufällig (x<15, y<15)
  3. wenn ein Hindernis auf eine Schlange trifft, wird der Körper der Schlange um einen Punkt reduziert

*/

let fields = [];

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

let actPos = {x: 10, y: 0};
let move = {x: 0, y: 0};

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
  fields[actPos.x][actPos.y].changeColor('magenta');
  document.addEventListener('keydown', onKeyUp);
  frameRate(5);
}

function draw() {
  snakeMove();
  clear();
  for (let col = 0; col < numCol; col += 1) {
    for (let row = 0; row < numRow; row++) {
      fields[col][row].draw();
    }
  }
}

function snakeMove() {
  fields[actPos.x][actPos.y].changeColor('red');
  actPos.x += move.x;
  actPos.y += move.y;
  if (actPos.x > numCol - 1) {
    actPos.x = 0;
  }
  // 4x if
  fields[actPos.x][actPos.y].changeColor('magenta');
}

//Hide the HTML Text with h and show it again with s
function onKeyUp(evt) {
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
      evt.preventDefault();

      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.y = actPos.y > 0 ? actPos.y - 1 : numRow - 1;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("UP");
      break;
    case "ArrowDown":
      evt.preventDefault();

      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.y = actPos.y < numRow - 1 ? actPos.y + 1 : 0;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("DOWN");
      break;
    case "ArrowLeft":
      evt.preventDefault();

      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.x = actPos.x > 0 ? actPos.x - 1 : numCol - 1;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("LEFT");
      break;
    case "ArrowRight":
      evt.preventDefault();

      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.x = actPos.x < numCol - 1 ? actPos.x + 1 : 0;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("RIGHT");
      break;
    default:
      console.log(key);
      break;
  }
}
