var touchNav = (function () {
 
       function init(){
	       
	       $(document).on('click touchstart', '.primary-mobile-trigger', function(e){
		       $('.primary-nav-ul').toggleClass('visible');
			   e.preventDefault();  
	       });
       }
 
       return {
            init: init
        };
 
    })();