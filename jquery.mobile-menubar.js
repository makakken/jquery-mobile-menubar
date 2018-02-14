(function ( $ ) {

	var _calcDelta = function(val) { return val  > 0 ? 1 : -1; };

	$.fn.mobileMenubar = function(options) {

		var defaults = {
			scrollClass: "scroll"
		};

		var settings = $.extend( {}, defaults, options );
		var elements = this;
		var scrollOld = 0;
		var deltaOld = 0;
		var h = 0;

		$(elements).each(function() {
			 h += $(this).outerHeight();
			 $(this).css('top',$(this).offset().top);
		});

		$('body').css('margin-top',h);

		$(window).scroll(function() {
			$(elements).each(function() {
				console.log(deltaOld);
				var deltaNew = _calcDelta(scrollOld - $(window).scrollTop());
				if(deltaOld < deltaNew) {
					var toppos = $(window).scrollTop() - $(this).outerHeight();
					toppos = toppos > 0 ? toppos : 0;
					$(this).css('top',toppos);
				} else {
					if($(this).offset().top > $(window).scrollTop()) $(this).css('top',$(window).scrollTop());
				}

				/* if($(window).scrollTop() < $(this).offset().top && delta < 0) {
					$(this).css('top',$(window).scrollTop());
				} */

				deltaOld = deltaNew;
				scrollOld = $(window).scrollTop();
			});
		});
	};
}( jQuery ));
