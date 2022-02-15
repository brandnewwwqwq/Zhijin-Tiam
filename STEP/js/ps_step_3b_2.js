let colors = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  noStroke();
  for (let col = 0; col < 10; col++) {
    colors[col] = [];
    for (let row = 0; row < 10; row++) {
      colors[col][row] = color(255, 0, 128);
    }
  }
}

...