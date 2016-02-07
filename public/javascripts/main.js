$(document).ready(function() {

	if ($('#event-type-box').length != 0)
		particlesJS.load('image', 'javascripts/particles.json', null);

	var hasClicked = false;
	$('#event-type-box .button').on('click', function() {
		if (!hasClicked)
			$.smoothScroll({
      			scrollTarget: '#more-text',
      			offset: -450
    		});
		$(this).toggleClass('active');
	});

	$('.box').on('click', function(e) {
		if (e.clientY > 3/4 * $(window).height())
			$.smoothScroll({
      			scrollTarget: $(this),
      			offset: -400
    		});
		else if (e.clientY < 1/4 * $(window).height())
			$.smoothScroll({
      			scrollTarget: $(this),
      			offset: -400
    		});
		$(this).toggleClass('selected');
	});

	// var lock = false;

	// $('.yes').mouseenter(function(event) {
	// 	if (lock)
	// 		return;
	// 	console.log('yes');
	// 	$(this).addClass('active');
	// 	$(this).siblings('.no').removeClass('active');
	// 	moveIfNecessary($(this), event);
	// });

	// $('.no').mouseenter(function(event) {
	// 	if (lock)
	// 		return;
	// 	$(this).addClass('active');
	// 	$(this).siblings('.yes').removeClass('active');
	// 	moveIfNecessary($(this), event);
	// });

	// function moveIfNecessary(caller, event) {
	// 	console.log(caller.offset());
	// }

	function particles() {
		
	}
});