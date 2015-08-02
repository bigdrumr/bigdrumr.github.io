
$('#resume-btn').click(function(){
	$('.modal').removeClass('close');
	$('.modal').addClass('active');
	setTimeout(function() {
		$('.modal-content').removeClass('remove');
	},100);
	
});
$('.close-btn').click(function(){
	$('.modal').removeClass('active');
	$('.modal-content').addClass('remove');
	$('.modal').addClass('close');
});
