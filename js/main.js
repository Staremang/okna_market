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
	$('.equipment-slider').slick({
		infinite: true,
		slidesToShow: 3,
//		slidesToScroll: 3
	});
	$('.colors-slider').slick({
		infinite: true,
		slidesToShow: 5,
//		slidesToScroll: 3
	});
	
	
	$('.gallery-slider').slick({
		infinite: true,
//		slidesToShow: 3,
		centerMode: true,
		centerPadding: '60px',
		variableWidth: true
	});
	$('.reviews').slick({
		infinite: true,
		slidesToShow: 1,
		rtl: false
	});
	$('.reviews__btn-next').click(function () {
		$('.reviews').slick("slickNext");
	})
	$('.reviews__btn-prev').click(function () {
		$('.reviews').slick("slickPrev");
	})
	
	
	var t = $('.timer-val').FlipClock({
		countdown: true,
		defaultLanguage: 'ru-ru',
		language: 'ru-ru',
	});
//	var t = $('.timer-val').FlipClock(86400, {
//		countdown: true,
////		defaultClockFace: 'ru-ru'
//	});
//	console.log(t);

})