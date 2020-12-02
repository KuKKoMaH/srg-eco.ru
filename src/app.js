import 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'jquery.maskedinput/src/jquery.maskedinput';
import SmoothScroll from 'smooth-scroll';
import 'selectize';
import 'mark.js/dist/jquery.mark.min';

import './js/init';
import './modules/header/header';
import './modules/frontSlider/frontSlider';
import './modules/relatedEvents/relatedEvents';
import './modules/slider/slider';
import './modules/history/history';
import './modules/team/team';
import './modules/clientsList/clientsList';
import './modules/eventsList/eventsList';
// import './modules/clientsMap/clientsMap';
import './modules/eventsCalendar/eventsCalendar';
import './modules/cardsList/cardsList';
import './modules/eventProgram/eventProgram';
import './modules/eventFormat/eventFormat';
import './modules/eventStream/eventStream';
import './modules/eventMap/eventMap';
import './modules/contacts/contacts';
import './modules/fines/fines';
import './modules/clientsSlider/clientsSlider';
import './modules/faq/faq';
import './modules/licenses/licenses';
import './modules/result/result';
import './modules/clientCard/clientCard';

$('select').selectize({
  maxItems: 1,
});

$('input[type="tel"]').mask("+7 (999) 999-99-99");

$('.popup__opener').on('click', ( e ) => {
  e.preventDefault();
  e.stopPropagation();
  $.magnificPopup.open({ type: 'inline', items: { src: $(e.delegateTarget).attr('href') } });
  return false;
});

// window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container', });
window.smoothscroll = new SmoothScroll('a[href*="#"]:not([class*="elementor"])', { header: '.header__container' });

window.showThanks = ( text ) => {
  $('#thanks-popup .form__thank').html(text);
  $.magnificPopup.open({ type: 'inline', items: { src: '#thanks-popup' } });
};

const $searchContainer = $('.w');
if (window.SEARCH_TERM && $searchContainer.length) {
  $searchContainer.mark(window.SEARCH_TERM);
}

$('.toTop').on('click', () => {
  window.smoothscroll.animateScroll(0);
});

$('.program').each(( i, el ) => {
  const $program = $(el);
  const $headers = $program.find('.program__header');
  const $bodies = $program.find('.program__body');
  $headers.on('click', ( e ) => {
    const index = $(e.delegateTarget).index();
    $headers.removeClass('program__header--active');
    $headers.eq(index).addClass('program__header--active');
    $bodies.removeClass('program__body--active');
    $bodies.eq(index).addClass('program__body--active');
  });
});

$('.program__item').each(( i, el ) => {
  const $el = $(el);
  $el.find('.program__head').on('click', () => {
    $el.find('.program__text').css(
      'height',
      $el.hasClass('program__item--active')
        ? 0
        : $el.find('.program__inner').outerHeight(),
    );
    $el.toggleClass('program__item--active');
  });
});
