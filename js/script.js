$(function() {
	// for service area slide options
	$('.service_slide').slick({
		infinite : true,
		centerMode : true,
		slidesToShow : 1,
		centerPadding : '18%',
		slidesToScroll : 1,
		dots : true,
		responsive : [ {
			breakpoint : 768,
			settings : {
				centerPadding : '10%',
				slidesToShow : 1,
				arrows : false,
				dots : false,
			}
		}, ]
	})
	//for service slide dots custormize
	$('.service_slide .slick-dots li button').prepend('0');
	$('.service_slide .slick-dots li button').append(' / 04');

	// for history area options
	$('.history_slide').slick({
		infinite: false,
		vertical : true,
		verticalSwiping : true,
		adaptiveHeight : true,
		slidesToShow : 1,
		slidesToScroll : 1,
		swipe : true,
		useTransform : true,
		cssEase : 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
		responsive: [{
			breakpoint: 768,
			settings: {
				vertical: false,
				verticalSwiping: false,
			}
		}, ]
	})

	// for client area slide options
	$('.client_slide').slick({
		infinite : true,
		slidesToShow : 1,
		slidesToScroll : 1,
		dots : true,
		focusOnSelect : true,
		responsive : [ {
			breakpoint : 768,
			settings : {
				arrows : false
			}
		}, ]
	})

})
$(window).on('load', function() {

	// mobile navigation menu slide toggle 

	$(".menu_btn a .open").click(function() {
		  event.returnValue = false; 
		$(this).hide();
		$(".menu_btn a .close").show();
		$('#m_menu_list').animate({
			right : 0
		}, 500)
		$('#dim').animate({
			right : 0
		}, 200)
	});

	$(".menu_btn a .close").click(function() {
		  event.returnValue = false; 
		$(this).hide();
		$(".menu_btn a .open").show();
		$('#m_menu_list').animate({
			right : '-290px'
		}, 500)
		$('#dim').animate({
			right : '-100%'
		}, 200)
	});

	$('#m_menu_list ul li').on('click', function(){
		$(".menu_btn a .close").hide();
		$(".menu_btn a .open").show();
		$('#m_menu_list').animate({
			right: '-290px'
		}, 500)
		$('#dim').animate({
			right: '-100%'
		}, 200)
	})

	// menu bar navigaiter 
	$('.menu_li a').click(function() {
		$('.menu_li a').removeClass('active');
		$(this).addClass('active');
	})

	// TOP button
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		if (scrollTop > $(window).height()) {
			$('.btn_top').addClass('on');
		} else {
			$('.btn_top').removeClass('on');
		}
	});

	// when the on click Top button
	$('.btn_top').click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 500);
		return false;
	});

	// service area popups open
	$('.service_slide .slide_item .more').click(function() {
		if(event.preventDefault) {
			event.preventDefault();
		}else {
		  event.returnValue = false; 
		}		
		$('#popups_bg').fadeIn(400);
		$("body").addClass('modal_opened');
	})
	$('.pop_close').click(function() {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}		
		$('#popups_bg').fadeOut(400);
		$("body").removeClass('modal_opened');
	})

	// solution area popups open
	$('.solution_list li a').click(function() {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}		
		$('#popups_bg2').fadeIn(400);
		$('.img.img2').removeClass('active');
		$('.img.img1').addClass('active');
		$('.tab_list.tab_list2').removeClass('active');
		$('.tab_list.tab_list1').addClass('active');
		$('.cont.cont2').removeClass('active');
		$('.cont.cont1').addClass('active');
		$("body").addClass('modal_opened');
	})
	$('.pop_close').click(function() {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}		
		$('#popups_bg2').fadeOut(400);
		$("body").removeClass('modal_opened');
	})

	// tab_menu in solution area popups
	$('#popups2 .tab_list').click(function() {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}		
		var index = $(this).index() + 1;
		$('#popups2 .tab_list').removeClass('active');
		$(this).addClass('active');
		$('#popups2 .tab_cont .cont').removeClass('active');
		$('#popups2 .tab_cont .cont' + index).addClass('active');
	})

	$('#popups2 .tab_list1').click(function() {
		$('.img.img2').removeClass('active');
		$('.img.img1').addClass('active');
	})
	$('#popups2 .tab_list2').click(function() {
		$('.img.img1').removeClass('active');
		$('.img.img2').addClass('active');
	})
	$('#scroll_btn').click(function() {
		$('html, body').animate({
			scrollTop : $(".container").offset().top - 64
		}, 1300);
	})
	$(".nav_menu li").click(function() {
		var scrollPosition = $($(this).attr("data-target")).offset().top - 64;
		var section1s = document.getElementsByClassName("nav_item");

		$("html, body").animate({
			scrollTop : scrollPosition
		}, 1300);
	})
	$('.nav_menu .nav_item a').click(function() {
		$('.nav_menu .nav_item a').removeClass('active');
		$(this).addClass('active');
	})
	$(window).on('scroll', function() {
	    $('#main .container .section').each(function() {
	        if($(window).scrollTop() >= $(this).offset().top- 70) {
	            var id = $(this).attr('id');
	            $('.nav_menu .nav_item a').removeClass('active');
	            $('.nav_menu #nav_'+id+' a').addClass('active');
	        }
	    });
	});

})
