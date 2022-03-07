Homeworks.aufgabe = 4;

let rand = 100;
let grid = 40;
let kantenlaenge = 8;
let field;
let clickPosX = -1;
let clickPosY = -1;
let groesse = 30;
//let alreadyClickedOnce = false;

class Block {

  constructor(attrs) {
    this.attrs = attrs;
    this.useRect = true;
  }

  draw() {
    fill(this.attrs.color);
    if (this.useRect) {
      rect(rand + this.attrs.pos.x * grid, rand + this.attrs.pos.y * grid, this.attrs.size, this.attrs.size);
    } else {
      ellipse(rand + this.attrs.pos.x * grid + this.attrs.size/2, rand + this.attrs.pos.y * grid + this.attrs.size/2, this.attrs.size, this.attrs.size);
    }
  }
}

function onMouseClick() {

  console.log(mouseX, mouseY);
  //übersichtliche Lösung
  //zufällige Größe
  let randomSize = random(16,40);
  let zufallsX = round(random(0,kantenlaenge-1));
  let zufallsY = round(random(0,kantenlaenge-1));
  field[zufallsX][zufallsY].attrs.size = randomSize;

  //Zufällige Form
  zufallTrueFalse = random(0,1);
  if (zufallTrueFalse < 0.5) {
    field[zufallsX][zufallsY].useRect = false;
  } else {
    field[zufallsX][zufallsY].useRect = true;
  }
  field[zufallsX][zufallsY].attrs.color = color(Math.random() * 255, Math.random() * 255, Math.random() * 255);



  /*meine Lösung
  clickPosX = (clickPosX + 1) % kantenlaenge;
  if (clickPosX%kantenlaenge==0) {
    clickPosY = (clickPosY + 1) % kantenlaenge;
  }
  field[clickPosX][clickPosY].attrs.color = color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
  field[clickPosX][clickPosY].attrs.size = randomSize;


  let tempRect = random(0,1);
  if (tempRect > 0.5) {
    field[clickPosX][clickPosY].useRect = true;
  }else {
    field[clickPosX][clickPosY].useRect = false;
  }
  */

}


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener('click', onMouseClick);

  //field = new Block({color: 'green', pos: {x: 0, y: 0}, size: 20});


  //Field ist jetzt ein ARRAY!!!! keine "normale Variable" mehr. <3
  field = new Array(grid);

  for (var i = 0; i < kantenlaenge; i++) {
    field[i] = new Array(kantenlaenge);
  }

  for (var i = 0; i < kantenlaenge; i++) {
    for (var j = 0; j < kantenlaenge; j++) {
      field[i][j] = new Block({color: color(66, 245, 230), pos: {x: i+10, y: j+10}, size: groesse});
    }
  }
}


function draw() {
  clear();
  for (var i = 0; i < kantenlaenge; i++) {
    for (var j = 0; j < kantenlaenge; j++) {
      //field[i][j].attrs.color = color(Math.random() * 255, Math.random() * 255, Math.random() * 255); // HAPPY FUN TIMES
      field[i][j].draw();
    }
  }
}


function keyTyped() {
  let divToHide = document.getElementsByClassName("overlay")[0];
  if (key == "up") {
    divToHide.style.visibility = "hidden";
  } else if (key == "down") {
    divToHide.style.visibility = "visible"
  } else if (key = "r"){
    if (useRect) {
      useRect = false;
      console.log("hu");
      clear();
    } else if (useRect == false){
      useRect = true;
      clear();
    }
  }
}
