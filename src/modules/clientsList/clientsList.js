const activeHClass = 'clientsCard__h--active';

const initClientCard = ($el) => {
  if ($el.data('inited')) return;
  $el.find('.clientsCard__h').on('click', (e) => {
    const $h = $(e.delegateTarget);
    const $p = $h.next();
    if ($h.hasClass(activeHClass)) {
      $h.removeClass(activeHClass);
      $p.css('max-height', '0');
    } else {
      $h.addClass(activeHClass);
      $p.css('max-height', $p.find('.clientsCard__p-inner').outerHeight());
    }
  });
  $el.data('inited', true);
};

window.openClientCard = (href) => {
  const $el = $(href);

  const $image = $el.find('.clientsCard__image');
  const bg = $image.data('image');
  if (bg) {
    $image.data('image', null);
    $image.css('background-image', `url(${bg})`);
    initClientCard($el);
  }

  $.magnificPopup.open({ type: 'inline', items: { src: href } });
};

$('.clientsCard__body').each((i, el) => {
  initClientCard($(el));
});
