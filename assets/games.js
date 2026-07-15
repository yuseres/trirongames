/* assets/games.js — single source of truth for the TrironGames catalogue.
   The home page renders the games grid, the studio roadmap and the footer
   "Games" list from this one array. To add game #4/#5: append one object here
   and (for a playable/live game) drop a folder under games/<slug>/.

   Fields
     slug    unique id, also the games/<slug>/ folder name
     name    display title (real name or codename)
     status  'live' | 'dev' | 'planned'   -> drives the pill + roadmap column
     accent  the game's own colour (the studio shell stays neutral)
     icon    small square logo/icon (optional)
     banner  wide art for the grid card (optional)
     genre   one-line genre / hook shown on coming-soon cards
     blurb   1–2 sentence description
     url     link to the game's page (omit for unannounced titles)
     cta     call-to-action label for live games (e.g. "Learn more")
*/
window.TRIRON_GAMES = [
  {
    slug: "color-boom",
    name: "Color Boom",
    status: "live",
    accent: "#F97A2E",
    icon: "games/color-boom/assets/logo.png",
    banner: "games/color-boom/assets/screens/library.png",
    genre: "Cozy color-by-number",
    blurb: "The cozy color-by-number game where every tile you fill bursts into art. Paint, collect rewards, and climb the weekly ranks.",
    url: "games/color-boom/index.html",
    cta: "Learn more"
  },
  {
    slug: "animals-merge",
    name: "Animals Merge",
    status: "dev",
    accent: "#5AA17A",
    icon: "games/animals-merge/assets/icon.png",
    banner: "games/animals-merge/assets/banner.jpg",
    genre: "Cozy merge puzzler",
    blurb: "Merge cute critters into bigger, rarer ones in this cozy merge puzzler. Still cooking — a first look is on the way.",
    url: ""
  },
  {
    // Placeholder for the second incoming title — swap name/genre/blurb/accent
    // once it's announced. Keeping it here reserves its slot in the grid,
    // roadmap and footer.
    slug: "codename-vector",
    name: "Codename Vector",
    status: "planned",
    accent: "#8E7BC4",
    icon: "",
    banner: "",
    genre: "Something new, drawn in vectors",
    blurb: "Our next experiment — a crisp, vector-styled world we're not ready to show just yet. Sign up to be first to see it.",
    url: ""
  }
];
