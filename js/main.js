$('nav#menu a').click(function() {
	$(this).parents('nav').find('li').removeClass('active');
	$(this).parents('li').addClass('active');

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
});