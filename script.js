document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".site-header__toggle");
  const drawerLinks = document.querySelectorAll(".site-header__drawer a");
  const navItems = document.querySelectorAll(".site-nav__item--has-menu");
  const yearEl = document.getElementById("current-year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (!header || !toggle) {
    return;
  }

  const closeMenu = () => {
    delete header.dataset.expanded;
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    header.dataset.expanded = "true";
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    const isExpanded = header.dataset.expanded === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.dataset.expanded === "true") {
      closeMenu();
    }
  });

  if (navItems.length) {
    const matchDesktop = window.matchMedia("(min-width: 1025px)");

    const closeAllMegaMenus = () => {
      navItems.forEach((item) => {
        const trigger = item.querySelector(".site-nav__trigger");
        if (!trigger) {
          return;
        }

        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      });
    };

    navItems.forEach((item) => {
      const trigger = item.querySelector(".site-nav__trigger");
      const menu = item.querySelector(".mega-menu");

      if (!trigger || !menu) {
        return;
      }

      const openMegaMenu = () => {
        closeAllMegaMenus();
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      };

      const closeMegaMenu = () => {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      };

      trigger.addEventListener("click", (event) => {
        if (!matchDesktop.matches) {
          return;
        }

        event.preventDefault();
        if (item.classList.contains("is-open")) {
          closeMegaMenu();
        } else {
          openMegaMenu();
        }
      });

      item.addEventListener("mouseenter", () => {
        if (matchDesktop.matches) {
          openMegaMenu();
        }
      });

      item.addEventListener("mouseleave", () => {
        if (matchDesktop.matches) {
          closeMegaMenu();
        }
      });

      item.addEventListener("focusout", (event) => {
        if (!matchDesktop.matches) {
          return;
        }

        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Element) || !item.contains(nextTarget)) {
          closeMegaMenu();
        }
      });

      trigger.addEventListener("focus", () => {
        if (matchDesktop.matches) {
          openMegaMenu();
        }
      });

      menu.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeMegaMenu();
          trigger.focus();
        }
      });

      trigger.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeMegaMenu();
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!matchDesktop.matches) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      if (!target.closest(".site-nav__item--has-menu")) {
        closeAllMegaMenus();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && matchDesktop.matches) {
        closeAllMegaMenus();
      }
    });

    const handleBreakpointChange = (event) => {
      if (!event.matches) {
        closeAllMegaMenus();
      }
    };

    if (typeof matchDesktop.addEventListener === "function") {
      matchDesktop.addEventListener("change", handleBreakpointChange);
    } else if (typeof matchDesktop.addListener === "function") {
      matchDesktop.addListener(handleBreakpointChange);
    }
  }
});
