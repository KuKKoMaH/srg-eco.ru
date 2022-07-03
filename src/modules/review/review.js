import { BREAKPOINT_LG, BREAKPOINT_MD, BREAKPOINT_SM } from "../../js/init";
import initSlider                                      from "../../js/initSlider";

initSlider('.review__slider', ( $el ) => ({
  wrapperClass:  'review__items',
  slideClass:    'review__item',
  navigation:    {
    prevEl: $el.parents('.review').find('.nav__button--prev')[0],
    nextEl: $el.parents('.review').find('.nav__button--next')[0],
  },
  pagination:          {
    el:        $el.parents('.review').find('.nav__pagination')[0],
    clickable: true,
  },
  // touchlicensesTarget: 'wrapper',
  slidesPerView: 4,
  breakpoints:   {
    [BREAKPOINT_LG]: {
      slidesPerView: 3,
    },
    [BREAKPOINT_MD]: {
      slidesPerView: 2,
    },
    [BREAKPOINT_SM]: {
      slidesPerView: 1,
    },
  },
}));
