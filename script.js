document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".site-header__toggle");
  const drawerLinks = document.querySelectorAll(".site-header__drawer a");
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

});
