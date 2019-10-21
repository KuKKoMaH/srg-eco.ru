import Swiper from '../../js/swiper';

const $container = $('.fines__slider');

if ($container.length) {
  new Swiper($container, {
    wrapperClass:      'fines__slides',
    slideClass:        'fines__slide',
    navigation:        {
      prevEl: '.fines__arrow--left',
      nextEl: '.fines__arrow--right',
    },
    touchEventsTarget: 'wrapper',
    slidesPerView:     1,
    spaceBetween:      20,
    loop:              true,
    speed:             400,
  });
}
