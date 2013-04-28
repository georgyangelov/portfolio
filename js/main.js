$('nav#menu a').click(function() {
	if (this.hash) {
		var dest = 0;
		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
			dest = $(document).height() - $(window).height();
		}
		else {
			dest = $(this.hash).offset().top;
		}

		$('html,body').animate({
			scrollTop:dest
		}, 1000, 'swing');
	}

	return false;
});

var colors = ['green', 'orange', 'blue'];

$('#color-select-container .color-select').click(function() {
	var $body = $('body');

	for (var i = 0; i < colors.length; i++) {
		$body.removeClass(colors[i]);

		if ($(this).hasClass(colors[i])) {
			$body.addClass(colors[i]);
		}
	}

	return false;
});