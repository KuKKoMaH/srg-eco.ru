$('.services').each(( i, el ) => {
  const $services = $(el);
  const $headers = $services.find('.services__header');

  $headers.on('click', ( e ) => {
    const { category } = e.delegateTarget.dataset;
    $headers.removeClass('services__header--active');
    $(e.delegateTarget).addClass('services__header--active');
    if (category === 'all') {
      $services.find('.services__item').show();
    } else {
      $services.find('.services__item').hide();
      $services.find(`[data-category="${category}"]`).show();
    }
  });

  $services.find('.services__button').on('click', () => {
    $services.find('.services__menu').toggleClass('services__menu--active');
  });
});
