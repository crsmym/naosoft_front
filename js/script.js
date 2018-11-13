$(function(){
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
  $('.history_slide').slick({
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 1,
    vertical: true,
    adaptiveHeight: true
  })
  $('.client_slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  })
})