/* ============================================================
   home.js — renders the games grid + roadmap board from
   data/games.js. Used by index.html and games.html.
   Elements it looks for (any may be absent):
     #games-grid     big feature cards (games with a banner)
     #codename-grid  compact cards (games without a banner)
     #roadmap-board  the Live / In dev / Planned columns
   ============================================================ */
(function () {
  "use strict";

  var GAMES = window.TRIRON_GAMES || [];
  var BASE = (window.PAGE && window.PAGE.base) || "";

  var STATUS = {
    live:    { label: "Live now",       rmLabel: "Live",           color: "var(--green)" },
    beta:    { label: "In beta",        rmLabel: "Beta",           color: "var(--blue)" },
    dev:     { label: "In development", rmLabel: "In development", color: "var(--clay)" },
    planned: { label: "Planned",        rmLabel: "Planned",        color: "var(--purple)" },
    paused:  { label: "On hold",        rmLabel: "On hold",        color: "var(--ink-3)" }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function accentVars(g) {
    return "--accent:" + esc(g.accent || "var(--primary)") +
           ";--accent2:" + esc(g.accent2 || g.accent || "var(--primary-2)") +
           (g.accentInk ? ";--accent-ink:" + esc(g.accentInk) : "");
  }
  function target(g) {
    if (g.page) return BASE + esc(g.page);
    if ((g.links || [])[0]) return esc(g.links[0].url);
    return BASE + "contact.html";
  }
  function external(g) { return !g.page && (g.links || [])[0]; }

  function bigCard(g) {
    var st = STATUS[g.status] || { label: g.status };
    var ext = external(g);
    return (
      '<article class="game-card" style="' + accentVars(g) + '">' +
        '<div class="shot">' +
          (g.banner ? '<img src="' + BASE + esc(g.banner) + '" alt="' + esc(g.name) + ' key art" loading="lazy" decoding="async" />' : "") +
        "</div>" +
        '<div class="info">' +
          '<div class="icon-row">' +
            (g.icon ? '<img src="' + BASE + esc(g.icon) + '" alt="" />' : "") +
            "<h3>" + esc(g.name) + "</h3>" +
          "</div>" +
          '<span class="status-pill' + (g.status === "live" ? " is-live" : "") + '">' + esc(st.label) + "</span>" +
          '<p class="blurb">' + esc(g.blurb || "") + "</p>" +
          '<a class="card-cta" href="' + target(g) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" +
            (g.page ? "Learn more" : (ext ? esc(g.links[0].label) : "Get notified")) +
            ' <span class="arrow">→</span></a>' +
        "</div>" +
      "</article>"
    );
  }

  function codenameCard(g) {
    var st = STATUS[g.status] || { label: g.status };
    var initials = esc((g.name || "?").trim().charAt(0).toUpperCase());
    return (
      '<article class="codename-card" style="' + accentVars(g) + '">' +
        '<div class="cc-art">' +
          (g.icon ? '<img src="' + BASE + esc(g.icon) + '" alt="" />' : "<span>" + initials + "</span>") +
        "</div>" +
        '<div class="cc-body">' +
          '<span class="status-pill">' + esc(st.label) + "</span>" +
          "<h3>" + esc(g.name) + "</h3>" +
          (g.genre ? '<p class="cc-genre">' + esc(g.genre) + "</p>" : "") +
          '<p class="blurb">' + esc(g.blurb || "") + "</p>" +
          '<a class="cc-cta" href="' + target(g) + '">' + (g.page ? "Learn more →" : "Get notified →") + "</a>" +
        "</div>" +
      "</article>"
    );
  }

  function renderGrid() {
    var big = document.getElementById("games-grid");
    var small = document.getElementById("codename-grid");
    if (big) big.innerHTML = GAMES.filter(function (g) { return g.banner; }).map(bigCard).join("");
    if (small) small.innerHTML = GAMES.filter(function (g) { return !g.banner; }).map(codenameCard).join("");
  }

  function renderRoadmap() {
    var host = document.getElementById("roadmap-board");
    if (!host) return;
    var cols = [
      { keys: ["live", "beta"], label: "Live", color: "var(--green)" },
      { keys: ["dev"], label: "In development", color: "var(--clay)" },
      { keys: ["planned", "paused"], label: "Next up", color: "var(--purple)" }
    ];
    host.innerHTML = cols.map(function (col) {
      var inCol = GAMES.filter(function (g) { return col.keys.indexOf(g.status) > -1; });
      var body = inCol.length
        ? inCol.map(function (g) {
            return '<div class="rm-game" style="' + accentVars(g) + '">' +
                     '<span class="rm-dot"></span>' +
                     "<div><b>" + esc(g.name) + "</b><span>" + esc(g.genre || (STATUS[g.status] || {}).label || "") + "</span></div>" +
                   "</div>";
          }).join("")
        : '<div class="rm-empty">Nothing here yet.</div>';
      return '<div class="rm-col" style="--rm-color:' + col.color + '">' +
               '<div class="rm-label">' + esc(col.label) + "</div>" + body +
             "</div>";
    }).join("");
  }

  function init() { renderGrid(); renderRoadmap(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
