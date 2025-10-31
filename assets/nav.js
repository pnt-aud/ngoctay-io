(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.getElementById('primary-navigation');
  if (!navToggle || !navigation) {
    return;
  }

  const closeMenu = () => {
    navigation.dataset.open = 'false';
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navigation.dataset.open === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      navigation.dataset.open = 'true';
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    }
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.dataset.open === 'true') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
})();
