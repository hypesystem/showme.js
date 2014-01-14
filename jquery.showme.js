(function($) {
	//Define jQuery function:
	$.fn.showme = function(settings) {
        settings = typeof settings !== "undefined" ? settings : {};
        settings = $.extend({
            error: function(e) { console.error(e); }
        }, settings);
    
		var $content = $(this);
	
		//Create activator
		$('<div class="showme-activator">Show me</div>')
			.insertAfter($(this))
			.click(function() {
                try {
                    (new Function($content.text())();
                }
                catch(e) {
                    settings.error(e);
                }
			});
	}

	//On page load
	$(document).ready(function() {
	
		//Automatically activate on all items with "showme" class.
		$(".showme").each(function() {
			$(this).showme();
		});
	});
})(jQuery);