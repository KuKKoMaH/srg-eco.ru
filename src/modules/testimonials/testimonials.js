import { BREAKPOINT_LG, BREAKPOINT_MD } from "../../js/init";
import initSlider                       from "../../js/initSlider";

initSlider('.testimonials__slider', ( $el ) => ({
  wrapperClass:    'testimonials__items',
  slideClass:      'testimonials__item',
  navigation:      {
    prevEl: $el.parents('.testimonials').find('.nav__button--prev')[0],
    nextEl: $el.parents('.testimonials').find('.nav__button--next')[0],
  },
  pagination:      {
    el:        $el.parents('.testimonials').find('.nav__pagination')[0],
    clickable: true,
  },
  // touchEventsTarget: 'wrapper',
  // slidesPerView:   1,
  // slidesPerColumn: 2,
  spaceBetween:    0,
  slidesPerView:   2,

  breakpoints: {
    [BREAKPOINT_LG]: {
      slidesPerView:   1,
    },
    [BREAKPOINT_MD]: {
      slidesPerView:   1,
      slidesPerColumn: 2,
      slidesPerGroup:  1,
    },
  },
}), {
  // sm: false,
  // md: false,
  // lg: true,
});
