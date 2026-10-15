/* MACPL site script — shared layout (header, sidebar, footer) + interactions.
   Edit NAV below to change the menu on every page. */
(function () {
  'use strict';

  var CONTACT = {
    phone: '+91 240 6625613 / 4',
    tel: '+912406625613',
    email: 'info@macpl.com',
    cin: 'U29130MH1988PTC046951',
    address: 'E-63, MIDC Waluj, Aurangabad – 431136, Maharashtra, India'
  };

  var NAV = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'about', label: 'About', href: 'about.html', sub: [
      ['overview', 'Overview'], ['vision-values', 'Vision & Values'], ['board', 'Board of Directors'],
      ['management', 'Management'], ['quality', 'Quality & Systems'], ['financials', 'Financials'], ['group', 'The Group']
    ] },
    { id: 'processes', label: 'Processes', href: 'processes.html', sub: [
      ['tube-bending', 'Tube Bending'], ['welding', 'Welding'], ['heat-treatment', 'Heat Treatment'],
      ['casting', 'Casting'], ['systems', 'Manufacturing Systems'], ['videos', 'Process Videos']
    ] },
    { id: 'products', label: 'Products', href: 'products.html', sub: [
      ['all', 'All Products'], ['agriculture', 'Agriculture'], ['earth-moving', 'Earth Moving'], ['three-wheeler', '3 Wheeler & EV'], ['two-wheeler', '2 Wheeler & EV']
    ] },
    { id: 'news', label: 'News', href: 'news.html', sub: [
      ['certification', 'ISO Certification'], ['environment-day', 'World Environment Day']
    ] },
    { id: 'careers', label: 'Careers', href: 'careers.html', sub: [
      ['working', 'Working at MACPL'], ['apply', 'How to Apply']
    ] },
    { id: 'contact', label: 'Contact', href: 'contact.html', sub: [
      ['details', 'Contact Details'], ['units', 'Our Units'], ['enquiry', 'Write to Us']
    ] }
  ];

  // Site search index
  var INDEX = [
    ['Home', 'Customized, durable & critical auto-components', 'index.html', 'home macpl marathwada'],
    ['About MACPL', 'History since 1997, OEMs, overview', 'about.html#overview', 'about history overview 1997 oem company'],
    ['Vision & Values', 'Integrity, Commitment, Compassion, Passion, Innovation, Proud of Roots', 'about.html#vision-values', 'vision values integrity commitment compassion passion innovation roots'],
    ['Board of Directors', 'Ram Bhogale, Ajit Soundalgekar and directors', 'about.html#board', 'board directors ram bhogale ajit soundalgekar sunil deshpande ulhas gaoli mukund nityanand chairman managing director'],
    ['Management Team', 'Plant heads, finance, materials, HR', 'about.html#management', 'management team plant head hr finance materials damani bhandari jadhav adhav deshpande kude'],
    ['Quality & Systems', 'Quality policy, TPM, infrastructure, ISO', 'about.html#quality', 'quality policy tpm infrastructure sap iso 9001 14001 ohsas'],
    ['Financials', 'Annual Return 2021-22, CSR Policy', 'about.html#financials', 'financials annual return csr policy pdf'],
    ['The AITG Group', 'Group companies and associates', 'about.html#group', 'group aitg umasons bhogale preci fab technocraft iinvent associates'],
    ['Tube Bending', 'CNC cold bending and robotic hot bending', 'processes.html#tube-bending', 'tube bending cnc robotic hot cold induction'],
    ['Welding', 'Tack & full welding, training centre', 'processes.html#welding', 'welding tack fabrication training centre'],
    ['Heat Treatment', 'In-house designed furnaces', 'processes.html#heat-treatment', 'heat treatment furnace stress relieving normalising'],
    ['Casting', 'Aluminium gravity die casting', 'processes.html#casting', 'casting aluminium gravity die'],
    ['Process Videos', 'Tube bending, plasma cutting, heat treatment, casting', 'processes.html#videos', 'video plasma cutting'],
    ['Products', 'Product gallery', 'products.html', 'products gallery components'],
    ['Agriculture Components', 'Front axle assembly for tractors', 'products.html#agriculture', 'agriculture tractor front axle'],
    ['Earth Moving Components', 'Excavator links, dozer blade, frames', 'products.html#earth-moving', 'earth moving excavator bucket link dozer blade engine frame link arm chassis compactor star plate'],
    ['3 Wheeler & EV Components', 'Steering columns, front forks, EV suspension', 'products.html#three-wheeler', '3 wheeler three cargo passenger steering column front fork telescopic suspension electric ev'],
    ['2 Wheeler & EV Components', 'Underbrackets, EV telescopic forks', 'products.html#two-wheeler', '2 wheeler two motorcycle scooter underbracket telescopic fork electric ev moped'],
    ['News & Events', 'ISO certification, World Environment Day', 'news.html', 'news events iso environment tree plantation'],
    ['Careers', 'Working at MACPL, job application', 'careers.html', 'careers jobs apply application hiring work'],
    ['Contact', 'Address, units, phone, email', 'contact.html', 'contact address phone email units waluj hosur map enquiry'],
    ['Sitemap', 'All pages', 'sitemap.html', 'sitemap pages']
  ];

  var ICON = {
    mail: '<svg class="fi" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 6l9 7 9-7"/></svg>',
    map: '<svg class="fi" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="5"/><rect x="2" y="17" width="6" height="5"/><rect x="9" y="17" width="6" height="5"/><rect x="16" y="17" width="6" height="5"/><path d="M12 7v5M5 17v-5h14v5"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/></svg>'
  };

  var body = document.body;
  var page = body.getAttribute('data-page') || 'home';
  var layout = document.querySelector('.layout');

  /* ---------- Header ---------- */
  var header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="Marathwada Auto Compo Pvt Ltd — Home">' +
        '<img src="assets/img/logo-macpl-white.png" alt="AITG | Marathwada Auto Compo Pvt Ltd" width="415" height="54">' +
      '</a>' +
      '<div class="header-tools">' +
        '<div class="header-contact"><span>Call <a href="tel:' + CONTACT.tel + '">' + CONTACT.phone + '</a></span>' +
        '<span>Mail <a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a></span></div>' +
        '<form class="search" role="search" action="sitemap.html" autocomplete="off">' +
          '<label class="sr-only" for="site-search">Search the site</label>' +
          '<input id="site-search" name="q" type="search" placeholder="Search" aria-controls="search-results" aria-expanded="false">' +
          ICON.search +
          '<ul class="search-results" id="search-results" role="listbox"></ul>' +
        '</form>' +
        '<button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>' +
      '</div>' +
    '</div>' +
    '<div class="split-bar"></div>';
  var skip = document.querySelector('.skip-link');
  if (skip) skip.insertAdjacentElement('afterend', header); else body.insertBefore(header, body.firstChild);

  /* ---------- Sidebar ---------- */
  var sideHTML = '<button class="round-btn sidebar-close" type="button" aria-label="Close menu">×</button><nav aria-label="Main"><ul>';
  NAV.forEach(function (n) {
    var active = n.id === page;
    sideHTML += '<li class="nav-item' + (active ? ' is-active' : '') + '"><a href="' + n.href + '"' + (active ? ' aria-current="page"' : '') + '><span class="sun-dot" aria-hidden="true"></span>' + n.label + '</a>';
    if (active && n.sub) {
      sideHTML += '<ul class="subnav">';
      n.sub.forEach(function (s) { sideHTML += '<li><a href="#' + s[0] + '">' + s[1] + '</a></li>'; });
      sideHTML += '</ul>';
    }
    sideHTML += '</li>';
  });
  sideHTML += '</ul></nav>' +
    '<div class="sidebar-card"><h4>Talk to us</h4>' +
    'Need a component developed to your specification?<br><a href="contact.html">Send an enquiry ›</a></div>';
  var sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar';
  sidebar.innerHTML = sideHTML;
  if (layout) layout.insertBefore(sidebar, layout.firstChild);
  var scrim = document.createElement('div');
  scrim.className = 'nav-scrim';
  body.appendChild(scrim);

  /* ---------- Footer ---------- */
  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<div class="footer-band">' +
      '<a class="fb-contact" href="contact.html">' + ICON.mail + 'Contact Us</a>' +
      '<a class="fb-sitemap" href="sitemap.html">' + ICON.map + 'Sitemap</a>' +
      '<div class="fb-info"><span>' + CONTACT.address + '</span>' +
        '<span><a href="tel:' + CONTACT.tel + '">' + CONTACT.phone + '</a> &nbsp;·&nbsp; <a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a></span></div>' +
    '</div>' +
    '<div class="footer-legal"><div class="wrap">' +
      '<span>© ' + new Date().getFullYear() + ' Marathwada Auto Compo Pvt Ltd. All rights reserved.</span>' +
      '<span>CIN: ' + CONTACT.cin + ' &nbsp;·&nbsp; A company of <a href="http://aitg.co/" target="_blank" rel="noopener">Applied Innovation &amp; Technology Group</a></span>' +
    '</div></div>';
  body.appendChild(footer);

  var toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.type = 'button';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.innerHTML = '↑';
  body.appendChild(toTop);
  toTop.addEventListener('click', function () { window.scrollTo(0, 0); });

  /* ---------- Mobile menu ---------- */
  var toggle = header.querySelector('.menu-toggle');
  function setNav(open) {
    body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () { setNav(!body.classList.contains('nav-open')); });
  scrim.addEventListener('click', function () { setNav(false); });
  sidebar.querySelector('.sidebar-close').addEventListener('click', function () { setNav(false); });
  sidebar.addEventListener('click', function (e) { if (e.target.closest('.subnav a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });

  /* ---------- Search ---------- */
  var sInput = header.querySelector('#site-search');
  var sList = header.querySelector('#search-results');
  var sActive = -1;
  function runSearch() {
    var q = sInput.value.trim().toLowerCase();
    sActive = -1;
    if (!q) { sList.classList.remove('open'); sInput.setAttribute('aria-expanded', 'false'); return; }
    var terms = q.split(/\s+/);
    var hits = INDEX.map(function (it) {
      var hay = (it[0] + ' ' + it[1] + ' ' + it[3]).toLowerCase();
      var score = 0;
      terms.forEach(function (t) { if (hay.indexOf(t) > -1) score += it[0].toLowerCase().indexOf(t) > -1 ? 3 : 1; });
      return { it: it, score: score, all: terms.every(function (t) { return hay.indexOf(t) > -1; }) };
    }).filter(function (h) { return h.all; }).sort(function (a, b) { return b.score - a.score; }).slice(0, 7);
    sList.innerHTML = hits.length
      ? hits.map(function (h) { return '<li><a href="' + h.it[2] + '"><b>' + h.it[0] + '</b><small>' + h.it[1] + '</small></a></li>'; }).join('')
      : '<li class="empty">No results for “' + sInput.value.replace(/[<>&]/g, '') + '”</li>';
    sList.classList.add('open');
    sInput.setAttribute('aria-expanded', 'true');
  }
  sInput.addEventListener('input', runSearch);
  sInput.addEventListener('focus', runSearch);
  sInput.addEventListener('keydown', function (e) {
    var links = sList.querySelectorAll('a');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!links.length) return;
      sActive = (sActive + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
      links.forEach(function (a, i) { a.classList.toggle('is-active', i === sActive); });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      var target = links[sActive > -1 ? sActive : 0];
      if (target) window.location.href = target.getAttribute('href');
    } else if (e.key === 'Escape') { sList.classList.remove('open'); sInput.blur(); }
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.search')) sList.classList.remove('open'); });

  /* ---------- Section tabs: show one sub-section at a time ---------- */
  // Each sidebar sub-item (#id) shows only that section. Panels without an id
  // belong to the section before them (or the first section if they come first).
  // Products handles its own filtering, so it is skipped here.
  var subLinks = Array.prototype.slice.call(sidebar.querySelectorAll('.subnav a'));
  var main = document.getElementById('main');
  if (subLinks.length && main && page !== 'products') {
    var ids = subLinks.map(function (a) { return a.getAttribute('href').slice(1); });
    var sections = ids.map(function (id) { return document.getElementById(id); });
    var panels = Array.prototype.slice.call(main.querySelectorAll(':scope > .panel'));
    var owner = new Map(); // panel -> section id (for panels not containing a section)
    var last = null;
    panels.forEach(function (p) {
      if (p.querySelector('.page-banner')) return;
      var inner = ids.filter(function (id, i) { return sections[i] && (sections[i] === p || p.contains(sections[i])); });
      if (inner.length) { last = inner[inner.length - 1]; return; }
      owner.set(p, last || ids[0]);
    });

    // Prev / next pager
    var pager = document.createElement('nav');
    pager.className = 'pager';
    pager.setAttribute('aria-label', 'Section navigation');
    main.appendChild(pager);

    var showSection = function (id) {
      if (ids.indexOf(id) < 0) id = ids[0];
      sections.forEach(function (s, i) { if (s) s.hidden = ids[i] !== id; });
      panels.forEach(function (p) {
        if (p.querySelector('.page-banner')) return;
        if (owner.has(p)) { p.hidden = owner.get(p) !== id; return; }
        var sec = sections[ids.indexOf(id)];
        p.hidden = !(sec && (sec === p || p.contains(sec)));
      });
      subLinks.forEach(function (a, i) {
        var on = ids[i] === id;
        a.classList.toggle('is-current', on);
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
      var i = ids.indexOf(id);
      var prev = i > 0 ? subLinks[i - 1] : null, next = i < ids.length - 1 ? subLinks[i + 1] : null;
      pager.innerHTML =
        (prev ? '<a class="btn btn--ghost btn--prev" href="#' + ids[i - 1] + '">' + prev.textContent + '</a>' : '') +
        (next ? '<a class="btn btn--next" href="#' + ids[i + 1] + '">Next: ' + next.textContent + '</a>' : '');
    };

    var fromHash = function () {
      showSection(location.hash.slice(1));
      setTimeout(function () { window.scrollTo(0, 0); }, 0);
    };
    window.addEventListener('hashchange', fromHash);
    fromHash();
  }
  window.addEventListener('scroll', function () { toTop.classList.toggle('show', window.scrollY > 600); }, { passive: true });

  /* ---------- Hero slider ---------- */
  var hero = document.querySelector('.hero');
  if (hero) {
    var slides = hero.querySelectorAll('.hero-slide');
    var dotsWrap = hero.querySelector('.hero-controls');
    var idx = 0;
    slides.forEach(function (s, i) {
      var b = document.createElement('button');
      b.className = 'hero-dot' + (i === 0 ? ' is-active' : '');
      b.type = 'button';
      b.setAttribute('aria-label', 'Show slide ' + (i + 1));
      b.addEventListener('click', function () { go(i); });
      dotsWrap.appendChild(b);
    });
    var dots = dotsWrap.querySelectorAll('.hero-dot');
    function go(i) {
      slides[idx].classList.remove('is-active'); dots[idx].classList.remove('is-active');
      idx = (i + slides.length) % slides.length;
      slides[idx].classList.add('is-active'); dots[idx].classList.add('is-active');
    }
    hero.querySelector('.hero-prev').addEventListener('click', function () { go(idx - 1); });
    hero.querySelector('.hero-next').addEventListener('click', function () { go(idx + 1); });
  }

  /* ---------- Product carousel (home strip) ---------- */
  document.querySelectorAll('.prod-carousel').forEach(function (c) {
    var track = c.querySelector('.prod-track');
    function step(dir) {
      var w = track.clientWidth;
      var max = track.scrollWidth - w - 2;
      var next = track.scrollLeft + dir * w;
      if (next > max + w - 10) next = 0; else if (next < -w + 10) next = max;
      track.scrollLeft = next;
    }
    c.querySelector('.pc-prev').addEventListener('click', function () { step(-1); });
    c.querySelector('.pc-next').addEventListener('click', function () { step(1); });
  });

  /* ---------- Click-to-load YouTube ---------- */
  document.querySelectorAll('.video[data-yt]').forEach(function (v) {
    var id = v.getAttribute('data-yt');
    v.style.backgroundImage = 'url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)';
    v.addEventListener('click', function () {
      if (v.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      f.title = v.getAttribute('aria-label') || 'Process video';
      f.allow = 'autoplay; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      v.appendChild(f);
    });
  });

  /* ---------- Lightbox (products + galleries) ---------- */
  var lb, lbImg, lbCap, lbCount, lbItems = [], lbIdx = 0, lbReturn = null;
  function buildLightbox() {
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Image viewer');
    lb.innerHTML = '<button class="round-btn lb-close" type="button" aria-label="Close">×</button>' +
      '<button class="round-btn lb-prev" type="button" aria-label="Previous">‹</button>' +
      '<figure><img alt=""><figcaption><b></b><span></span></figcaption></figure>' +
      '<button class="round-btn lb-next" type="button" aria-label="Next">›</button>';
    body.appendChild(lb);
    lbImg = lb.querySelector('img'); lbCap = lb.querySelector('figcaption b'); lbCount = lb.querySelector('figcaption span');
    lb.querySelector('.lb-close').addEventListener('click', closeLb);
    lb.querySelector('.lb-prev').addEventListener('click', function () { showLb(lbIdx - 1); });
    lb.querySelector('.lb-next').addEventListener('click', function () { showLb(lbIdx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') showLb(lbIdx - 1);
      if (e.key === 'ArrowRight') showLb(lbIdx + 1);
    });
  }
  function showLb(i) {
    lbIdx = (i + lbItems.length) % lbItems.length;
    var it = lbItems[lbIdx];
    lbImg.src = it.src; lbImg.alt = it.cap; lbCap.textContent = it.cap;
    lbCount.textContent = (lbIdx + 1) + ' / ' + lbItems.length;
    var multi = lbItems.length > 1;
    lb.querySelector('.lb-prev').hidden = !multi; lb.querySelector('.lb-next').hidden = !multi;
  }
  function closeLb() { lb.classList.remove('open'); body.style.overflow = ''; if (lbReturn) lbReturn.focus(); }
  window.MACPL = window.MACPL || {};
  window.MACPL.openLightbox = function (items, start, trigger) {
    if (!lb) buildLightbox();
    lbItems = items; lbReturn = trigger || null;
    showLb(start || 0);
    lb.classList.add('open'); body.style.overflow = 'hidden';
    lb.querySelector('.lb-close').focus();
  };
  // Simple galleries: <div class="gallery" data-title="..."><button data-src data-cap><img></button></div>
  document.querySelectorAll('.gallery').forEach(function (g) {
    var btns = Array.prototype.slice.call(g.querySelectorAll('button'));
    var items = btns.map(function (b) { return { src: b.getAttribute('data-src') || b.querySelector('img').src, cap: b.getAttribute('data-cap') || b.querySelector('img').alt }; });
    btns.forEach(function (b, i) { b.addEventListener('click', function () { window.MACPL.openLightbox(items, i, b); }); });
  });
})();
