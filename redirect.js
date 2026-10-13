// finalsheet.app sends every visitor to the FinalSheet pages on moxieappdesign.com, keeping the path:
//   /            -> /finalsheet/
//   /apply       -> /finalsheet/early-access.html   (short link for posts and bios)
//   /privacy     -> /finalsheet/privacy.html
//   /support     -> /finalsheet/support.html
//   anything else -> the same path under /finalsheet/
(function () {
  var BASE = 'https://moxieappdesign.com/finalsheet/';
  var SHORT = { '': '', 'apply': 'early-access.html', 'early-access': 'early-access.html', 'join': 'early-access.html',
    'privacy': 'privacy.html', 'support': 'support.html' };
  var path = location.pathname.replace(/^\/+|\/+$/g, '');
  var key = path.toLowerCase().replace(/\.html$/, '');
  var to = BASE + (key in SHORT ? SHORT[key] : path) + location.search + location.hash;
  location.replace(to);
})();
