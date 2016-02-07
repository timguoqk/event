$(document).ready(function() {
	$('.box').mouseenter(function() {
		$('.right>.right-content').css('opacity', '1');
	}).mouseleave(function() {
		$('.right>.right-content').css('opacity', '0');
	})
});