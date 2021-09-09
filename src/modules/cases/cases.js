const activeItemClass = 'cases__item--active';

$('.cases').each(( i, el ) => {
  const $el = $(el);
  const $headers = $el.find('.cases__header');
  const $items = $el.find('.cases__item');
  const $container = $el.find('.cases__items');

  function activate( index ) {
    $items.removeClass(activeItemClass);
    $items.eq(index).addClass(activeItemClass);
  }

  $headers.on('click', function () {
    const $el = $(this).parents('.cases__item');
    activate($el.index());
    updateHeight();
  });

  const updateHeight = () => {
    $container.css('min-height', $el.find(`.${activeItemClass} .cases__content`)[0].clientHeight);
  }
  updateHeight();
  $(window).on('resize', updateHeight);
});
