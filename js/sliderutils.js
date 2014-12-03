var sliderUtils = (function () {

	function updateCounter(attrs){
		$(attrs.element).html(attrs.current + ' of ' + attrs.total);
	}
	
	return {
		updateCounter: updateCounter
	};

})();