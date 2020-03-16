jQuery(document).ready(function ($) {
	  $('.lines-button').click(function( ) {	
	    if( $(this).hasClass('active') ){
	    	$('.lines-button').removeClass( 'active' );
	    	$('.mean-nav ul.firstul').slideUp();
	    	} else	{
	    	$('.lines-button').removeClass( 'active' );
	    	$(this).addClass( 'active' );
	    	$('.mean-nav ul.firstul').slideDown();	
	    	}
	    });		  
		jQuery('.main_menu').meanmenu();
		
	

	});

	function changeCar(evt, carColor){
		var tabcontent = document.getElementsByClassName("tabcontent");
		for(var i=0; i< tabcontent.length; i++){
			tabcontent[i].style.display = "none";
		}

		var tablinks = document.getElementsByClassName("cc");
		for(var i=0; i < tablinks.length; i++){
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(carColor).style.display = "block";
		  evt.currentTarget.className += " active";
	}

$(".tab_content").hide();
$(".tab_content:first").show();

$("ul.tabs li").click(function() {
	
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		
	
  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  
});
$(".tab_container").css("min-height", function(){ 
  return $(".tabs").outerHeight() + 50;
});
$(".tab_drawer_heading").click(function() {
  
  $(".tab_content").hide();
  var d_activeTab = $(this).attr("rel"); 
  $("#"+d_activeTab).fadeIn();
  
  $(".tab_drawer_heading").removeClass("d_active");
  $(this).addClass("d_active");
  
  $("ul.tabs li").removeClass("active");
  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
});

	
	