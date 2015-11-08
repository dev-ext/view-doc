'use strict';
var app = {};
(function($){
	// dropdown 
	app.dropdown = function  () {		
		$('.doc_navlist__link--hasdrop')
		.on('click',function(){
			$(this).next().slideToggle();
			$(this).toggleClass('doc_navlist__link--active');
		});
	};
	app.callbacks =  function  () {
		app.dropdown();
	};

	// Callbacks
	app.callbacks();
	

})(jQuery);
