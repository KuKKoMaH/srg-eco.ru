import { tns } from "tiny-slider/src/tiny-slider";

const $container = $('.clientsSlider');

if ($container.length) {
  tns({
    container:  $container.find('.clientsSlider__items')[0],
    prevButton: $container.find('.clientsSlider__arrow--left')[0],
    nextButton: $container.find('.clientsSlider__arrow--right')[0],
    items:      1,
    swipeAngle: false,
    speed:      400,
    nav:        false,
    gutter:     20,
    // "autoHeight": true,
  });
}
