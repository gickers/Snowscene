//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0, 0, 255);
}
function draw() {
		//ground
	fill(255, 255, 255);
	rect(0,150,width,height);
    drawSnowman(150,650,0.2);
    drawSnowman(450,850,0.8);
    tree(400, 400);
}


}
function drawSnowman(x,y,size){
    //stomach
        scale(size);
    fill(255, 255, 255)
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
    fill(255, 0, 0)
    rect(x - 95, y - 95, 200, 15, 50, 50);
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