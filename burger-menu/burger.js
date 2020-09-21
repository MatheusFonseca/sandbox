const showNav = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  // Adicionando efeito hover somente nos mouse
  // Referencia https://stackoverflow.com/questions/8291517/disable-hover-effects-on-mobile-browsers
  burger.addEventListener('mouseenter', () => {
    nav.classList.add('nav-hover');
  });

  burger.addEventListener('touchstart', () => {
    nav.classList.add('nav-hover');
  });

  burger.addEventListener('mouseleave', () => {
    nav.classList.remove('nav-hover');
  });

  burger.addEventListener('touchmove', () => {
    nav.classList.remove('nav-hover');
  });

  burger.addEventListener('click', () => {
    nav.classList.remove('nav-hover');
  });
};

showNav();
