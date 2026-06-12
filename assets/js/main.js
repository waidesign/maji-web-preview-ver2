/* =========================================================
   MAJI WELLNESS — Main JavaScript
   Premium Recovery Oasis · Phuket, Thailand
   ========================================================= */

(function () {
  'use strict';

  /* ---- Mobile Navigation ---- */
  const hamburger   = document.querySelector('.nav__hamburger');
  const mobileNav   = document.querySelector('.nav__mobile');
  const mobileClose = document.querySelector('.nav__mobile-close');
  const nav         = document.querySelector('.nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      hamburger.setAttribute('aria-expanded', 'true');
    });

    const closeMenu = () => {
      mobileNav.classList.remove('is-open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    };

    if (mobileClose) mobileClose.addEventListener('click', closeMenu);

    mobileNav.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', closeMenu)
    );

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---- Nav Scroll State ---- */
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Accordion ---- */
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const body   = trigger.nextElementSibling;
      const icon   = trigger.querySelector('.accordion__icon');
      const isOpen = body.classList.contains('is-open');

      document.querySelectorAll('.accordion__body').forEach(b => b.classList.remove('is-open'));
      document.querySelectorAll('.accordion__icon').forEach(i => { i.textContent = '+'; });

      if (!isOpen) {
        body.classList.add('is-open');
        if (icon) icon.textContent = '−';
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ---- Scroll Reveal ---- */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* ---- Analytics Helper ---- */
  window.majiTrack = function (eventName, properties) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, properties);
    }
    if (typeof analytics !== 'undefined' && typeof analytics.track === 'function') {
      analytics.track(eventName, properties);
    }
  };

  document.querySelectorAll('[data-analytics-event]').forEach(el => {
    el.addEventListener('click', function () {
      const event = this.getAttribute('data-analytics-event');
      const label = this.getAttribute('data-analytics-label') || this.innerText.trim();
      window.majiTrack(event, {
        label,
        page_path: window.location.pathname,
        timestamp: new Date().toISOString(),
      });
    });
  });

  /* ---- Smooth Anchor Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Active Nav Link ---- */
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && path.includes(href) && href !== '/' && href !== '../' && href !== '../../') {
      link.style.borderBottom = '1px solid currentColor';
      link.style.paddingBottom = '2px';
    }
  });

})();
