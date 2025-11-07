(function () {
  const header = document.querySelector('[data-header]');
  const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
  const drawer = document.querySelector('[data-drawer]');
  const drawerToggle = document.querySelector('[data-drawer-toggle]');
  const drawerCloseControls = document.querySelectorAll('[data-drawer-close]');
  const drawerPanel = drawer ? drawer.querySelector('.drawer__panel') : null;
  const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');
  const searchPanel = document.querySelector('[data-search]');
  const searchTrigger = document.querySelector('[data-search-trigger]');
  const searchCloseControls = document.querySelectorAll('[data-search-close]');
  const searchInput = document.getElementById('site-search');

  let activeDropdown = null;
  let lastFocusedElement = null;

  const isFocusable = (element) => {
    if (!element) return false;
    return !element.hasAttribute('disabled') && typeof element.focus === 'function';
  };

  const setHeaderElevation = () => {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add('is-elevated');
    } else {
      header.classList.remove('is-elevated');
    }
  };

  const closeDropdown = (trigger) => {
    if (!trigger) return;
    const item = trigger.closest('[data-dropdown]');
    if (!item) return;
    const menu = item.querySelector('[data-dropdown-menu]');
    trigger.setAttribute('aria-expanded', 'false');
    item.classList.remove('is-open');
    if (menu) {
      const items = menu.querySelectorAll('[role="menuitem"]');
      items.forEach((menuItem) => menuItem.setAttribute('tabindex', '-1'));
    }
    if (activeDropdown === trigger) {
      activeDropdown = null;
    }
  };

  const openDropdown = (trigger) => {
    if (!trigger) return;
    if (activeDropdown && activeDropdown !== trigger) {
      closeDropdown(activeDropdown);
    }
    const item = trigger.closest('[data-dropdown]');
    const menu = item ? item.querySelector('[data-dropdown-menu]') : null;
    if (!item || !menu) return;
    item.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    const menuItems = menu.querySelectorAll('[role="menuitem"]');
    menuItems.forEach((menuItem) => menuItem.setAttribute('tabindex', '0'));
    activeDropdown = trigger;
  };

  const focusFirstMenuItem = (trigger) => {
    const menu = trigger && trigger.closest('[data-dropdown]')?.querySelector('[data-dropdown-menu]');
    if (!menu) return;
    const items = menu.querySelectorAll('[role="menuitem"]');
    if (items.length) {
      items[0].focus();
    }
  };

  const focusLastMenuItem = (trigger) => {
    const menu = trigger && trigger.closest('[data-dropdown]')?.querySelector('[data-dropdown-menu]');
    if (!menu) return;
    const items = menu.querySelectorAll('[role="menuitem"]');
    if (items.length) {
      items[items.length - 1].focus();
    }
  };

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeDropdown(trigger);
      } else {
        openDropdown(trigger);
      }
    });

    trigger.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          openDropdown(trigger);
          focusFirstMenuItem(trigger);
          break;
        case 'ArrowUp':
          event.preventDefault();
          openDropdown(trigger);
          focusLastMenuItem(trigger);
          break;
        case 'Escape':
          closeDropdown(trigger);
          trigger.focus();
          break;
        default:
          break;
      }
    });

    const menu = trigger.closest('[data-dropdown]')?.querySelector('[data-dropdown-menu]');
    if (menu) {
      menu.addEventListener('keydown', (event) => {
        const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
        const currentIndex = menuItems.indexOf(document.activeElement);
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          const nextIndex = (currentIndex + 1) % menuItems.length;
          menuItems[nextIndex].focus();
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
          menuItems[prevIndex].focus();
        } else if (event.key === 'Home') {
          event.preventDefault();
          menuItems[0]?.focus();
        } else if (event.key === 'End') {
          event.preventDefault();
          menuItems[menuItems.length - 1]?.focus();
        } else if (event.key === 'Escape') {
          event.preventDefault();
          closeDropdown(trigger);
          trigger.focus();
        }
      });

      menu.querySelectorAll('[role="menuitem"]').forEach((item) => {
        item.addEventListener('click', () => {
          closeDropdown(trigger);
        });
      });
    }
  });

  document.addEventListener('click', (event) => {
    if (activeDropdown && !event.target.closest('[data-dropdown]')) {
      closeDropdown(activeDropdown);
    }
  });

  const closeAllDropdowns = () => {
    dropdownTriggers.forEach((trigger) => closeDropdown(trigger));
  };

  const getFocusableElements = (container) => {
    if (!container) return [];
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    return Array.from(container.querySelectorAll(selectors.join(','))).filter((el) => !el.hasAttribute('aria-hidden'));
  };

  const trapFocus = (event, container) => {
    if (event.key !== 'Tab') return;
    const focusables = getFocusableElements(container);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openDrawer = () => {
    if (!drawer || !drawerPanel) return;
    if (drawer.classList.contains('is-open')) return;
    lastFocusedElement = document.activeElement;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerToggle?.classList.add('is-active');
    drawerToggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    const focusables = getFocusableElements(drawerPanel);
    focusables[0]?.focus();
  };

  const closeDrawer = () => {
    if (!drawer || !drawerPanel) return;
    if (!drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    drawerToggle?.classList.remove('is-active');
    drawerToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    if (isFocusable(lastFocusedElement)) {
      lastFocusedElement.focus();
    }
  };

  drawerToggle?.addEventListener('click', () => {
    if (drawer?.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerCloseControls.forEach((control) => {
    control.addEventListener('click', () => {
      closeDrawer();
    });
  });

  drawer?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDrawer();
    }
    trapFocus(event, drawerPanel);
  });

  drawer?.addEventListener('click', (event) => {
    if (event.target === drawer) {
      closeDrawer();
    }
  });

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;
      trigger.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        panel.hidden = true;
      } else {
        panel.hidden = false;
      }
    });
  });

  const openSearch = () => {
    if (!searchPanel) return;
    if (searchPanel.classList.contains('is-open')) return;
    lastFocusedElement = document.activeElement;
    searchPanel.classList.add('is-open');
    searchPanel.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
      searchInput?.focus();
    }, 60);
  };

  const closeSearch = () => {
    if (!searchPanel) return;
    if (!searchPanel.classList.contains('is-open')) return;
    searchPanel.classList.remove('is-open');
    searchPanel.setAttribute('aria-hidden', 'true');
    if (isFocusable(lastFocusedElement)) {
      lastFocusedElement.focus();
    }
  };

  searchTrigger?.addEventListener('click', () => {
    if (searchPanel?.classList.contains('is-open')) {
      closeSearch();
    } else {
      openSearch();
    }
  });

  searchCloseControls.forEach((control) => {
    control.addEventListener('click', () => {
      closeSearch();
    });
  });

  searchPanel?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSearch();
    }
    trapFocus(event, searchPanel.querySelector('.search-panel__dialog'));
  });

  searchPanel?.addEventListener('click', (event) => {
    const dialog = searchPanel.querySelector('.search-panel__dialog');
    if (dialog && !dialog.contains(event.target)) {
      closeSearch();
    }
  });

  document.addEventListener('keydown', (event) => {
    const activeElement = document.activeElement;
    const isTyping = activeElement && ['INPUT', 'TEXTAREA'].includes(activeElement.tagName);
    if (event.key === '/' && !event.altKey && !event.ctrlKey && !event.metaKey) {
      if (!isTyping) {
        event.preventDefault();
        openSearch();
      }
    } else if (event.key === 'Escape') {
      if (searchPanel?.classList.contains('is-open')) {
        event.preventDefault();
        closeSearch();
      } else if (drawer?.classList.contains('is-open')) {
        event.preventDefault();
        closeDrawer();
      } else if (activeDropdown) {
        event.preventDefault();
        const trigger = activeDropdown;
        closeDropdown(trigger);
        trigger.focus();
      }
    }
  });

  window.addEventListener('scroll', setHeaderElevation, { passive: true });
  setHeaderElevation();
})();
