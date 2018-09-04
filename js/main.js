$(document).ready(function () {

	$('input[type=tel]').inputmask({
		'mask': '+7 (999) 999-99-99'
	})

	$('input[type=email]').inputmask({
		'alias': 'email'
	})
	
	$('.window-profiles').slick({
		infinite: true,
		slidesToShow: 3,
//		slidesToScroll: 3
	});

})