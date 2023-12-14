function setup() {
  createCanvas(windowWidth, windowHeight / 2);
  currentPalette = randomPalette();
  noStroke();
  background("white");
}

function draw() {
  tree(400, 400);
}
function tree(treeX, treeY) {
  noStroke();
  // trunk
  rectMode(CENTER);
  fill("rgb(166,78,78)");
  rect(treeX, treeY, 10, 40);
//   leaves
  fill("green");
  for (let triangleCounter = 0; triangleCounter < 3; triangleCounter++) {
    triangle(treeX - 20, treeY, treeX + 20, treeY, treeX, treeY - 30);
    treeY -= 15;
  }
}
