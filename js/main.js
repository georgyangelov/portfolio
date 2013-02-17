/* Load SmartAjax */
SmartAjax_load('js/smartajax/', function() {
	SmartAjax.setOptions({
		cache: false,
		containers: [
			{selector: '#content'}
		],

		before: function() {
			$('#loader').show();

			SmartAjax.proceed();
		},
		success: function() {
			$('#content').fadeOut(500, SmartAjax.proceed);
		},
		done: function() {
			$('#content').fadeIn(500, function() {
				$('#loader').hide();
			});
		}
	});

	SmartAjax.bind('a');
	SmartAjax.bindForms('form');
}, true);

$('nav#menu a').click(function() {
	$(this).parents('nav').find('li').removeClass('active');
	$(this).parents('li').addClass('active');
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

/*var MainVM = function() {
	var self = this;


};

Application = new MainVM();
ko.applyBindings(Application);*/