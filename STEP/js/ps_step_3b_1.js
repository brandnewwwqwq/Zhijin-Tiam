Homeworks.aufgabe = 3;

/*
1. Zwei geschachtelte for loops (eine for row/y und eine für col/x)
2. Flexibilität in der Anzahl (Variable)
3. Flexibler Größe und Abstand (Variablen)
4. Das endstehende Muster bitte mittig auf dem Bildschirm (windowWidth, windowHeight) (bearbeitet)
*/

//die groesse von gesamten felde
let windowLinks;
let windowOben;
let bereitgesamt = numRow * size + (numRow - 1) * gap;
let hochgesamt = numCol * size + (numCol - 1) * gap;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  //document.addEventListener('keyup', onKeyUp);
  for (let col = 0; col < 10; col++) {
}
}

windowLinks = (windowWidth - bereitgesamt) / 2;
windowOben = (windowHeight - hochgesamt) / 2;

function draw() {
  for (let col =0; col < 10; col++){
    for (let row=0; row < 10; row++)
  rect(200+col*50, 200+row*50, 40, 40);
}
}
