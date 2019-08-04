import scriptLoader from '../../js/scriptLoader';

const $map = $("#eventMap");
if ($map.length) {
    scriptLoader(`https://maps.googleapis.com/maps/api/js?key=${window.MAP_API_KEY}`, () => {
        const el = $map[0];
        let {center, zoom} = el.dataset;

        try {
            center = JSON.parse(center);
            zoom = +zoom;

            const map = new google.maps.Map(el, {
                zoom: zoom,
                center: new google.maps.LatLng(center[0], center[1]),
                // styles:                   mapStyles,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                }
            });

            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(center[0], center[1]),
                map: map,
            });
        } catch (e) {
            console.log(e);
        }
    });
}

