import Swiper from '../../js/swiper';

if ($('.frontSlider__slides').length) {
  new Swiper('.frontSlider', {
    wrapperClass:      'frontSlider__slides',
    slideClass:        'frontSlider__slide',
    navigation:        {
      prevEl: '.frontSlider__arrow--left',
      nextEl: '.frontSlider__arrow--right',
    },
    touchEventsTarget: 'wrapper',
    slidesPerView:     1,
    loop:              true,
    speed:             400,
  });
}