$(function(){
  // for service area slide options
  $('.service_slide').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '20%',
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: 0,
          slidesToShow: 1,
          arrows: false,
          dots: false,
        }
      },
    ]
  })
  //for service slide dots custormize
  $('.service_slide .slick-dots li button').append(' / 4');

  // for history area options
  $('.history_slide').slick({
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    swipe: true,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
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

  // service area popups open
  $('.service_slide .slide_item .more').click(function(){
    event.preventDefault();
    $('#popups_bg').fadeIn(400);
  })
  $('.pop_close').click(function(){
    event.preventDefault();
    $('#popups_bg').fadeOut(400);
  })

  // solution area popups open
  $('.solution_list li a').click(function(){
    event.preventDefault();
    $('#popups_bg2').fadeIn(400);
  })
  $('.pop_close').click(function () {
    event.preventDefault();
    $('#popups_bg2').fadeOut(400);
  })

  // tab_menu in solution area popups
  $('#popups2 .tab_list').click(function(){
    event.preventDefault();
    var index = $(this).index() + 1;
    $('#popups2 .tab_list').removeClass('active');
    $(this).addClass('active');
    $('#popups2 .tab_cont .cont').removeClass('active');
    $('#popups2 .tab_cont .cont' + index).addClass('active');
  })
})