// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// PolarToCartesian
// Convert a polar coordinate (r,theta) to cartesian (x,y):
// x = r * cos(theta)
// y = r * sin(theta)

var r;
var xoff = 0;
var yoff = 0;
var worm;
var worm2;

function setup() {
  createCanvas(640, 360);
  // Initialize all values
  r = height * 1.45;
	worm = new Worm(0.02);
	// worm2 = new Worm(0.04);
	// we need to draw lines in between the dots
	// worm2 = new Worm(2.04);
}

function Trail(x, y) {
	this.x = x;
	this.y = y;
}
function Worm(theta){
	this.theta = theta;
	this.trails = []
	this.display = function(){
		// Draw the ellipse at the cartesian coordinate
		var x = r * cos(this.theta)*noise(xoff);
		var y = r * sin(this.theta)*noise(yoff);
		fill(127);
		stroke(255);
		strokeWeight(2);
		// line(trail.x, trail.y, 1, 1);
		this.trails.forEach(function(trail){
			stroke(random(255));
			ellipse(trail.x, trail.y, 1, 1);
			line(trail.x, trail.y, 1, 1);
		});
		// ellipse(x, y, 1, 1);
		this.trails.push(new Trail(x, y));
		this.theta += this.theta*0.009;
	};
}

function draw() {
  //background(random(100));

  // Translate the origin point to the center of the screen
  translate(width/2, height/2);

	xoff = xoff + 0.01;
	yoff = yoff - 0.001;
	//r = height/2* noise(xoff)
  // Convert polar to cartesian

	worm.display();
	//worm2.display();

  // Increase the angle over time
}
