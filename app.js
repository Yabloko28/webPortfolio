

//------------------------------------------------------------------------
console.log("HI, World");

//---------------------------------------------------------------------------

// -------------------P5.JS sketch to create background------------------------

var xstep = 50;
var ystep = 7;
var y = 0;
var nx = 10;
var ny = 80;
var nz = 736;

function setup() {
   createCanvas(displayWidth, displayHeight);
  background(50, 70, 130);
  stroke(215, 238, 133);
  strokeWeight(2);
  smooth(8);
  noFill();
}

function draw() {
background(252, 171, 98);
  noFill();
  for (var j = -100; height+100 > j; j+=ystep) {
    beginShape();
    vertex(-100, j);
    for (var i = -100; i < width+100; i+=xstep) {
      nx = i/234;
      ny = j/165;
      var v = noise(nx, ny, nz);
      y = map(v, 0, 1, -100, 100)+j;
      curveVertex(i, y);
      //println(v);
    }
    vertex(width, j);
    endShape();
}
    nz+=.01;
}