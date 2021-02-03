// Variables
let g;
let b;
let p;
let x;
let d;
let cnv;
let one;
let two;


// Setup code goes here
function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mousePressed();
  d = 100;
  print("Starting up Simple Shapes");
  one = 0;
  two = 0;
}

// Draw code goes here
function draw() {
  background(219, 213, 201);
  drawSpots();
  squareMove();
  drawDiamonds();
  drawRectangle();
  drawCircle();
  drawCone();
  drawCylinder(100, 500);
}

function squareMove() {
	rect(one, two, 50, 50);
	one = one + 3;
	if (one > 500) {
		one = two - 3;
	}
}

function drawCone() {
	rotateX(frameCount * 0.001);
 	rotateZ(frameCount * 0.001);
 	p = color(239,130,192);
 	fill(p);
	cone(140, 600, 200, 200);
}

function drawCircle() {
	g = color(83,184,131);
	fill(g);
	circle(-400, 200, d, d);
	b = color(74,71,246);
	fill(b);
	circle(mouseX - windowWidth/2, 0, mouseY - windowWidth/2, 100);
}

function drawRectangle() {
	stroke(1);
	strokeWeight(1);
	fill(0, 0, 0);
	q = 0.5;
	if (mouseX > windowWidth/2) {
		fill(255, 255, 255);
	}
	rect(200, 120, 225, 155);
}

function drawDiamonds() {
	x = 3;
	while (x > 0) {
		x = x - 1;
		stroke(1);
		strokeWeight(1);
		fill(255, 255, 255);
		if (mouseX > windowWidth/2) {
			fill(0, 0, 0);
		}
		beginShape();
		vertex(-450 + (x*150), -200);
		vertex(-500 + (x*150), -250);
		vertex(-450 + (x*150), -300);
		vertex(-400 + (x*150), -250);
		vertex(-450 + (x*150), -200);
		endShape();
	}
}

function drawSpots() {
	g = color(83,184,131);
	b = color(74,71,246);
	p = color(239,130,192);
	x = 10;
	while (x > 0) {
		x = x - 1;
		stroke(1);
		strokeWeight(1);
		fill(g);
		circle(windowWidth/2 - 200 - (x * 100), 100, 15);
		fill(b);
		circle(windowWidth/2 - 200 - (x * 100), 200, 15);
		fill(p);
		circle(windowWidth/2 - 200 - (x * 100), 300, 15);
		fill(p);
		circle(windowWidth/2 - 200 - (x * 100), 0, 15);
		fill(b);
		circle(windowWidth/2 - 200 - (x * 100), -100, 15);
		fill(g);
		circle(windowWidth/2 - 200 - (x * 100), -200, 15);
		fill(p);
		circle(windowWidth/2 - 200 - (x * 100), -300, 15);
	}
}

function mousePressed() {
	d = d + 50;
}

function drawCylinder(x, y) {
	rotateX(frameCount * 0.005);
 	rotateZ(frameCount * 0.005);
	normalMaterial();
	cylinder(x, y);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}