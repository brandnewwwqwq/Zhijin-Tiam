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

  getColor() {
    return this.attrs.color;
  }

  changeColor(newColor) {
    if (this.drawFunc == rect) {
      this.attrs.color = newColor;
    }
  }

}

let size =30;
let gap = 7;
let numCol = 15;
let numRow = 15;
let fields = [];


let actPos = { x: 10, y: 3 };
let move = { x: 0, y: 0 };
// head = 0 and tail = snake.length - 1
let snake = [];

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
  snake.unshift(fields[actPos.x][actPos.y]);
  snake[0].changeColor('magenta');

  addFood();
  //Change frequency
  frameRate(5);
}

function draw() {
  if (move.x != 0 || move.y != 0) {
    // (!=) not-equal-to operator
    // (||) if and only if one or more of its operands is true
    snakeMove();
    }
  clear();
  for (let col = 0; col < numCol; col += 1) {
    for (let row = 0; row < numRow; row++) {
      fields[col][row].draw();
    }
  }
}

function snakeMove() {
  // When the snake eats a red, the snake's body plus one
  snake[snake.length - 1].changeColor('red');
  actPos.x += move.x;
  actPos.y += move.y;
  //x += y, x  = x + y
  if (actPos.x > numCol - 1) {
    actPos.x = 0;
  }
  if (actPos.x < 0) {
    actPos.x = numCol - 1;
  }
  if (actPos.y > numRow - 1) {
    actPos.y = 0;
  }
  if (actPos.y < 0) {
    actPos.y = numRow - 1;
  }

  snake.unshift(fields[actPos.x][actPos.y]);
  switch (snake[0].getColor()) {
    case 'yellow':
      if (snake[0].attrs.color == 'yellow'){
        snake.pop().changeColor('red');
        fields[round(random(0, numCol-1))][round(random(0, numRow-1))].changeColor('yellow');
        snake.pop().changeColor('red');
        if (snake.length < 1) {
          alert('GAME OVER');
        }
      }
      break;
    case 'green':
      // snake eats an apple and gets a new field
      if (snake[0].attrs.color == 'green'){
        fields[round(random(0, numCol-1))][round(random(0, numRow-1))].changeColor('green');
      }
      console.log("Apple!!!")
      break;
    case 'magenta':
      // if snake eats itself, game over
      if (snake[0].attrs.color == 'magenta') {
        alert('GAME OVER');
      }
      console.log("Game Over!")
      break;
    default:
      snake.pop().changeColor('red');
      break;
  }
  snake[0].changeColor('magenta');
}

function addFood() {
  // add yellow and green sections randomly
  fields[round(random(0, numCol-1))][round(random(0, numRow-1))].changeColor('green');
  fields[round(random(0, numRow-1))][round(random(0, numCol-1))].changeColor('yellow');
}

function keyPressed(evt) {
  let divToHide = document.getElementsByClassName("overlay")[0];
  switch (key) {
    case "h":
      divToHide.style.visibility = "hidden";
      break;
    case "s":
      divToHide.style.visibility = "visible";
      break;
    case "ArrowUp":
      evt.preventDefault();
      move = { x: 0, y: -1 };
      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.y = actPos.y > 0 ? actPos.y - 1 : numRow - 1;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("UP");
      break;
    case "ArrowDown":
      evt.preventDefault();
      move = { x: 0, y: 1 };
      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.y = actPos.y < numRow - 1 ? actPos.y + 1 : 0;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("DOWN");
      break;
    case "ArrowLeft":
      evt.preventDefault();
      move = { x: -1, y: 0 };
      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.x = actPos.x > 0 ? actPos.x - 1 : numCol - 1;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("LEFT");
      break;
    case "ArrowRight":
      evt.preventDefault();
      move = { x: 1, y: 0 };
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
