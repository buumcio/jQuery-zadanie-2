//$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000); 
	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 800, moveFirstSlide);
	};
	function moveFirstSlide(){
		//carouselList.find("li:last").after(carouselList.find("li:first"));
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});

	}
	
	
//});

