import Swiper      from '../../js/swiper';
import Breakpoints from 'breakpoints-js';

$('.cardsList--slider').each((i, el) => {
  let slider;
  const $el = $(el);

  const initSliders = () => {
    destroySlider();
    slider = new Swiper($el.find('.c')[0], {
      wrapperClass:      'cardsList__items',
      slideClass:        'cardsList__item',
      navigation:        {
        prevEl: $el.find('.cardsList__arrow--left')[0],
        nextEl: $el.find('.cardsList__arrow--right')[0],
      },
      touchEventsTarget: 'wrapper',
      slidesPerView:     1,
      spaceBetween:      20,
      loop:              true,
      speed:             400,
    });
  };

  const destroySlider = () => {
    if (slider) slider.destroy(true, true);
    slider = null;
  };

  Breakpoints.on('sm', 'enter', () => initSliders());
  Breakpoints.on('lg', 'enter', () => {
    destroySlider();
  });
});
