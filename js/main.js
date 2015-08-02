

// MODAL
$('#resume-btn').click(function(){
	$('.modal').addClass('active');
	$('body').css('overflow','hidden');

	setTimeout(function(){
		$('.modal-content').removeClass('close');
		$('.modal-content').addClass('active');
	},200);	
});

$('.close-btn').click(function(){
	$('.modal-content').removeClass('active');
	$('.modal-content').addClass('close');
	setTimeout(function(){
		$('.modal').removeClass('active');
		$('body').css('overflow','initial');
	},200);
});

$('.modal').click(function(){
	$('.modal-content').removeClass('active');
	$('.modal-content').addClass('close');
	setTimeout(function(){
		$('.modal').removeClass('active');
		$('body').css('overflow','initial');
	},200);
});
// END MODAL