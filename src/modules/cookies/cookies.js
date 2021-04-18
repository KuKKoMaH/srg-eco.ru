const { cookieAccepted } = localStorage;
if (!cookieAccepted) {
  $('.cookies').addClass('cookies__active');
}

$('.cookies__button').on('click', () => {
  $('.cookies').removeClass('cookies__active');
  localStorage.cookieAccepted = true;
});
