

// MODAL FLY IN/OUT
function popIn() {
	$('.modal').addClass('active');
	$('body').css('overflow','hidden');

	setTimeout(function(){
		$('.modal-content').removeClass('close');
		$('.modal-content').addClass('active');
	},50);	

}
// Make the modal fly up and out of view by changing CSS classes
//
// 'el' is the jquery object that will trigger the effect when clicked
function popOut(el) {
	$(el).click(function(){
		$('.modal-content').removeClass('active');
		$('.modal-content').addClass('close');
		setTimeout(function(){
			$('.modal').removeClass('active');
			$('body').css('overflow','initial');
		},200);
	});
}

$('.resume-btn').click(function(){
	popIn();
});

popOut('.close-btn');
popOut('.modal-overlay');
// END MODAL
