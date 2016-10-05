;(function($){ 
	function videoHeight(){
		if($( "#video-bg" ).length){
			if(window.innerWidth > 1199){
				var wH = window.innerHeight;
				var lH = $('#video-bg .box').height();

				// var element = document.getElementById("text");

				// element.innerHTML = window.innerWidth + ' - ' + $('img.logo ').height();

				$("#video-bg").height( window.innerHeight );
				$("#video-bg .box").css('margin-top', (wH/2) - (lH/2) - 20 );
			}else{
				$("#video-bg").removeAttr( 'style' );
				$("#video-bg .box").removeAttr( 'style' );
			}
		}
	}

	function fullHeight(){
        $('.full-h').each(function() {
        	$( this ).css('height','auto');
        	var h = $( this ).parent().height();
        	if( $( this ).height() < h){
				$( this ).height(h);
         	}
        });
    }

    $(window).resize(function() {
    	videoHeight()
    	fullHeight();
    });

	$('#video-bg').ready(function() {
		videoHeight();
		$("#video-bg").addClass("on");
		fullHeight();
	});
})(jQuery);
