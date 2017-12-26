var count = 0;
$('.langs div').click(function(){
	if(count == 0){
		$('.langs div').show();	
		count++;
	}else{
		$('.langs div').hide();
		$(this).show();
		count--;
	}
});
var counter = 0;	
$('.langs i').click(function(){
	if(counter == 0){
		$('.langs div').show();	
		counter++;
	}else{
		$('.langs div').hide();	
		$('.ge').show();
		counter--;
	}
});

//scroll
$(document).scroll(function(){
	var scrollHeight = $(document).scrollTop();
	if(scrollHeight > 300)
		$('.headerScroll').addClass('stuck');
	else
		$('.headerScroll').removeClass('stuck');
});

var counter = 0;
$('.nav-sch,.nav-open').click(function(){
	if(counter == 0){
		$('body').css('overflow', 'hidden');
		if($(this).hasClass('nav-sch'))
			$('.caret-lang, .nav-open').hide();
		counter++;
	}else{
		$('body').css('overflow-y', 'scroll');
		if($(this).hasClass('nav-sch'))
			$('.caret-lang, .nav-open').show();
		counter = 0;
	}
});	