function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  rect(30, 20, 55, 55)
  ellipse(mouseX, mouseY, 80, 80);
}