$(document).ready(function() {
	
	$('.filters li').click(function(){
		var this_item = $(this).data('item');
		$(this).addClass('active'); // Add active class to menu item
		$(this).siblings().removeClass('active'); // Remove active class to menu siblings
		
		if(this_item == 'filter-0'){
			console.log(this_item);
			$('.filterItems').children().addClass('showfF').removeClass('fadefF');; // Remove class selected from every child object under .filterItems class.
		}else{
			$('.filterItems').children(':not([data-obj="' + this_item +'"])').addClass('fadefF').removeClass('showfF');
			$('.filterItems').children('[data-obj="' + this_item +'"]').removeClass('fadefF').addClass('showfF');
		}
	});
});