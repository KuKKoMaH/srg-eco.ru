import Swiper       from '../../js/swiper';
import Breakpoints  from 'breakpoints-js';
import scriptLoader from '../../js/scriptLoader';
import initGallery  from '../../js/initGallery';

const $items = $('.contacts__image');
if ($items.length) {
  initGallery({ $items });
}

const $times = $('.contacts__text--time');
if ($times.length) {
  const updateTimes = () => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    $times.each((i, el) => {
      const $el   = $(el);
      const gmt   = $el.data('gmt');
      const time  = new Date(utc + (3600000 * gmt));
      let hours   = time.getHours();
      let minutes = time.getMinutes();
      if (hours < 10) hours = '0' + hours;
      if (minutes < 10) minutes = '0' + minutes;

      $el.html(`${hours}:${minutes}`);
    });
    setTimeout(updateTimes, 1000);
  };
  updateTimes();
}

$('.contacts__gallery').each((i, el) => {
  let slider;
  const $el = $(el);

  const initSliders = () => {
    destroySlider();
    slider = new Swiper(el, {
      wrapperClass:      'contacts__gallery-items',
      slideClass:        'contacts__image',
      navigation:        {
        prevEl: $el.find('.contacts__arrow--left')[0],
        nextEl: $el.find('.contacts__arrow--right')[0],
      },
      touchEventsTarget: 'wrapper',
      slidesPerView:     1,
      spaceBetween:      20,
      loop:              true,
      speed:             400,
    });
  };

  const destroySlider = () => {
    if (slider) slider.destroy(true, true);
    slider = null;
  };

  Breakpoints.on('sm', 'enter', () => initSliders());
  Breakpoints.on('lg', 'enter', () => {
    destroySlider();
  });
});

const $maps = $('.contacts__map');

if ($maps.length) {
  scriptLoader(`https://maps.googleapis.com/maps/api/js?key=${window.MAP_API_KEY}`, () => {
    $maps.each((i, el) => {
      let { center, zoom } = el.dataset;

      try {
        center = JSON.parse(center);
        zoom   = +zoom;

        const map = new google.maps.Map(el, {
          zoom:                     zoom,
          center:                   new google.maps.LatLng(center[0], center[1]),
          // styles:                   mapStyles,
          mapTypeControl:           false,
          streetViewControl:        false,
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          }
        });

        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(center[0], center[1]),
          map:      map,
        });
      } catch (e) {
        console.log(e);
      }
    })
  });
}