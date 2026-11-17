(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js');
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const stored = (() => { try { return localStorage.getItem('new92-theme'); } catch { return null; } })();
  if (stored === 'light' || stored === 'dark') root.dataset.theme = stored;
  function updateThemeLabel() {
    if (!themeButton) return;
    const dark = root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    themeButton.setAttribute('aria-label', dark ? 'Switch to light appearance' : 'Switch to dark appearance');
    themeButton.setAttribute('title', dark ? 'Light appearance' : 'Dark appearance');
    themeButton.setAttribute('aria-pressed', String(dark));
  }
  themeButton?.addEventListener('click', () => {
    const currentDark = root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    root.dataset.theme = currentDark ? 'light' : 'dark';
    try { localStorage.setItem('new92-theme', root.dataset.theme); } catch {}
    updateThemeLabel();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', updateThemeLabel);
  updateThemeLabel();
  function closeMenu() {
    menu?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation menu');
  }
  menuButton?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(!!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', (event) => {
    if (menu?.classList.contains('is-open') && !event.target.closest('.site-nav')) closeMenu();
  });
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); instance.unobserve(entry.target); } });
    }, { threshold: .05, rootMargin: '0px 0px -22px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
  } else document.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('revealed'));
})();
