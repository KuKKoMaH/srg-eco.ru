import { tns } from "tiny-slider/src/tiny-slider";

if ($('.frontSlider__slides').length) {
  const frontSlider = tns({
    container:  '.frontSlider__slides',
    items:      1,
    swipeAngle: false,
    speed:      400,
    nav:        false,
    autoplay:   true,
    prevButton: '.frontSlider__arrow--left',
    nextButton: '.frontSlider__arrow--right'
  });
}