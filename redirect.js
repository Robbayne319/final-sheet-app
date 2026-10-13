// finalsheet.app sends every visitor to the FinalSheet pages on moxieappdesign.com, keeping the path:
//   /            -> /finalsheet/
//   /apply       -> /finalsheet/early-access.html   (short link for posts; add ?ref=label to track)
//   /ig /fb /x   -> early access, already labeled ig-bio / fb-page / x-bio (clean links for profile bios)
//   /privacy     -> /finalsheet/privacy.html
//   /support     -> /finalsheet/support.html
//   anything else -> the same path under /finalsheet/
(function () {
  var BASE = 'https://moxieappdesign.com/finalsheet/';
  var SHORT = { '': '', 'apply': 'early-access.html', 'early-access': 'early-access.html', 'join': 'early-access.html',
    'ig': 'early-access.html?ref=ig-bio', 'fb': 'early-access.html?ref=fb-page', 'x': 'early-access.html?ref=x-bio',
    'privacy': 'privacy.html', 'support': 'support.html' };
  var path = location.pathname.replace(/^\/+|\/+$/g, '');
  var key = path.toLowerCase().replace(/\.html$/, '');
  var to = BASE + (key in SHORT ? SHORT[key] : path);
  // A ref on the visited link wins over the bio link's built-in label.
  if (location.search) to = to.replace(/\?.*$/, '') + location.search;
  to += location.hash;
  location.replace(to);
})();
