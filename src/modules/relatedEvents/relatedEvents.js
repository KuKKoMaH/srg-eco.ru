import Swiper from '../../js/swiper';

const $slider = $('.relatedEvents__slider');

if($slider.length) {
  new Swiper($slider[0], {
    wrapperClass:      'relatedEvents__slides',
    slideClass:        'relatedEvents__item',
    navigation:        {
      prevEl: $slider.find('.relatedEvents__arrow--left')[0],
      nextEl: $slider.find('.relatedEvents__arrow--right')[0],
    },
    touchEventsTarget: 'wrapper',
    slidesPerView:     1,
    spaceBetween:      20,
    loop:              true,
    speed:             400,
  });
}