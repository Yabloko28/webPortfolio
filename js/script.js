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