const itemClassName = 'questions__item';
const activeClassName = 'questions__item--active';
const bodyClassName = 'questions__answer';
const contentClassName = 'questions__inner';

$('.questions__question').on('click', ( e ) => {
  const $prevActiveItem = $('.' + activeClassName);
  const $prevActiveBody = $prevActiveItem.find('.' + bodyClassName);
  const $prevActiveContent = $prevActiveItem.find('.' + contentClassName);

  const $newActiveItem = $(e.currentTarget).parents('.' + itemClassName);
  const $newActiveBody = $newActiveItem.find('.' + bodyClassName);
  const $newActiveContent = $newActiveItem.find('.' + contentClassName);

  $prevActiveBody.css('maxHeight', $prevActiveContent.outerHeight());
  $prevActiveItem.removeClass(activeClassName);

  if ($prevActiveBody[0] !== $newActiveBody[0]) {
    $newActiveBody.css('maxHeight', $newActiveContent.outerHeight());
    $newActiveItem.addClass(activeClassName);

    $newActiveBody.one('transitionend', ( e ) => {
      $newActiveBody.css('maxHeight', '');
    });
  }

  requestAnimationFrame(() => {
    $prevActiveBody.css('maxHeight', '');
  });
});
