// JavaScript para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navCenter = document.querySelector('.navcenter');
  const overlay = document.querySelector('.overlay');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navCenter.classList.toggle('active');
    overlay.classList.toggle('active');
  });
  
  overlay.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navCenter.classList.remove('active');
    this.classList.remove('active');
  });
  
  // Cerrar el menú al hacer clic en un enlace (para móviles)
  const navLinks = document.querySelectorAll('.navcenter a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        navCenter.classList.remove('active');
        overlay.classList.remove('active');
      }
    });
  });
});