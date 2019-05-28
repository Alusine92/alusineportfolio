$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Software Engineer.", "Web Developer.", "Android | iOS Developemnt","Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

		$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:3
	        },
	        768:{
	            items:5
	        },
	        938:{
	        	items:4
	        }
	    }
});


		 var skillsTopOffset = $(".skillsSection").offset().top;
		 
		 $(window).scroll(function(){


		 	if(window.pageYOffset > skillsTopOffset -$(window).height() + 100){



		 $('.chart').easyPieChart({
	            easing: 'easyInOut',
	            barColor: '#fff',
	            trackColor: false,
	            lineWidth: 4,
	            size:152,
	            onStep: function(from, to, percent) {
	            	$(this.el).find('.percent').text(Math.round(percent));
	            }


	        });


		 	}
		 });

 


});