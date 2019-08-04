import { tns } from "tiny-slider/src/tiny-slider";
import Breakpoints from 'breakpoints-js';

$('.cardsList--slider').each((i, el) => {
  let slider;
  const $el = $(el);

  const initSliders = () => {
    destroySlider();
    slider = tns({
      container:  $el.find('.cardsList__items')[0],
      prevButton: $el.find('.cardsList__arrow--left')[0],
      nextButton: $el.find('.cardsList__arrow--right')[0],
      items:      1,
      swipeAngle: false,
      speed:      400,
      nav:        false,
      gutter:     20,
    });
  };

  const destroySlider = () => {
    if (slider) slider.destroy();
    slider = null;
  };

  Breakpoints.on('sm', 'enter', () => initSliders());
  Breakpoints.on('lg', 'enter', () => {
    destroySlider();
  });
});
