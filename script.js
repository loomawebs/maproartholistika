document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn-menu');
  const nav = document.getElementById('nav-links');
  const icon = btn.querySelector('i');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('open');

    // Cambia ícono hamburguesa ↔ cruz
    if (btn.classList.contains('open')) {
      icon.classList.replace('fa-bars', 'fa-times');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Cierra el menú al hacer click en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.classList.remove('open');
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });
  });
});
