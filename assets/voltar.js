/* Botão flutuante "Todos os applets": volta para o índice do repositório.
   Inclua em cada applet, antes de </body>:
   <script src="../../assets/voltar.js" defer></script> */
(function () {
  var me = document.currentScript;
  var href = me ? new URL('../index.html', me.src).href : '../../index.html';
  var a = document.createElement('a');
  a.href = href;
  a.textContent = '← Todos os applets';
  a.setAttribute('aria-label', 'Voltar para a lista de applets');
  a.style.cssText = [
    'position:fixed', 'left:12px', 'bottom:calc(12px + env(safe-area-inset-bottom,0px))',
    'z-index:2147483000', 'padding:8px 14px', 'border-radius:999px',
    'font:600 14px/1.2 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif',
    'text-decoration:none', 'color:#fff', 'background:rgba(27,42,71,.88)',
    'box-shadow:0 2px 10px rgba(0,0,0,.25)', 'backdrop-filter:blur(4px)'
  ].join(';');
  a.addEventListener('mouseenter', function () { a.style.background = 'rgba(27,42,71,1)'; });
  a.addEventListener('mouseleave', function () { a.style.background = 'rgba(27,42,71,.88)'; });
  document.body.appendChild(a);
})();
