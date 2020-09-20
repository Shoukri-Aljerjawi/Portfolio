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
