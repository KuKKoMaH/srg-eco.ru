const $years = $('.history__year');
const $sliders = $('.history__slider');
const activeYearClass = 'history__year--active';
const activeSliderClass = 'history__slider--active';

function activate(year) {
  $years.removeClass(activeYearClass);
  $sliders.removeClass(activeSliderClass);
  $years.filter('[data-year=' + year + ']').addClass(activeYearClass);
  $sliders.filter('[data-year=' + year + ']').addClass(activeSliderClass);
}

$years.on('click', function () {
  const $el = $(this);
  activate($el.data('year'));
});

activate($years.last().data('year'));