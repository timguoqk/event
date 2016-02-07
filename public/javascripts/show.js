$(document).ready(function() {
	$('.box').mouseenter(function() {
		$('.right>.right-content').css('display', 'block');
	}).mouseleave(function() {
		$('.right>.right-content').css('display', 'none');
	})
});