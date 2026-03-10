let paintLayer;
let brushColor;
let brushSize = 10;

let palette = [
  "#F54927",
  "#2ECC71",
  "#3498DB",
  "#F1C40F",
  "#9B59B6",
  "#000000"
];

let swatchSize = 30;
let padding = 10;

function setup() {
  createCanvas(500, 500);
  paintLayer = createGraphics(600, 600);
  paintLayer.background(255);
  brushColor = color(palette[0]);
}

function draw() {
  if (mouseIsPressed && !overPalette(mouseX, mouseY)) {
    paintLayer.noStroke();
    paintLayer.fill(brushColor);
    paintLayer.circle(mouseX, mouseY, brushSize);
  }
  background(255);
  image(paintLayer, 0, 0);
  drawPalette();
}

function drawPalette() {
  for (let i = 0; i < palette.length; i++) {
    let x = width - swatchSize - padding;
    let y = padding + i * (swatchSize + padding);
    fill(palette[i]);
    stroke(0);
    rect(x, y, swatchSize, swatchSize);
  }
}

function mousePressed() {

  for (let i = 0; i < palette.length; i++) {
    let x = width - swatchSize - padding;
    let y = padding + i * (swatchSize + padding);
    if (
      mouseX > x &&
      mouseX < x + swatchSize &&
      mouseY > y &&
      mouseY < y + swatchSize
    ) {
      brushColor = color(palette[i]);
    }
  }
}

function overPalette(mx, my) {
  for (let i = 0; i < palette.length; i++) {
    let x = width - swatchSize - padding;
    let y = padding + i * (swatchSize + padding);
    if (
      mx > x &&
      mx < x + swatchSize &&
      my > y &&
      my < y + swatchSize
    ) {
      return true;
    }
  }
  return false;
}