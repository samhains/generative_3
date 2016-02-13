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


function Trail(x, y) {
	this.x = x;
	this.y = y;
}

function Worm(theta){
	this.theta = theta;
	this.trails = []
	this.display = function(thetaMultiplyer, colorArr){
		// Draw the ellipse at the cartesian coordinate
		var x = r * cos(this.theta)*noise(xoff);
		var y = r * sin(this.theta)*noise(yoff);
		fill(127);
		stroke(255);
		strokeWeight(2);
		// line(trail.x, trail.y, 1, 1);
		this.trails.forEach(function(trail){
			stroke(random(colorArr[0]), random(colorArr[1]), random(colorArr[2]));
			ellipse(trail.x, trail.y, 1, 1);
			line(4/trail.x, trail.y, 1, 1);
		});
		// ellipse(x, y, 1, 1);
		this.trails.push(new Trail(x, y));
		this.theta += this.theta*thetaMultiplyer*x;
	};
}
