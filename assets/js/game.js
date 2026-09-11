/* ============================================================
   game.js — renders a game landing page from:
     • the catalogue entry in data/games.js  (name, accent, links, status)
     • window.GAME_CONFIG  (this game's page content)
   The game's index.html only needs a <main id="game-root"> and
   to set window.PAGE + load this file.
   ============================================================ */
(function () {
  "use strict";

  var cfg = window.GAME_CONFIG || {};
  var GAMES = window.TRIRON_GAMES || [];
  var entry = GAMES.filter(function (g) { return g.slug === cfg.slug; })[0] || {};
  var game = Object.assign({}, entry, cfg);
  window.PAGE = Object.assign({ base: "../../", kind: "game" }, window.PAGE, { game: game });

  var A = cfg.assets || "assets/";
  var SHOTS = (cfg.shotDir || (A + "screens/"));

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  // "Tap a color, *boom* — it's art."  → accent-coloured *word*
  function pop(str) {
    return esc(str).replace(/\*([^*]+)\*/g, '<span class="pop">$1</span>');
  }
  function shot(name) { return /^https?:|\//.test(name) ? name : SHOTS + name; }
  function asset(name) { return /^https?:|\//.test(name) ? name : A + name; }

  function storeBadges() {
    var links = game.links || [];
    if (!links.length) return "";
    return '<div class="store-badges">' + links.map(function (l) {
      return '<a class="store-badge" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
               '<span class="gp-mark" aria-hidden="true">▶</span>' +
               '<span class="bt"><small>Get it on</small><b>' + esc(l.label) + "</b></span>" +
             "</a>";
    }).join("") + "</div>";
  }

  function heroMedia() {
    if (cfg.heroArt) {
      return '<div class="hero-art reveal"><img src="' + asset(cfg.heroArt) + '" alt="' + esc(game.name) + ' key art" /></div>';
    }
    var shots = cfg.heroShots || [];
    var pucks = (cfg.heroPucks || []).map(function (p, i) {
      return '<div class="puck p' + (i + 1) + '"><span class="pi">' + esc(p.icon) + "</span>" +
             "<span><small>" + esc(p.label) + "</small><b>" + esc(p.value) + "</b></span></div>";
    }).join("");
    return '<div class="hero-art reveal"><div class="shot-cluster">' +
      shots.slice(0, 3).map(function (s, i) {
        return '<div class="shot s' + (i + 1) + '"><img src="' + shot(s) + '" alt="" loading="eager" /></div>';
      }).join("") + pucks + "</div></div>";
  }

  function renderFull(root) {
    var feats = (cfg.features || []).map(function (f, i) {
      var flip = i % 2 === 1;
      return '<div class="frow reveal' + (flip ? " flip" : "") + '">' +
        '<div class="fr-copy">' +
          (f.eyebrow ? '<span class="eyebrow">' + esc(f.eyebrow) + "</span>" : "") +
          "<h3>" + esc(f.title) + "</h3>" +
          "<p>" + esc(f.body) + "</p>" +
          (f.pills && f.pills.length
            ? '<div class="fr-pills">' + f.pills.map(function (p) {
                return '<span class="fr-pill"><span class="em">' + esc(p[0]) + "</span>" + esc(p[1]) + "</span>";
              }).join("") + "</div>"
            : "") +
        "</div>" +
        '<div class="fr-media">' +
          '<span class="fr-blob"></span>' +
          '<div class="shot"><img src="' + shot(f.shot) + '" alt="' + esc(f.eyebrow || f.title) + '" loading="lazy" /></div>' +
          (f.floatCard
            ? '<div class="float-card ' + (flip ? "fc-tl" : "fc-br") + '"><span class="em">' + esc(f.floatCard.icon) +
              '</span><span><b>' + esc(f.floatCard.big) + '</b><small>' + esc(f.floatCard.small) + "</small></span></div>"
            : "") +
        "</div>" +
      "</div>";
    }).join("");

    var stats = (cfg.stats || []).map(function (s, i, arr) {
      return '<div class="proof-item"><div class="big">' + esc(s.big) + '</div><div class="lbl">' + esc(s.label) + "</div></div>" +
             (i < arr.length - 1 ? '<span class="proof-sep"></span>' : "");
    }).join("");

    root.innerHTML =
      '<header class="game-hero" id="top"><div class="wrap">' +
        '<div class="hero-grid">' +
          '<div class="hero-copy">' +
            (cfg.eyebrow ? '<span class="eyebrow">' + esc(cfg.eyebrow) + "</span>" : "") +
            '<h1 class="wordmark">' + pop(cfg.heroTitle || game.name) + "</h1>" +
            '<p class="hero-tag">' + esc(cfg.heroBody || game.tagline || game.blurb || "") + "</p>" +
            storeBadges() +
            (cfg.heroNote ? '<p class="hero-note">' + cfg.heroNote + "</p>" : "") +
          "</div>" +
          heroMedia() +
        "</div>" +
        (feats ? '<a class="scroll-cue" href="#features"><span class="sc-label">More</span><span class="chev">⌄</span></a>' : "") +
      "</div></header>" +

      (stats ? '<section class="proof reveal"><div class="wrap"><div class="proof-row">' + stats + "</div></div></section>" : "") +

      (feats
        ? '<section class="section" id="features"><div class="wrap">' +
            '<div class="feature-head reveal">' +
              (cfg.featuresEyebrow ? '<span class="eyebrow is-centered">' + esc(cfg.featuresEyebrow) + "</span>" : "") +
              (cfg.featuresTitle ? '<h2 class="section-title">' + esc(cfg.featuresTitle) + "</h2>" : "") +
              (cfg.featuresLead ? '<p class="lead">' + esc(cfg.featuresLead) + "</p>" : "") +
            "</div>" + feats +
          "</div></section>"
        : "") +

      '<section class="section" style="padding-top:0"><div class="wrap">' +
        '<div class="game-cta reveal">' +
          "<h2>" + esc(cfg.ctaTitle || ("Ready to play " + game.name + "?")) + "</h2>" +
          (cfg.ctaBody ? "<p>" + esc(cfg.ctaBody) + "</p>" : "") +
          storeBadges() +
        "</div>" +
      "</div></section>";
  }

  function renderComingSoon(root) {
    root.innerHTML =
      '<section class="coming-soon" id="top"><div class="wrap">' +
        (game.icon ? '<img class="cs-icon" src="../../' + esc(game.icon) + '" alt="" />' : "") +
        '<span class="eyebrow is-centered">' + esc((game.genre || "Coming soon")) + "</span>" +
        "<h1>" + esc(game.name) + "</h1>" +
        '<p class="cs-tag">' + esc(cfg.heroBody || game.blurb || "") + "</p>" +
        '<div class="actions">' +
          '<a class="btn btn-primary" href="../../contact.html">Get notified</a>' +
          '<a class="btn btn-ghost" href="../../index.html#games">All games</a>' +
        "</div>" +
      "</div></section>";
  }

  function updateHead() {
    if (cfg.metaTitle) document.title = cfg.metaTitle;
    document.documentElement.style.setProperty("--accent", game.accent || "var(--primary)");
    document.documentElement.style.setProperty("--accent2", game.accent2 || game.accent || "var(--primary-2)");
    if (game.accentInk) document.documentElement.style.setProperty("--accent-ink", game.accentInk);
    var tc = document.querySelector('meta[name="theme-color"]');
    if (tc && game.accent) tc.setAttribute("content", game.accent);
  }

  function init() {
    var root = document.getElementById("game-root");
    if (!root) return;
    updateHead();
    var hasPage = cfg.heroTitle || cfg.heroArt || (cfg.heroShots && cfg.heroShots.length) || (cfg.features && cfg.features.length);
    if (hasPage) renderFull(root); else renderComingSoon(root);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
