//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded
let x, y;
let img;
function setup() {
  createCanvas(windowWidth / 2, windowHeight / 2);
  background(0, 0, 255);
  //ground
  fill(255, 255, 255);
  rect(0, 150, 3000, 500);
  image(img, 550, 120, 150, 150);
  image(giftImg, 230,-20,300,300);
}
function draw() {
  drawSnowman(150, 650, 0.2);
  drawSnowman(450, 850, 0.8);
  tree(1900, 900);
  tree(1700, 950);
  tree(2100, 925);
  drawMoon(3500, 150);
  cloud(300, 90);
  cloud(1300, 190);
  cloud(2400, 150);
  fill(255, 0, 0);
  textSize(200);
  textAlign(CENTER, CENTER);
  text("Merry Christmas", 1800, 1200);
  fill(255, 255, 255, random(100));
  noStroke();
  x = random(3500);
  y = random(1800);
  circle(x, y, 50);
  if (frameCount > 500) {
    noLoop();
  }
  rectMode(CENTER);
  fill("brown");
  rect(3250, 1450, 500, 20);
  for (xPosition = 3000; xPosition <= 3500; xPosition += 50) {
    drawFence(xPosition);
  }
}
function drawSnowman(x, y, size) {
  //stomach
  scale(size);
  fill(255, 255, 255);
  circle(x, y, 250);
  fill(0, 0, 0);
  circle(x, y - 50, 15);
  circle(x, y, 15);
  circle(x, y + 50, 15);
  //head
  fill(255, 255, 255);
  circle(x, y - 150, 150);
  fill(255, 165, 0);
  circle(x, y - 150, 50);
  fill(0, 0, 0);
  circle(x - 25, y - 200, 25);
  circle(x + 25, y - 200, 25);
  circle(x - 40, y - 120, 15);
  circle(x + 40, y - 120, 15);
  circle(x - 20, y - 110, 15);
  circle(x + 10, y - 110, 15);

  //scarf
  //fill(255, 0, 0)
  //rect(x - 95, y - 95, 200, 15, 50, 50);
}

function tree(treeX, treeY) {
  noStroke();
  // trunk
  rectMode(CENTER);
  fill("rgb(166,78,78)");
  rect(treeX, treeY, 50, 200);
  //   leaves
  fill("green");
  for (let triangleCounter = 0; triangleCounter < 3; triangleCounter++) {
    triangle(treeX - 100, treeY, treeX + 100, treeY, treeX, treeY - 150);
    treeY -= 75;
  }
}
function drawMoon(x, y) {
  fill(180);
  circle(x, y, 150);
}
function cloud(x, y) {
  fill(200, 200, 200, 100);
  let d = 300,
    h = 60;
  for (counter = 0; counter < 3; counter++) {
    ellipse(x, y, d, h);
    x += 100;
    y += 10;
    d += 40;
    h += 10;
  }
}
function drawFence(x) {
  fill("brown");
  rectMode(CENTER);
  rect(x, 1450, 25, 100);
}
function preload() {
  img = loadImage("images/LogCabin.png");
  giftImg = loadImage("images/gift.png");
}
