/* ============================================================
   data/games.js — THE game catalogue. One object per game.
   The home page, the games index, the roadmap board and the
   footer all render from this array. To manage your games you
   only edit this file (and, for a full landing page, that game's
   games/<slug>/game.config.js).

   ── Add a game ────────────────────────────────────────────────
   1. Copy games/_TEMPLATE/ to games/<your-slug>/
   2. Fill games/<your-slug>/game.config.js and drop art in
      games/<your-slug>/assets/
   3. Add one { … } entry below.

   ── Change a game's status ───────────────────────────────────
   Edit its `status`. That single value drives the card pill, the
   roadmap column and the badge on the game's page.

   ── Fields ───────────────────────────────────────────────────
   slug      required. Folder name under games/ and unique id.
   name      required. Display title (real name or codename).
   status    required. one of:
               "live"    — out now (green-lit, pulsing pill)
               "beta"    — public test / early access
               "dev"     — in development
               "planned" — announced, not started
               "paused"  — on hold
   tagline   short punchy line (game page hero + card).
   blurb     1–2 sentences for the catalogue cards.
   genre     one-line genre / hook.
   accent    the game's own colour (hex). The studio shell stays
             neutral so this leads on the game's surfaces.
   accent2   optional lighter partner colour for gradients.
   accentInk optional text colour on the accent (default #fff).
   icon      square logo/icon path (optional).
   banner    wide art for the home feature card (optional). A game
             with a banner gets a big card; without one it gets a
             compact "codename" card.
   page      path to the game's landing page, e.g.
             "games/color-boom/". Omit and the card links to the
             first store link instead (or /contact if none).
   links     array of { label, url } store links. Any label works
             ("Google Play", "App Store", "Steam", "itch.io"…),
             so new platforms need no code change.
   released  optional "YYYY" or "YYYY-MM", shown on the game page.
   ============================================================ */

window.TRIRON_GAMES = [
  {
    slug: "color-boom",
    name: "Color Boom",
    status: "live",
    tagline: "Tap a color, boom — it's art.",
    blurb:
      "The cozy color-by-number game where every tile you fill bursts into art. " +
      "Paint, collect daily rewards, and climb the weekly ranks.",
    genre: "Cozy color-by-number",
    accent: "#F97A2E",
    accent2: "#FC9442",
    icon: "games/color-boom/assets/logo.png",
    banner: "games/color-boom/assets/promo-art.png",
    page: "games/color-boom/",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.colorboom.yuser"
      }
    ],
    released: "2026-05"
  },
  {
    slug: "animals-merge",
    name: "Animals Merge",
    status: "dev",
    tagline: "Merge cute critters into bigger, rarer ones.",
    blurb:
      "A cozy merge puzzler about growing a little menagerie. Still cooking — " +
      "a first look is on the way.",
    genre: "Cozy merge puzzler",
    accent: "#5AA17A",
    accent2: "#74B892",
    icon: "games/animals-merge/assets/icon.png",
    banner: "games/animals-merge/assets/banner.png",
    page: "games/animals-merge/",
    links: []
  }
];
