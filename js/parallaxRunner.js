  (function($) {
  	$(function() {

  		$('.button-collapse').sideNav();
  		$('.parallax').parallax();

  	}); // end of document ready
  })(jQuery); // end of jQuery name space


  var selectorCounter;
  var selectorChosen;

  function showTextEffect(position, selector, delay) {
  	if (position <= topWeb) {
  		$(selector).textillate({ in : { effect: 'fadeInLeftBig', initialDelay: 0, delayScale: delay } });
  		$(selector).css('display', 'inline');
  	}
  }

