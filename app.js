(function () {
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navClose = document.querySelector('[data-nav-close]');
  const navOverlay = document.querySelector('[data-nav-overlay]');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const header = document.querySelector('[data-header]');
  const revealItems = document.querySelectorAll('[data-reveal]');
  const yearEl = document.querySelector('[data-year]');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const toggleNav = (force) => {
    if (!nav) return;
    const wasOpen = nav.classList.contains('is-open');
    const isOpen = typeof force === 'boolean' ? force : !wasOpen;
    nav.classList.toggle('is-open', isOpen);
    navOverlay?.classList.toggle('is-visible', isOpen);
    navToggle?.classList.toggle('is-active', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    navToggle?.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      const focusableSelectors =
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
      const focusable = nav ? nav.querySelector(focusableSelectors) : null;
      if (focusable) {
        requestAnimationFrame(() => {
          focusable.focus();
        });
      }
    } else if (wasOpen) {
      requestAnimationFrame(() => {
        navToggle?.focus();
      });
    }
  };

  navToggle?.setAttribute('aria-haspopup', 'true');
  navToggle?.setAttribute('aria-expanded', 'false');

  navToggle?.addEventListener('click', () => {
    toggleNav();
  });

  navOverlay?.addEventListener('click', () => {
    toggleNav(false);
  });

  navClose?.addEventListener('click', () => {
    toggleNav(false);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (nav?.classList.contains('is-open')) {
        toggleNav(false);
      }
    });
  });

  const trapFocus = (event) => {
    if (!nav || !nav.classList.contains('is-open')) return;
    const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(nav.querySelectorAll(focusableSelectors)).filter((el) => !el.hasAttribute('disabled'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    } else if (event.key === 'Escape') {
      toggleNav(false);
      navToggle?.focus();
    }
  };

  document.addEventListener('keydown', trapFocus);

  const highlightNavLink = () => {
    const scrollPosition = window.scrollY + window.innerHeight * 0.25;
    let activeId = null;

    document.querySelectorAll('section[id]').forEach((section) => {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const id = href.replace('#', '');
      link.classList.toggle('is-active', id === activeId);
    });
  };

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  window.addEventListener('scroll', () => {
    setHeaderState();
    highlightNavLink();
  });
  setHeaderState();
  highlightNavLink();

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const smoothAnchorLinks = document.querySelectorAll('a[href^="#"]');
  smoothAnchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      target.focus?.({ preventScroll: true });
    });
  });
})();
