//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

function setup() {
	createCanvas(windowWidth/2, windowHeight/2);
    background(0, 0, 255);
}
function draw() {
		//ground
	fill(255, 255, 255);
    noStroke();
	rect(0,150,3000,500)
}
