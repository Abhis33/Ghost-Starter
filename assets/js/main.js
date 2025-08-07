(function () {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  }
  window.addEventListener('scroll', function () {
    const header = document.getElementById('site-header');
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('bg-warm-black/95','backdrop-blur-md','shadow-elegant');
    } else {
      header.classList.remove('bg-warm-black/95','backdrop-blur-md','shadow-elegant');
    }
  });
})();
