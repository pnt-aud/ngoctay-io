<!-- /assets/nav.js -->
<script>
  (function(){
    const btn = document.querySelector('.nav-toggle');
    const menu = document.getElementById('primary-navigation');
    if(!btn || !menu) return;
    btn.addEventListener('click', ()=>{
      const open = menu.getAttribute('data-open') === 'true';
      menu.setAttribute('data-open', String(!open));
      btn.setAttribute('aria-expanded', String(!open));
    });
  })();
</script>
