import scriptLoader from '../../js/scriptLoader';
import mapStyles from '../../js/mapStyles';

const $map = $("#map");
if ($map.length) {
    scriptLoader(`https://maps.googleapis.com/maps/api/js?key=${window.MAP_API_KEY}`, () => {
        const map = new google.maps.Map($map[0], {
            zoom: 10,
            center: new google.maps.LatLng(55.755814, 37.617635),
            styles: mapStyles,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        });
        if (window.ON_MAP_READY) window.ON_MAP_READY(map);
    });
}
