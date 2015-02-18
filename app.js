(function() {
	'use strict';

	var rawLinks = $('.main-text a').toArray();

	_.each(rawLinks, function(link){
		$('.links').append('<li><a href="'+link.href+'">'+link.innerText+'</a></li>');
	});
})();