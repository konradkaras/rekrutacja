var imperial_march = new Audio("imperial_march.mp3");

var selected_characters = [];

$(document).ready(function(){
    $('form').on('submit',function(event){
		
        event.preventDefault();
		
		imperial_march.pause();
		imperial_march.currentTime = 0;
		
		$('.characters input:checked').each(function() {
			selected_characters.push($(this).attr('value'));
		});
		
		if ( ($.inArray("light_side", selected_characters) > -1 ) || (selected_characters.length == 0) ){
			this.submit();
		}
	
		else {
			imperial_march.play();
		}
		
		while (selected_characters.length) {
			selected_characters.pop();
		}
        
    });
});