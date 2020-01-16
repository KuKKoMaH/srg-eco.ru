import scriptLoader from '../../js/scriptLoader';

const $map = $("#eventMap");
if ($map.length) {
  scriptLoader(`https://api-maps.yandex.ru/2.1/?lang=ru_RU`, () => {
    ymaps.ready(() => {
      const el = $map[0];
      let { center, zoom, address } = el.dataset;

      try {
        center = JSON.parse(center);
        zoom = +zoom;


        const myMap = new ymaps.Map(el, {
          center:   center,
          controls: ['fullscreenControl', 'zoomControl'],
          zoom:     zoom,
        });

        myMap.geoObjects.add(new ymaps.Placemark(center, { balloonContent: address }));

      } catch (e) {
        console.log(e);
      }
    });
  });
}

