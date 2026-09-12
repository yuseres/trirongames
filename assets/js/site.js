/* ============================================================
   site.js — shared shell for every page.
   Renders the nav (+ mobile menu) and the footer, wires the
   dark-mode toggle, and stamps the year. Buildless: each page
   sets `window.PAGE` before loading this file, and includes
   data/studio.js + data/games.js.

   window.PAGE = {
     base:    "" | "../" | "../../"   // path back to site root
     kind:    "studio" | "game" | "legal"
     current: "games" | "roadmap" | ...   // highlights a nav link
     game:    <catalogue entry>       // game pages only
   }
   ============================================================ */
(function () {
  "use strict";

  var PAGE = window.PAGE || {};
  var BASE = PAGE.base || "";
  var S = window.TRIRON_STUDIO || {};
  var GAMES = window.TRIRON_GAMES || [];

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }
  function primaryPlayable() {
    return GAMES.filter(function (g) { return g.page && (g.status === "live" || g.status === "beta"); })[0]
        || GAMES.filter(function (g) { return g.page; })[0]
        || null;
  }

  /* ---------- theme ---------- */
  var THEME_KEY = "triron-theme";
  function applyTheme(mode) {
    var root = document.documentElement;
    if (mode === "dark" || mode === "light") root.setAttribute("data-theme", mode);
    else root.removeAttribute("data-theme");
  }
  function storedTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function currentEffective() {
    var s = storedTheme();
    if (s === "dark" || s === "light") return s;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function toggleTheme() {
    var next = currentEffective() === "dark" ? "light" : "dark";
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    applyTheme(next);
  }
  applyTheme(storedTheme()); // early-ish (script is deferred; see inline pre-paint hint in <head>)

  /* ---------- nav links per page kind ---------- */
  function studioLinks() {
    return [
      ["Games", BASE + "games.html", "games"],
      ["Roadmap", BASE + "index.html#roadmap", "roadmap"],
      ["Studio", BASE + "index.html#studio", "studio"],
      ["Legal", BASE + "legal/index.html", "legal"],
      ["Contact", BASE + "contact.html", "contact"]
    ];
  }

  function buildNav() {
    var host = document.getElementById("site-nav");
    if (!host) return;

    var themeBtn =
      '<button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch light / dark theme" title="Light / dark">' +
        '<svg class="moon" viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M12.3 3a7 7 0 0 0 8.7 9 9 9 0 1 1-8.7-9Z"/></svg>' +
        '<svg class="sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
      "</button>";

    var brandHref, brandInner, links, ctaHtml = "";

    if (PAGE.kind === "game" && PAGE.game) {
      var g = PAGE.game;
      brandHref = "#top";
      brandInner =
        '<a class="brand" href="' + BASE + 'index.html" aria-label="Back to TrironGames" style="gap:7px">' +
          '<span class="back-arrow">←</span>' +
          (g.icon ? '<img src="' + BASE + esc(g.icon) + '" alt="" />' : "") +
        "</a>" +
        '<a class="brand" href="#top">' +
          "<span>" + esc(g.name) + '<span class="brand-sub">' + esc(S.name || "TrironGames") + "</span></span>" +
        "</a>";
      var gc = window.GAME_CONFIG || {};
      var hasFeatures = gc.features && gc.features.length;
      links = [];
      if (hasFeatures) links.push(["Features", "#features", ""]);
      links.push(["All games", BASE + "games.html", ""], ["Studio", BASE + "index.html", ""], ["Legal", BASE + "legal/index.html", ""]);
      var play = (g.links || [])[0];
      if (play) ctaHtml = '<a class="nav-cta" href="' + esc(play.url) + '" target="_blank" rel="noopener">Get the app</a>';
    } else {
      brandInner =
        '<a class="brand" href="' + BASE + 'index.html">' +
          '<img src="' + BASE + 'assets/trirongames-icon.png" alt="" />' +
          "<span>" + esc(S.name || "TrironGames") + '<span class="brand-sub">' + esc(S.tagline || "Studio") + "</span></span>" +
        "</a>";
      links = studioLinks();
      var p = primaryPlayable();
      if (p) ctaHtml = '<a class="nav-cta" href="' + BASE + esc(p.page) + '">Play ' + esc(p.name) + "</a>";
    }

    var linksHtml = links.map(function (l) {
      var cur = PAGE.current && l[2] === PAGE.current ? ' aria-current="page"' : "";
      return '<a href="' + esc(l[1]) + '"' + cur + ">" + esc(l[0]) + "</a>";
    }).join("");

    host.innerHTML =
      '<div class="wrap"><div class="nav-inner">' +
        brandInner +
        '<div class="nav-links">' + linksHtml + "</div>" +
        '<div class="nav-tail">' + themeBtn + ctaHtml +
          '<button class="nav-burger" type="button" data-menu-open aria-label="Open menu" aria-expanded="false"><span></span></button>' +
        "</div>" +
      "</div></div>";

    // mobile menu
    var menu = el(
      '<nav class="mobile-menu" id="mobile-menu" aria-label="Menu">' +
        links.map(function (l) { return '<a href="' + esc(l[1]) + '">' + esc(l[0]) + "</a>"; }).join("") +
        (ctaHtml ? ctaHtml.replace("nav-cta", "btn btn-primary") : "") +
      "</nav>"
    );
    var scrim = el('<div class="menu-scrim" data-menu-close></div>');
    document.body.appendChild(scrim);
    document.body.appendChild(menu);
  }

  /* ---------- footer ---------- */
  function buildFooter() {
    var host = document.getElementById("site-footer");
    if (!host) return;

    var gamesLinks = GAMES.map(function (g) {
      if (g.page) return '<li><a href="' + BASE + esc(g.page) + '">' + esc(g.name) + "</a></li>";
      var s = (g.links || [])[0];
      if (s) return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(g.name) + "</a></li>";
      return '<li><span style="color:var(--ink-3);font-weight:700">' + esc(g.name) + " <small>(soon)</small></span></li>";
    }).join("");

    var soc = S.socials || {};
    var socHtml = "";
    if (soc.instagram) socHtml += '<a href="' + esc(soc.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICON.instagram + "</a>";
    if (soc.tiktok) socHtml += '<a href="' + esc(soc.tiktok) + '" target="_blank" rel="noopener" aria-label="TikTok">' + ICON.tiktok + "</a>";
    if (soc.facebook) socHtml += '<a href="' + esc(soc.facebook) + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICON.facebook + "</a>";

    host.className = "site-footer";
    host.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<a class="brand" href="' + BASE + 'index.html">' +
              '<img src="' + BASE + 'assets/trirongames-icon.png" alt="" />' +
              "<span>" + esc(S.name || "TrironGames") + "</span></a>" +
            "<p>" + esc(S.blurb || "") + "</p>" +
            '<div class="socials">' + socHtml + "</div>" +
          "</div>" +
          '<div><h4>Games</h4><ul>' + gamesLinks + "</ul></div>" +
          '<div><h4>Studio</h4><ul>' +
            '<li><a href="' + BASE + 'index.html#studio">About</a></li>' +
            '<li><a href="' + BASE + 'index.html#roadmap">Roadmap</a></li>' +
            '<li><a href="' + BASE + 'contact.html">Contact</a></li>' +
          "</ul></div>" +
          '<div><h4>Legal</h4><ul>' +
            '<li><a href="' + BASE + 'legal/privacy-policy.html">Privacy Policy</a></li>' +
            '<li><a href="' + BASE + 'legal/terms.html">Terms</a></li>' +
            '<li><a href="' + BASE + 'legal/delete-account.html">Delete Account</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bot">' +
          "<span>&copy; " + new Date().getFullYear() + " " + esc(S.name || "TrironGames") + ". Made with 🎨 and a lot of coffee.</span>" +
          '<span><a href="mailto:' + esc(S.email || "") + '">' + esc(S.email || "") + "</a></span>" +
        "</div>" +
      "</div>";
  }

  /* ---------- menu behaviour ---------- */
  function wireMenu() {
    function close() {
      document.body.classList.remove("menu-open");
      var b = document.querySelector("[data-menu-open]");
      if (b) b.setAttribute("aria-expanded", "false");
    }
    function open() {
      document.body.classList.add("menu-open");
      var b = document.querySelector("[data-menu-open]");
      if (b) b.setAttribute("aria-expanded", "true");
    }
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-menu-open]")) {
        document.body.classList.contains("menu-open") ? close() : open();
      } else if (e.target.closest("[data-menu-close]") || e.target.closest(".mobile-menu a")) {
        close();
      } else if (e.target.closest("[data-theme-toggle]")) {
        toggleTheme();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener &&
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        if (!storedTheme()) applyTheme(null);
      });
  }

  /* ---------- brand social icons ---------- */
  var ICON = {
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63c-.79.3-1.46.71-2.13 1.38C1.34 2.68.93 3.35.63 4.14.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.29 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.29-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0m0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49a6.4 6.4 0 0 1 2.58-4.96 6.34 6.34 0 0 1 6.15-1.72c.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.8.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0z"/></svg>'
  };
  window.TRIRON_ICON = ICON;

  /* ---------- go ---------- */
  function init() {
    buildNav();
    buildFooter();
    wireMenu();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
