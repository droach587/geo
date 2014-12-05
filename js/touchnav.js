var touchNav = (function () {

	function init(){
	
		$(document).on('click touchstart', '.primary-mobile-trigger', function(e){
			$('.primary-nav-ul').toggleClass('visible');
			e.preventDefault();  
		});
		
		$(document).on('click touchstart', '.dropdown-trigger', function(e){
			$(this).parent().next().toggleClass('visible');
			if($(this).html()==='+'){
				$(this).html('-');
			}else{
				$(this).html('+');
			}
			e.preventDefault();  
		});
		
		$(document).on('click touchstart', '.partner-dropdown-trigger', function(e){
			var target = $(this).attr('data-target'),
				$plus = $(this).find('.plus');
			$('.standard-p.dropdown#'+target).toggleClass('visible');
			
			if($plus.html()==='+'){
				$plus.html('-');
			}else{
				$plus.html('+');
			}
			
			e.preventDefault();  
		});
		
		$(document).on('click', '.primary-nav-ul li a.expanded', function(e){
			if(!$(this).hasClass('active-menu')){
				$(this).toggleClass('active');
				$(this).next().toggleClass('visible');
			}
			e.preventDefault();
		});
	}
	
	return {
		init: init
	};

})();