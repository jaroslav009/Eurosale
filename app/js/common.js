(function($){
	$('.calculate_btn').click(function() {
		$( "#dialog" ).dialog();
	})
	$(".slick-next .slick-arrow").css({'display': 'none'})

	if(window.screen.availWidth <= 448) {
		$('.top_fdmnu_list').appendTo('.bottom_mnu_head')
	}
	if(window.screen.availWidth <= 448) {
			$('.contact_mnu_sm').appendTo('.phone')
	}
	if(window.screen.availWidth <= 448) {
		$('.top_mnu .offset-md-2').removeClass('col-3')
		$('.top_mnu .offset-md-2').addClass('col-6')
		$('.top_mnu .col-lg-3').addClass('col-6')
	}
	window.addEventListener('resize', function(e){
		if(window.screen.availWidth <= 448) {
			$('.top_mnu_list').appendTo('.bottom_mnu_head')
		}
		if(window.screen.availWidth <= 448) {
				$('.contact_mnu_sm').appendTo('.phone')
		}
		if(window.screen.availWidth <= 448) {
			$('.top_mnu .offset-md-2').removeClass('col-3')
			$('.top_mnu .offset-md-2').addClass('col-6')
			$('.top_mnu .col-lg-3').addClass('col-6')
		}
	})

    //Init Owl-Carousel begin
    	$(".owl-carousel").owlCarousel({
    		loop:true,
    		merge:true,
    		responsiveClass:true,
    		margin:10,
    		center:true,
		    responsive:{
		    	0:{
		    		stagePadding: 0,
		    		items: 1,
		    		nav:true
		    	},
		        560:{
		            items:2,
		            nav:true,
    				stagePadding: 100
		        },
		        960:{
		            items:5,
		            nav:false
		        }
		    }

    	});
    //End
    $('.menu').click(function() {
    	$(this).closest('.menu').toggleClass('menu_state_open');
    	$('.dropdown-child').toggleClass('d-none')
    })
    $('.dropdown-child a').click(function() {
    	$('.menu').closest('.menu').removeClass('menu_state_open');
    	$('.dropdown-child').toggleClass('d-none')
	})
	
	$('.logo_companys').slick({
	  	infinite: false,
	  	speed: 300,
	  	slidesToShow: 5,
	  	slidesToScroll: 5,
	  	adaptiveHeight: true,
	  	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 960,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4
	      }
	    },
	    {
	      breakpoint: 880,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 715,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	$("#btn_company_1").click(function() {
		$("#btn_company_1").toggleClass("active_button")
	})
	$("#btn_company_2").click(function() {
		$("#btn_company_2").toggleClass("active_button")
	})
	$("#btn_company_3").click(function() {
		$("#btn_company_3").toggleClass("active_button")
	})
	$("#btn_company_4").click(function() {
		$("#btn_company_4").toggleClass("active_button")
	})
	$("#btn_company_5").click(function() {
		$("#btn_company_5").toggleClass("active_button")
	})
	$("#btn_company_6").click(function() {
		$("#btn_company_6").toggleClass("active_button")
	})
	$("#btn_company_7").click(function() {
		$("#btn_company_7").toggleClass("active_button")
	})
	$("#btn_company_8").click(function() {
		$("#btn_company_8").toggleClass("active_button")
	})
})(jQuery);