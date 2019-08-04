const $headers = $('.eventProgram__day');
const $tabs = $('.eventProgram__tab');
const activeHeaderClass = 'eventProgram__day--active';
const activeTabClass = 'eventProgram__tab--active';

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
