import { tns } from "tiny-slider/src/tiny-slider";

const $container = $('.fines__slider');

if ($container.length) {
  tns({
    container:  $container.find('.fines__items')[0],
    prevButton: $container.find('.fines__arrow--left')[0],
    nextButton: $container.find('.fines__arrow--right')[0],
    items:      1,
    swipeAngle: false,
    speed:      400,
    nav:        false,
    gutter:     20,
    // "autoHeight": true,
  });
}
