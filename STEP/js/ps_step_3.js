Homeworks.aufgabe = 3;

let size = 30; // Flexible Größe durch Variable
let numCol = 10; // Flexible Anzahl X-Achse durch Variable
let numRow = 10; // Flexible Anzahl Y-Achse durch Variable
let gap = 5; // Flexibler Abstand durch Variable

//die groesse von gesamten felde
let bereitgesamt = numRow * size + (numRow - 1) * gap;
let hochgesamt = numCol * size + (numCol - 1) * gap;


// 这里要先建立（然后再setup赋值，最后再draw里用）
// 不能现在赋值，因为还没有canvas的 windowWidth, windowHeight
// um mittel zu sein
let windowOben;
let windowLinks;

let patternWidth;
let patternHeight;
let borderX;
let borderY;

// umgefärbt feld
let zufallsX;
let zufallsY;
let feld = [];

// farben
let r;
let g;
let b;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener('click', onMouseClick);

  // 这里赋值矩阵位置
  windowLinks = (windowWidth - bereitgesamt) / 2;
  windowOben = (windowHeight - hochgesamt) / 2;


  let patternWidth = (size + gap) * numCol - gap;
  let borderX = (windowWidth - patternWidth) / 2;
  let patternHeight = (size + gap) * numRow - gap;
  let borderY = (windowHeight - patternHeight) / 2;

}

//如果   = Punkt（zufallsX,zufallsY）----- 填充 随机色
//如果 ！= Punkt（zufallsX,zufallsY）----- 填充 底色
function draw() {
  for (var col = 0; col < numCol; col++) {
    for (var row = 0; row < numRow; row++) {

      //zufallsX = col;
      //zufallsY = row;

      if (col == zufallsY && row == zufallsX) {
        if (feld[0] != zufallsX || feld[1] != zufallsY) {


          r = Math.floor(Math.random() * (255 - 0 + 1));
          g = Math.floor(Math.random() * (255 - 0 + 1));
          b = Math.floor(Math.random() * (255 - 0 + 1));

          fill(r, g, b);
          feld = [zufallsX, zufallsY];
          /*console.log(zufallsX);
          console.log(zufallsY);
          console.log(r, g, b);*/
        } else {
          fill(r, g, b);
        }

      } else {
        fill("white");
      }


      rect(windowOben + (size + gap) * col, windowLinks + (size + gap) * row, size, size);

      // 两个for的括号
    }
  }
  //  draw的括号
}

function onMouseClick() {
  zufallsX = round(random(0, numCol - 1));
  zufallsY = round(random(0, numRow - 1));

}

function windowGroesseAendern() { //Mittig ausrichten wenn Fenstergröße sich ändert
  regroesseCanvas(windowWidth, windowHeight);
  clear();
  windowLinks = (windowWidth - bereitgesamt) / 2;
  windowOben = (windowHeight - hochgesamt) / 2;
}

function keyTyped() {
  let divToHide = document.getElementsByClassName("overlay")[0];
  if (key == "h") {
    divToHide.style.visibility = "hidden";
  } else if (key == "s") {
    divToHide.style.visibility = "visible"
  }
}
