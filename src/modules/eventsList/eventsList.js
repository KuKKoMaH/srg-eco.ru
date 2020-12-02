import Swiper      from '../../js/swiper';
import Breakpoints from 'breakpoints-js';

$('.eventsList').each(( i, el ) => {
  let slider;
  const $el = $(el);
  const rows = $el.data('rows');

  const initSliders = () => {
    destroySlider();
    slider = new Swiper($el.find('.eventsList__container'), {
      init:                   false,
      wrapperClass:           'eventsList__items',
      slideClass:             'eventsList__item',
      navigation:             {
        prevEl: $el.find('.eventsList__nav--prev')[0],
        nextEl: $el.find('.eventsList__nav--next')[0],
      },
      // touchEventsTarget: 'wrapper',
      slidesPerColumn:        +rows,
      slidesPerView:          3,
      slidesPerGroup:         3,
      // slidesPerColumnFill: 'row',
      spaceBetween:           20,
      speed:                  400,
      loopFillGroupWithBlank: true,
      breakpoints:            {
        // 1150: {
        //   slidesPerView: 3,
        // },
        // 1080:  {
        //   slidesPerView: 2,
        // },
      },
    });
    slider.on('reachEnd', () => {
      const cbName = $el.data('onreachend');
      if (window[cbName]) window[cbName](slider);
    });
    slider.init();
  };

  $el.find('.eventsList__more a, .eventsList__more button').on('click', ( e ) => {
    e.preventDefault();
    e.stopPropagation();
    const cbName = $el.data('onreachend');
    if (window[cbName]) window[cbName](slider);
  });

  const destroySlider = () => {
    if (slider) slider.destroy(true, true);
    slider = null;
  };

  Breakpoints.on('sm', 'enter', () => {
    destroySlider();
  });
  Breakpoints.on('lg', 'enter', () => {
    initSliders();
  });
});
