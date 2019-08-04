$('.faq__item').each((i, el) => {
  const $el = $(el);
  $el.find('.faq__head').on('click', () => {
    $el.find('.faq__body').css(
      'height',
      $el.hasClass('faq__item--active')
        ? 0
        : $el.find('.faq__content').outerHeight()
    );
    $el.toggleClass('faq__item--active');
  });
});
