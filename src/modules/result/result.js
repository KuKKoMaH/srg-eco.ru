import initGallery from '../../js/initGallery';

const $items = $('.result__item');
if ($items.length) {
  initGallery({ $items });
}
