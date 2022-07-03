import Swiper      from "src/js/swiper";
import initGallery from '../../js/initGallery';

const $items = $('.licenses__item');
if ($items.length) {
  initGallery({ $items });
}

$('.licenses').each(( i, el ) => {
  let slider;
  const $el = $(el);

  slider = new Swiper($el.find('.licenses__slider')[0], {
    wrapperClass:  'licenses__slides',
    slideClass:    'licenses__slide',
    navigation:    {
      prevEl: $el.find('.nav__button--prev')[0],
      nextEl: $el.find('.nav__button--next')[0],
    },
    slidesPerView: 3,
    spaceBetween:  0,
    // loop:              true,
    speed:       400,
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
  });
});
