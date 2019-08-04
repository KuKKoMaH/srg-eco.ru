import initGallery from '../../js/initGallery';

const $items = $('.licenses__item');
if ($items.length) {
  initGallery({ $items });
}
