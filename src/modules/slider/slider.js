import {tns} from "tiny-slider/src/tiny-slider";

function initSlider(container) {
    const $container = $(container);
    let responsive;
    try {
        responsive = JSON.parse(container.dataset.slider);
    } catch (e) {
        responsive = undefined;
    }


    tns({
        container: $container.find('.slider__slides')[0],
        prevButton: $container.find('.slider__arrow--left')[0],
        nextButton: $container.find('.slider__arrow--right')[0],
        items: 1,
        swipeAngle: false,
        speed: 400,
        nav: false,
        gutter: 20,
        // "autoHeight": true,
        responsive
    });
}

export default initSlider;

$('.slider').each((index, container) => initSlider(container));
