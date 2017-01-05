jQuery(document).ready(function() {
	jQuery('.change-item').click(function(){	
		var this_item = jQuery(this).attr("data-item");
		jQuery('.' + this_item).css("opacity", "0.5");
		jQuery('div').not('.' + this_item).css("opacity", "1");
	});
});