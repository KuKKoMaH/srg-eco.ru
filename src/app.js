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
import './modules/clientsMap/clientsMap';
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

$('.popup__opener').on('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  $.magnificPopup.open({ type: 'inline', items: { src: $(e.delegateTarget).attr('href') } });
  return false;
});

window.smoothscroll = new SmoothScroll('a[href*="#"]', { header: '.header__container', });

window.showThanks = (text) => {
  $('#thanks-popup .form__thank').html(text);
  $.magnificPopup.open({ type: 'inline', items: { src: '#thanks-popup' } });
};

const $searchContainer = $('.w');
if($searchContainer.length) {
  $searchContainer.mark(window.SEARCH_TERM);

}
