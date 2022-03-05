$(document).ready (function(){
	
	//Sticky menu
	
	$(".js--service-area").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}
		else{
			$("nav").removeClass("sticky")
		}
	})
	
	//mixitup (doctors area)
	var mixer = mixitup('.container');
});

//mobile menu

function openNav(){
	document.getElementById("myNav").style.width="100%"
}
function closeNav(){
	document.getElementById("myNav").style.width="0%"
}