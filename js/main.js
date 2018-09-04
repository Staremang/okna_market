$(document).ready(function () {

	$('input[type=tel]').inputmask({
		'mask': '+7 (999) 999-99-99'
	})

	$('input[type=email]').inputmask({
		'alias': 'email'
	})
	
	

	$('form').on('submit', function (e) {
		e.preventDefault();
		
		var form 			= $(this),
			data 			= $(this).serialize(),
			id 				= $(this).attr('id'),
			submitBtn 		= $(this).find('button[type="submit"]'),
			submitBtnText 	= submitBtn.text(),
			sentForms 		= JSON.parse(localStorage.getItem('sentForms'));
		
		if (!sentForms || sentForms == '') {
			sentForms = {
				"interview": false,
				"guestVisit": false,
				"gift": false,
				"callMe": false
			}
		}

//		if (id == 'interview-form' && sentForms.interview) {
//			alert('Вы уже проходили опрос!');
//			return;
//		} else if (id == 'guest-visit-form' && sentForms.guestVisit) {
//			alert('Вы уже записались на гостевой визит!');
//			$.fancybox.close();
//			return;
//		}

		
		
		$.ajax({
			type: "POST",
			url: url,
			data: data,
			beforeSend: function () {
				submitBtn.attr('disabled', '');
				submitBtn.text('Отправка...');
			},
			error: function (error) {
				alert('Ошибка ' + error.status + '. Повторите позднее.');
				submitBtn.removeAttr('disabled');
				submitBtn.text(submitBtnText);
			},
			success: function (data) {
				submitBtn.removeAttr('disabled');
				submitBtn.text(submitBtnText);
				
				data = JSON.parse(data);
				
				var targetName = '';
				
				if (data.sended) {
					switch (id) {
						case 'guest-visit-form':


							if (!sentForms.gift) {
								$('#gift-parent-name').val($('#guest-visit-form__name').val());
								$.fancybox.open($('#thanks-and-gift-form'));
							} else {
								$.fancybox.open($('#thanks'));
							}

							targetName = 'gostevoi';
							sentForms.guestVisit = true;
							break; 

						case 'call-me-form':
							$.fancybox.close();
							$.fancybox.open($('#thanks'));

							switch (form.data('form')) {
								case 'promo-1':
									targetName = 'promo2';
									break;

								case 'promo-2':
									targetName = 'gost2';
									break;

								default:
									targetName = 'zvonok';
							}
							break;
							
						// Формы(2) "Узнать подробнее" на промо-строанице 1 (/promo)
						case 'promo-form-1':
						case 'promo-form-2':
							$.fancybox.close();
							$.fancybox.open($('#thanks'));

							targetName = 'promo1';
							break;

						// Формы(2) гостевого визита на промо-строанице 2 (/gostevoi)
						case 'guest-visit-promo-form-1':
						case 'guest-visit-promo-form-2':
							$.fancybox.close();
							$.fancybox.open($('#thanks'));

							targetName = 'gost1';
							break;
					}
					
//					if (typeof yaCounter49821397 != 'undefined') {
//						yaCounter49821397.reachGoal(targetName);
//					}
//					gtag('event', 'sendforms', { 'event_category': 'zayavka', 'event_action': 'podtverdit'});
					
					form[0].reset();
					localStorage.setItem('sentForms', JSON.stringify(sentForms));

				} else {
					alert (data.message);
				}

			}
		});
	});
})