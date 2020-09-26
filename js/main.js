$(document).ready(() => {
  // click on toggle meun
  const navSlider = () => {
    const mainNav = document.querySelector('.nav-links');
    const navBarToggle = document.querySelector('.navbar-toggle');

    navBarToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mob-nav-active');
    });
  };
  navSlider();

  $('.nav-links a').on('click', function () {
    $('.nav-links').removeClass('mob-nav-active');
  });
});

var $navbar = $('.navbar');
var $links = $('nav li a');
$(window).scroll(function (event) {
  var $current = $(this).scrollTop();
  if ($current > 400) {
    $navbar.addClass('scroll');
    // $links.addClass('scroll');
  } else {
    $navbar.removeClass('scroll');
    $links.removeClass('scroll');
  }
});
