(function () {
  'use strict';

  // ==================== CONFIGURATION ====================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const config = {
    scrollThreshold: 0.2,
    parallaxDepth: 0.5,
    animationDuration: 0.6,
    debounceDelay: 50,
    scrolledClass: 'is-scrolled',
    activeClass: 'is-active',
    visibleClass: 'is-visible',
    openClass: 'is-open',
  };

  // ==================== DOM ELEMENTS ====================
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navClose = document.querySelector('[data-nav-close]');
  const navOverlay = document.querySelector('[data-nav-overlay]');
  const navLinks = document.querySelectorAll('[data-nav-link]');
  const revealItems = document.querySelectorAll('[data-reveal]');
  const yearEl = document.querySelector('[data-year]');
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  const hoverElements = document.querySelectorAll('[data-hover-glow]');

  // ==================== UTILITY FUNCTIONS ====================
  
  /**
   * Debounce function to optimize scroll/resize events
   */
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  /**
   * Get scroll position accounting for different browsers
   */
  const getScrollPosition = () => window.scrollY || document.documentElement.scrollTop;

  /**
   * Check if element is in viewport
   */
  const isInViewport = (element, offset = 0) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight - offset) && rect.bottom >= 0;
  };

  // ==================== HEADER INTERACTIONS ====================

  /**
   * Handle header scroll state
   */
  const updateHeaderState = () => {
    if (!header) return;
    const isScrolled = getScrollPosition() > 12;
    header.classList.toggle(config.scrolledClass, isScrolled);
    
    // Add shadow effect on scroll
    if (isScrolled) {
      header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  };

  /**
   * Highlight active navigation link based on scroll position
   */
  const highlightNavLink = () => {
    if (navLinks.length === 0) return;
    
    const scrollPosition = getScrollPosition() + window.innerHeight * 0.25;
    let activeId = null;

    document.querySelectorAll('section[id]').forEach((section) => {
      if (scrollPosition >= section.offsetTop && 
          scrollPosition < section.offsetTop + section.offsetHeight) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const id = href.replace('#', '');
      const isActive = id === activeId;
      link.classList.toggle(config.activeClass, isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  };

  // ==================== NAVIGATION TOGGLE ====================

  /**
   * Toggle navigation menu
   */
  const toggleNav = (force) => {
    if (!nav) return;
    const wasOpen = nav.classList.contains(config.openClass);
    const isOpen = typeof force === 'boolean' ? force : !wasOpen;
    
    nav.classList.toggle(config.openClass, isOpen);
    navOverlay?.classList.toggle(config.visibleClass, isOpen);
    navToggle?.classList.toggle(config.activeClass, isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    
    navToggle?.setAttribute('aria-expanded', String(isOpen));

    // Focus management
    if (isOpen) {
      const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
      const focusable = nav?.querySelector(focusableSelectors);
      if (focusable) {
        requestAnimationFrame(() => focusable.focus());
      }
    } else if (wasOpen) {
      requestAnimationFrame(() => navToggle?.focus());
    }
  };

  /**
   * Set up navigation toggle listeners
   */
  const setupNavToggle = () => {
    navToggle?.setAttribute('aria-haspopup', 'true');
    navToggle?.setAttribute('aria-expanded', 'false');

    navToggle?.addEventListener('click', () => toggleNav());
    navOverlay?.addEventListener('click', () => toggleNav(false));
    navClose?.addEventListener('click', () => toggleNav(false));
  }; 

  /**
   * Handle navigation link clicks
   */
  const setupNavLinks = () => {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (nav?.classList.contains(config.openClass)) {
          toggleNav(false);
        }
      });
    });
  };

  /**
   * Trap focus within navigation when open
   */
  const trapFocus = (event) => {
    if (!nav || !nav.classList.contains(config.openClass)) return;
    
    const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(nav.querySelectorAll(focusableSelectors))
      .filter((el) => !el.hasAttribute('disabled'));
    
    if (focusable.length === 0) return;

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

  // ==================== SCROLL ANIMATIONS ====================

  /**
   * Reveal elements on scroll using Intersection Observer
   */
  const setupScrollReveal = () => {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add(config.visibleClass));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0;
            setTimeout(() => {
              entry.target.classList.add(config.visibleClass);
              observer.unobserve(entry.target);
            }, delay);
          }
        });
      },
      { threshold: config.scrollThreshold }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  /**
   * Parallax scroll effect
   */
  const handleParallax = () => {
    if (prefersReducedMotion || parallaxElements.length === 0) return;

    const scrollPos = getScrollPosition();
    
    parallaxElements.forEach((element) => {
      const depth = parseFloat(element.dataset.parallax) || config.parallaxDepth;
      const movement = scrollPos * depth;
      element.style.transform = `translateY(${movement}px)`;
    });
  };

  /**
   * Stagger animation for elements
   */
  const setupStaggerAnimation = () => {
    const staggerElements = document.querySelectorAll('[data-stagger]');
    staggerElements.forEach((element, index) => {
      const delay = (index * 100) / 1000;
      element.style.setProperty('--stagger-delay', `${delay}s`);
    });
  };

  // ==================== HOVER EFFECTS ====================

  /**
   * Mouse tracking for dynamic glow effects
   */
  const setupMouseTracking = () => {
    if (hoverElements.length === 0) return;

    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      hoverElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementX = rect.left + rect.width / 2;
        const elementY = rect.top + rect.height / 2;

        const distX = mouseX - elementX;
        const distY = mouseY - elementY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 200) {
          const angle = Math.atan2(distY, distX);
          const x = Math.cos(angle) * Math.min(distance / 20, 10);
          const y = Math.sin(angle) * Math.min(distance / 20, 10);
          
          element.style.setProperty('--mouse-x', `${50 + x}%`);
          element.style.setProperty('--mouse-y', `${50 + y}%`);
        }
      });
    });
  };

  /**
   * Setup hover state animations
   */
  const setupHoverAnimations = () => {
    const interactiveElements = document.querySelectorAll('[data-interactive]');
    
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', function () {
        this.classList.add('hover-active');
      });

      element.addEventListener('mouseleave', function () {
        this.classList.remove('hover-active');
      });
    });
  };

  // ==================== TOUCH INTERACTIONS ====================

  /**
   * Setup touch interaction support
   */
  const setupTouchInteractions = () => {
    const touchElements = document.querySelectorAll('[data-touch-active]');
    
    touchElements.forEach((element) => {
      element.addEventListener('touchstart', function () {
        this.classList.add('touch-active');
      });

      element.addEventListener('touchend', function () {
        setTimeout(() => this.classList.remove('touch-active'), 200);
      });
    });
  };

  // ==================== SMOOTH SCROLLING ====================

  /**
   * Handle smooth anchor link scrolling
   */
  const setupSmoothAnchors = () => {
    const smoothAnchorLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothAnchorLinks.forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#' || targetId.length <= 1) return;
        
        const target = document.querySelector(targetId);
        if (!target) return;
        
        event.preventDefault();
        target.scrollIntoView({ 
          behavior: prefersReducedMotion ? 'auto' : 'smooth', 
          block: 'start' 
        });
        target.focus?.({ preventScroll: true });
      });
    });
  };

  // ==================== PERFORMANCE OPTIMIZATION ====================

  /**
   * Optimized scroll event handler with debounce
   */
  const debouncedScroll = debounce(() => {
    updateHeaderState();
    highlightNavLink();
    handleParallax();
  }, config.debounceDelay);

  // ==================== UTILITIES ====================

  /**
   * Set current year in footer
   */
  const setCurrentYear = () => {
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  };

  /**
   * Log initialization (development only)
   */
  const logInit = () => {
    if (!window.location.hostname.includes('localhost')) return;
    console.log('✨ NgocTay.io - Enhanced Interactions Initialized');
  };

  // ==================== INITIALIZATION ====================

  const init = () => {
    setupNavToggle();
    setupNavLinks();
    document.addEventListener('keydown', trapFocus);

    if (!prefersReducedMotion) {
      setupScrollReveal();
      setupStaggerAnimation();
      setupMouseTracking();
      setupHoverAnimations();
      setupTouchInteractions();
    }

    setupSmoothAnchors();

    setCurrentYear();
    updateHeaderState();
    highlightNavLink();

    window.addEventListener('scroll', debouncedScroll);
    window.addEventListener('resize', debounce(updateHeaderState, 150));

    logInit();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();