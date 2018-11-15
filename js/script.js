$(function(){
  // for seevice area options
  $('.service_slide').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '20%',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: 0,
          slidesToShow: 1,
          arrows: false
        }
      },
    ]
  })

  // for history area options
  $('.history_slide').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    vertical: true,
  })
  
  // for client area slide options
  $('.client_slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }, ]
  })

  // mobile navigation menu slide toggle 
  
  $(".menu_btn a .open").click(function () {
    event.preventDefault();
    $(this).hide();
    $(".menu_btn a .close").show();
    $('#m_menu_list').animate({
      right: 0
    }, 500)
    $('#dim').animate({
      right: 0
    }, 200)
  });
  
  $(".menu_btn a .close").click(function () {
    event.preventDefault();
    $(this).hide();
    $(".menu_btn a .open").show();
    $('#m_menu_list').animate({
      right: '-290px'
    }, 500)
    $('#dim').animate({
      right: '-100%'
    }, 200)
  });
  
  // menu bar navigaiter 
  $('.menu_li a').click(function(){
    $('.menu_li a').removeClass('active');
    $(this).addClass('active');
  })
  
  // TOP button
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop > $(window).height()) {
      $('.btn_top').addClass('on');
    } else {
      $('.btn_top').removeClass('on');
    }
  });
  
  // when the on click Top button
  $('.btn_top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
})