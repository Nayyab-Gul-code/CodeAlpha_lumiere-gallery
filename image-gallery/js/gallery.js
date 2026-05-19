/**
 * LUMIÈRE GALLERY — JavaScript
 * Features: Category filter, Lightbox (prev/next/keyboard), CSS FX filter
 */

(function () {
  'use strict';

  /* ── DATA ────────────────────────────────── */
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  const grid  = document.getElementById('galleryGrid');

  const lightbox   = document.getElementById('lightbox');
  const lbBackdrop = document.getElementById('lightboxBackdrop');
  const lbClose    = document.getElementById('lbClose');
  const lbPrev     = document.getElementById('lbPrev');
  const lbNext     = document.getElementById('lbNext');
  const lbImage    = document.getElementById('lbImage');
  const lbLoader   = document.getElementById('lbLoader');
  const lbTag      = document.getElementById('lbTag');
  const lbTitle    = document.getElementById('lbTitle');
  const lbSub      = document.getElementById('lbSub');
  const lbCounter  = document.getElementById('lbCounter');

  let currentIndex    = 0;
  let visibleItems    = [...items];
  let activeCategory  = 'all';

  /* ── HELPERS ─────────────────────────────── */

  function getVisibleItems() {
    return items.filter(el => !el.classList.contains('hidden'));
  }

  function getItemData(el) {
    return {
      src:      el.querySelector('img').src,
      alt:      el.querySelector('img').alt,
      tag:      el.dataset.category,
      title:    el.querySelector('h3')?.textContent || '',
      subtitle: el.querySelector('p')?.textContent  || '',
    };
  }

  /* ── CATEGORY FILTER ─────────────────────── */

  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      activeCategory = filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        if (match) {
          item.classList.remove('hidden');
          item.classList.add('fade-in');
          item.addEventListener('animationend', () => item.classList.remove('fade-in'), { once: true });
        } else {
          item.classList.add('hidden');
        }
      });

      visibleItems = getVisibleItems();
    });
  });

  /* ── LIGHTBOX OPEN ───────────────────────── */

  function openLightbox(itemEl) {
    visibleItems = getVisibleItems();
    const visibleIndex = visibleItems.indexOf(itemEl);
    if (visibleIndex === -1) return;
    currentIndex = visibleIndex;
    showSlide(currentIndex);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbImage.focus?.();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lbImage.src = '';
  }

  function showSlide(idx) {
    visibleItems = getVisibleItems();
    if (!visibleItems.length) return;

    currentIndex = (idx + visibleItems.length) % visibleItems.length;
    const data = getItemData(visibleItems[currentIndex]);

    // loader
    lbLoader.classList.add('active');
    lbImage.classList.add('loading');

    const tmpImg = new Image();
    tmpImg.onload = () => {
      lbImage.src  = tmpImg.src;
      lbImage.alt  = data.alt;
      lbImage.classList.remove('loading');
      lbLoader.classList.remove('active');
    };
    tmpImg.onerror = () => {
      lbImage.src = data.src;
      lbImage.classList.remove('loading');
      lbLoader.classList.remove('active');
    };
    tmpImg.src = data.src;

    // caption
    lbTag.textContent     = data.tag.charAt(0).toUpperCase() + data.tag.slice(1);
    lbTitle.textContent   = data.title;
    lbSub.textContent     = data.subtitle;
    lbCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
  }

  // Attach open triggers
  items.forEach(item => {
    item.addEventListener('click', () => openLightbox(item));
  });

  // Close triggers
  lbClose.addEventListener('click', closeLightbox);
  lbBackdrop.addEventListener('click', closeLightbox);

  // Prev / Next
  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); showSlide(currentIndex - 1); });
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); showSlide(currentIndex + 1); });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showSlide(currentIndex - 1);
    if (e.key === 'ArrowRight')  showSlide(currentIndex + 1);
  });

  // Touch / swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? showSlide(currentIndex + 1) : showSlide(currentIndex - 1);
    }
  });

  /* ── CSS IMAGE FILTERS ───────────────────── */

  const fxBtns = document.querySelectorAll('.fx-btn');

  fxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const fx = btn.dataset.fx;
      fxBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Remove all fx classes
      grid.classList.remove('fx-grayscale', 'fx-sepia', 'fx-saturate', 'fx-invert');
      if (fx !== 'none') grid.classList.add('fx-' + fx);
    });
  });

  /* ── INTERSECTION OBSERVER (lazy reveal) ─── */

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(24px)';
      item.style.transition = `opacity 0.55s ease ${i * 0.05}s, transform 0.55s ease ${i * 0.05}s`;
      observer.observe(item);
    });
  }

})();
