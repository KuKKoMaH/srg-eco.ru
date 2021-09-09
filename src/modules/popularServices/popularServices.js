import { BREAKPOINT_LG, BREAKPOINT_MD } from "../../js/init";
import initSlider                       from "../../js/initSlider";

$('.popularServices').each(( i, el ) => {
  const $el = $(el);
  $el.find('.popularServices__expandAll').click(() => {
    $el.toggleClass('popularServices--expanded');
  });
  $el.find('.popularServices__expand').click(( e ) => {
    const $btn = $(e.delegateTarget);
    $btn.parents('.popularServices__item').toggleClass('popularServices__item--expanded');
  });
});

initSlider('.popularServices__slider', ( $el ) => ({
  wrapperClass:  'popularServices__items',
  slideClass:    'popularServices__item',
  navigation:    {
    prevEl: $el.parents('.popularServices').find('.nav__button--prev')[0],
    nextEl: $el.parents('.popularServices').find('.nav__button--next')[0],
  },
  slidesPerView: 3,
  breakpoints:   {
    [BREAKPOINT_LG]: {
      slidesPerView: 2,
    },
  },
}), {
  sm: false,
  lg: true,
});

