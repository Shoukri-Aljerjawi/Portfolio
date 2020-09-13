$(document).ready(() => {
  // click on toggle meun
  $('.toggle-icon').click(() => {
    $('.nav').toggleClass('cllapse');
  });
  //fixed navBar when scroll down
  var hight = $('.banner').height();
  $(window).scroll(() => {
    if ($(this).scrollTop() > hight) {
      $('.nav').addClass('fixed');
    } else {
      $('.nav').removeClass('fixed');
    }
  });
});
