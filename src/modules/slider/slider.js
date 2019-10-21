import Swiper from '../../js/swiper';

function initSlider(container) {
  const $container = $(container);
  let responsive;
  try {
    responsive = JSON.parse(container.dataset.slider);
  } catch (e) {
    responsive = undefined;
  }

  new Swiper(container, {
    wrapperClass:             'slider__slides',
    slideClass:               'slider__slide',
    navigation:               {
      prevEl: $container.find('.slider__arrow--left')[0],
      nextEl: $container.find('.slider__arrow--right')[0],
    },
    touchEventsTarget:        'wrapper',
    centerInsufficientSlides: true,
    slidesPerView:            1,
    // loop:                     true,
    watchOverflow:            true,
    autoHeight:               true,
    spaceBetween:             20,
    speed:                    400,
    breakpointsInverse:       true,
    breakpoints:              responsive,
  });
}

export default initSlider;

$('.slider').each((index, container) => initSlider(container));
