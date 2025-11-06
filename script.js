document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".nt-header");
  const toggle = document.querySelector(".nt-header__toggle");
  const drawer = document.querySelector(".nt-drawer");
  const drawerLinks = document.querySelectorAll(".nt-drawer a");
  const navItems = document.querySelectorAll(".nt-nav__item--has-panel");
  const yearEl = document.getElementById("current-year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (!header || !toggle || !drawer) {
    return;
  }

  const closeMenu = () => {
    drawer.removeAttribute("data-open");
    if (header.dataset.state === "drawer") {
      header.dataset.state = "idle";
    }
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    drawer.setAttribute("data-open", "true");
    header.dataset.state = "drawer";
    toggle.setAttribute("aria-expanded", "true");
  };

  const matchMobile = window.matchMedia("(max-width: 1024px)");

  const handleMobileChange = (event) => {
    if (!event.matches) {
      closeMenu();
    }
  };

  if (typeof matchMobile.addEventListener === "function") {
    matchMobile.addEventListener("change", handleMobileChange);
  } else if (typeof matchMobile.addListener === "function") {
    matchMobile.addListener(handleMobileChange);
  }

  toggle.addEventListener("click", () => {
    const isExpanded = drawer.getAttribute("data-open") === "true";
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
    if (event.key === "Escape" && drawer.getAttribute("data-open") === "true") {
      closeMenu();
    }
  });

  if (navItems.length) {
    const matchDesktop = window.matchMedia("(min-width: 1025px)");

    const updateMegaState = () => {
      const anyOpen = Array.from(navItems).some((navItem) => navItem.classList.contains("is-open"));
      if (anyOpen) {
        header.dataset.state = "panel";
      } else if (header.dataset.state === "panel") {
        header.dataset.state = "idle";
      }
    };

    const closeAllMegaMenus = () => {
      navItems.forEach((item) => {
        const trigger = item.querySelector(".nt-nav__trigger");
        if (!trigger) {
          return;
        }

        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      });
      updateMegaState();
    };

    navItems.forEach((item) => {
      const trigger = item.querySelector(".nt-nav__trigger");
      const menu = item.querySelector(".nt-nav__panel");

      if (!trigger || !menu) {
        return;
      }

      const openMegaMenu = () => {
        closeAllMegaMenus();
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        updateMegaState();
      };

      const closeMegaMenu = () => {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        updateMegaState();
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

      if (!target.closest(".nt-nav__item--has-panel")) {
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
