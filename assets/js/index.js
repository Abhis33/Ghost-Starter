import "../css/index.css";

document.querySelector('.js-mobile-menu')?.addEventListener('click', () => {
  document.querySelector('.mobile-nav')?.classList.toggle('hidden');
});
