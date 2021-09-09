import { BREAKPOINT_LG, BREAKPOINT_MD, BREAKPOINT_SM } from "../../js/init";
import initSlider                                      from "../../js/initSlider";

initSlider('.clients__slider', ( $el ) => ({
  wrapperClass:  'clients__items',
  slideClass:    'clients__item',
  navigation:    {
    prevEl: $el.parents('.clients').find('.nav__button--prev')[0],
    nextEl: $el.parents('.clients').find('.nav__button--next')[0],
  },
  pagination:      {
    el:        $el.parents('.clients').find('.nav__pagination')[0],
    clickable: true,
  },
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

