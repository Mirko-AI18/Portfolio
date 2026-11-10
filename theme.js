(function () {
  var KEY = 'theme', root = document.documentElement, saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    var meta = document.querySelector('meta[name="theme-color"]');
    function sync() {
      var d = root.getAttribute('data-theme') === 'dark';
      if (btn) btn.setAttribute('aria-pressed', String(d));
      if (meta) meta.setAttribute('content', d ? '#18181B' : '#F4F4F5');
    }
    if (btn) btn.addEventListener('click', function () {
      var d = root.getAttribute('data-theme') !== 'dark';
      root.setAttribute('data-theme', d ? 'dark' : 'light');
      try { localStorage.setItem(KEY, d ? 'dark' : 'light'); } catch (e) {}
      sync();
    });
    sync();
  });
})();
