$(document).ready(function() {
	$('.box').mouseenter(function() {
		var box = $(this);
		var rc = $('.right>.right-content');
		rc.children('h3.rc-title').text(box.find('.other-info .title').text());
		rc.children('p.rc-content').text(box.find('.other-info .content').text());
		rc.find('a.rc-link').attr('href', box.find('.other-info .url').text());
		rc.css('opacity', '1');
	});
	// .mouseleave(function() {
	// 	$('.right>.right-content').css('opacity', '0');
	// })

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

	$('.ui.dropdown').dropdown();

	$('#date-selector i.circular.calendar.link.icon').on('click', function() {
		window.location.href = $('#date-selector input').val();
	});
});

