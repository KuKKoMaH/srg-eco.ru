$('.eventFormat__item').each((i, el) => {
  const $el = $(el);
  $el.find('.eventFormat__head').on('click', () => {
    $el.find('.eventFormat__body').css(
      'height',
      $el.hasClass('eventFormat__item--active')
        ? 0
        : $el.find('.eventFormat__content').outerHeight()
    );
    $el.toggleClass('eventFormat__item--active');
  });
});
