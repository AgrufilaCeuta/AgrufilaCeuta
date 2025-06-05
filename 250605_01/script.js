window.addEventListener('scroll', function() {
    const navbarTop = document.getElementById('navbarTop');
    const navbarBottom = document.getElementById('navbarBottom');
    if (window.scrollY > 50) {
      navbarTop.style.top = '-50px'; // Ocultar la barra azul
      navbarBottom.classList.add('scrolled'); // Aplicar estilo para la barra blanca
    } else {
      navbarTop.style.top = '0'; // Mostrar la barra azul
      navbarBottom.classList.remove('scrolled'); // Quitar estilo para la barra blanca
    }
  });