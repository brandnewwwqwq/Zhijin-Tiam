Homeworks.aufgabe = 3;

/*
let hugoNumber = 13.1; // Integer, Float, Double, ...
let hugoString = "Text";
let hugoBoolean = true;
let hugoArray = ["Benno", "Marina", "Elijah", "Selina"];
*/

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
  rect(200, 200, 40, 40);
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
