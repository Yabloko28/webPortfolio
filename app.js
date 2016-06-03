

//------------------------------------------------------------------------
$(document).ready(function(e) {
	$.getJSON('data.json', function(data, e) {
		var output = '';
		$.each(data, function(key, val) {
			output += '<li>' + '<div class="project-image">' + '<img src="' + val.image + '">' + '</div>';
			output += '<div class="project-info">' + '<h3>' + val.title + '</h3>';
			output += '<p class="tools">' + val.tools + '</p>';
			output += '<p class="description">' + val.description + '</p>';
			output += '<a class="button" href="' + val.button1Href + '" id="' + val.button1ID + '"';
			if (val.button1ID != "readMore") {
				output += ' target="_blank" ';
			};
			output += '>' + val.button1 + '</a>';
			output += '<a target="_blank" class="button" href="' + val.button2Href + '">' + val.button2 + '</a>';
			output += '</div>' + '</li>';
		})
		$('#works').html(output);
	// 	$('#works').find('#readMore').on('click', function(e) {
	// 	e.preventDefault();
	// 	var $info = $('#project-container');
	// 	switch ($(this).attr('href')) {
	// 		case 'moodject.html':
	// 		console.log('yes');
	// 		$info.load('templates/moodject.html');
	// 	}
	// 	$('#project-container').load('templates/maude.html');
	// });
	})
})

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