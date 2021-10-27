import autosize from "autosize/dist/autosize";

const $body = $('body');

autosize(document.querySelectorAll('.streamComments__textarea, .streamComments__responseMessage'));

$('.streamComments__textarea, .streamComments__responseMessage').on('click focus', ( e ) => {
  $(e.currentTarget)
    .parents('form')
    .find('.streamComments__formName')
    .slideDown();
});

window.SHOW_COMMENT_ACTIONS = ( e ) => {
  $(e.currentTarget)
    .parents('.streamComments__menu')
    .addClass('streamComments__menu--active');
};

$body.on('click', ( e ) => {
  const $target = $(e.target);
  if (!$target.closest('.streamComments__menu').length) {
    $('.streamComments__menu').removeClass('streamComments__menu--active');
  }
});
