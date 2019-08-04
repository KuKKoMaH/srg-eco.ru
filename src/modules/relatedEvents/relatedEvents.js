import { tns } from "tiny-slider/src/tiny-slider";

if($('.relatedEvents__slides').length) {
  tns({
    container:  '.relatedEvents__slides',
    items:      1,
    swipeAngle: false,
    speed:      400,
    nav:        false,
    prevButton: '.relatedEvents__arrow--left',
    nextButton: '.relatedEvents__arrow--right',
    autoHeight: true,
  });
}