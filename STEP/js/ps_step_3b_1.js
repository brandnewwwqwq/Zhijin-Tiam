Homeworks.aufgabe = 3;
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  //document.addEventListener('keyup', onKeyUp);
  for (let col = 0; col < 10; col++) {
    console.log("Hallo", col);
  }
  console.log("DONE");
}

function draw() {
  for (let col =0; col < 10; col++){
    for (let row=0; row < 10; row++)
  rect(200+col*50, 200+row*50, 40, 40);
}
}

//Hide the HTML Text with h and show it again with s
function keyTyped() {
  let divToHide = document.getElementsByClassName("overlay")[0];
  if (key == "h") {
    divToHide.style.visibility = "hidden";
  } else if (key == "s") {
    divToHide.style.visibility = "visible"
  }
}
