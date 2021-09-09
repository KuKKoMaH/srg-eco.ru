import { BREAKPOINT_LG, BREAKPOINT_MD, BREAKPOINT_SM } from "../../js/init";
import initSlider                                      from "../../js/initSlider";

initSlider('.documents__slider', ( $el ) => ({
  wrapperClass:  'documents__items',
  slideClass:    'documents__item',
  navigation:    {
    prevEl: $el.parents('.documents').find('.nav__button--prev')[0],
    nextEl: $el.parents('.documents').find('.nav__button--next')[0],
  },
  pagination:          {
    el:        $el.parents('.documents').find('.nav__pagination')[0],
    clickable: true,
  },
  // touchlicensesTarget: 'wrapper',
  slidesPerView: 5,
  breakpoints:   {
    [BREAKPOINT_LG]: {
      slidesPerView: 4,
    },
    [BREAKPOINT_MD]: {
      slidesPerView: 3,
    },
    [BREAKPOINT_SM]: {
      slidesPerView: 1,
    },
  },
}));
