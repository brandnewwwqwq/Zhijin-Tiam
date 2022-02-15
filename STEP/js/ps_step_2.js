Homeworks.aufgabe = 2;
let click = 1;
let ellipseGross = 20;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener('click', onMouseClick);
}

function draw() {
  background(50, 10);
  let c = "weiß";
  if(click > 2){
   c= color(Math.random() * 256, Math.random() * 256, Math.random() * 256);
   }
  fill(c);
  ellipse(Math.random() * windowWidth, Math.random() * windowHeight, ellipseGross, ellipseGross);
}

function onMouseClick() {
  if (click == 1){
    ellipseGross = 35;
    click = 2;
  }else if (click ==2){
click = 3;
    }
}
