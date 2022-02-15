Homeworks.aufgabe = 2;
let click = 1;
let ellipseGross = 20;
let speed = 20;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener('click', onMouseClick);
}

function draw() {
  background(50, speed);
  let c = "weiß";
  if(click > 2){
   c= color(Math.random() * 256, Math.random() * 256, Math.random() * 256);
   }
  fill(c);
  ellipse(Math.random() * windowWidth, Math.random() * windowHeight, ellipseGross, ellipseGross);
}

function onMouseClick() {
  if (click == 1){
    ellipseGross = 50;
    click = 2;
  }else if (click == 2){
click = 3;
}else if(click == 3){
speed = 90;
  click = 4;
}else if(click == 4){
  ellipseGross = 20;
  speed = 20;
  click = 1;
}
clear();
}
