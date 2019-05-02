$(function(){

	$(window).scroll(function() {
		var offset= $(".skill").offset().top;
		var scroll = $(window).scrollTop();
		if (scroll = offset) {
			$('.skill .skill_ele .progress-bar').addClass("ani");
		}
	});
	$(".map").mouseover(function(){
		$("#map").css("display", "block");

	});
	$(".map").mouseout(function(){
		$("#map").css("display", "none");

	});

});
