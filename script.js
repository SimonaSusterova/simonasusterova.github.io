window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('#menu-toggle');
  const menu = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');

      // Změní ikonu podle stavu menu
      toggle.textContent = menu.classList.contains('active') ? '✖' : '☰';
    });

    // Zavře menu a vrátí ikonu při kliknutí na odkaz
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.textContent = '☰';
      });
    });
  }
});
