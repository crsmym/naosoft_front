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
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
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
    focusOnSelect: true
  })
})