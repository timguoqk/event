$(document).ready(function() {
	$('.box').mouseenter(function() {
		var box = $(this);
		var rc = $('.right>.right-content');
		rc.children('h3.rc-title').text(box.find('.other-info .title').text());
		rc.children('p.rc-content').text(box.find('.other-info .content').text());
		rc.children('a.rc-link').attr('href', box.find('.other-info .url').text());
		rc.css('opacity', '1');
	});
	// .mouseleave(function() {
	// 	$('.right>.right-content').css('opacity', '0');
	// })
});