$( document ).ready(function() {
	
	// on/off navigation on smaller screens //
  $(".menu").click(function(){
	$(".small_nav").toggle();
  });
  
////////////////////////////////////////////////////////////////// google maps
$(document).ready(function(){

var mapCanvas = document.getElementById("map");
var mapSetings = {
    center: new google.maps.LatLng(51.5076258,-0.5905128,17), 
	 // Zoom to 14 when clicking on marker
	zoom: 14,
	mapTypeId: google.maps.MapTypeId.ROADMAP	
};

var map = new google.maps.Map(mapCanvas, mapSetings);

var pointer = new google.maps.LatLng(51.5076258,-0.5905128,17); // pointer coords //
var marker = new google.maps.Marker({
  position: pointer,
  animation:google.maps.Animation.DROP,
  icon: "images/mapPointer.png",
  title: "SL1 1JU"
  });

marker.setMap(map);
});

//to_top button script//
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1100) {
        $(".to_top").css("display", "block");
    } else {
        $(".to_top").css("display", "none");
    }
});
}); // close //



