import Swiper from '../../js/swiper';

const $container = $('.clientsSlider');

if ($container.length) {
  new Swiper($container.find('.c')[0], {
    wrapperClass:      'clientsSlider__items',
    slideClass:        'clientsSlider__item',
    navigation:        {
      prevEl: $container.find('.clientsSlider__arrow--left')[0],
      nextEl: $container.find('.clientsSlider__arrow--right')[0],
    },
    touchEventsTarget: 'wrapper',
    slidesPerView:     1,
    spaceBetween:      20,
    loop:              true,
    speed:             400,
  });
}
