const $headers = $('.team__title');
const $tabs = $('.team__tab');
const activeHeaderClass = 'team__title--active';
const activeTabClass = 'team__tab--active';

function activate(index) {
  $headers.removeClass(activeHeaderClass);
  $tabs.removeClass(activeTabClass);
  $headers.eq(index).addClass(activeHeaderClass);
  $tabs.eq(index).addClass(activeTabClass);
}

$headers.on('click', function () {
  const $el = $(this);
  activate($el.index());
});
