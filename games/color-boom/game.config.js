/* ============================================================
   games/color-boom/game.config.js
   Everything on the Color Boom landing page. Edit this file
   (and drop art in ./assets/) — no build step.

   `slug` MUST match the entry in /data/games.js — the game's
   name, accent colours, status and store links are read from
   there and merged in automatically.
   ============================================================ */
window.GAME_CONFIG = {
  slug: "color-boom",

  metaTitle: "Color Boom — Tap a color, boom, it's art",

  /* ---- Hero ---- */
  eyebrow: "Color by number × Magic tiles",
  heroTitle: "Tap a color, *boom* — it's art.",   // *word* renders in the accent colour
  heroBody: "The cozy color-by-number game where every tile you fill bursts into art.",
  heroNote: "🎨 <b>1,200+</b> canvases and counting",
  heroShots: ["profile.png", "library.png", "ranks.png"],   // from ./assets/screens/
  heroPucks: [
    { icon: "🔥", label: "Streak", value: "Day 2" },
    { icon: "🪙", label: "Earned", value: "+1,000" }
  ],

  /* ---- Proof strip ---- */
  stats: [
    { big: "1,200+", label: "Canvases\nto paint" },
    { big: "5",       label: "Themes &\nfill effects" },
    { big: "Weekly",  label: "New canvas\ndrops" },
    { big: "Solo",    label: "Indie-made\nwith ❤" }
  ],

  /* ---- Features section ---- */
  featuresEyebrow: "Why painters stay",
  featuresTitle: "A little ritual that feels like magic.",
  featuresLead:
    "Color Boom blends the calm of paint-by-number with the spark of a tile-matching " +
    "game — wrapped in rewards that make every day worth opening.",

  features: [
    {
      eyebrow: "Color by number",
      title: "Paint by number, reimagined as art.",
      body:
        "Pick a canvas, tap the matching color, and watch intricate line-art bloom into a " +
        "finished masterpiece. Hundreds of mandalas, florals and licensed packs — from " +
        "beginner-easy to deeply detailed.",
      pills: [["🎨", "1,200+ canvases"], ["✨", "Magic-tile fills"], ["🆕", "New drops weekly"]],
      shot: "library.png",
      floatCard: { icon: "🖼️", big: "Library", small: "1,200+ canvases" }
    },
    {
      eyebrow: "Rewards & ranks",
      title: "Streaks, rewards & weekly ranks.",
      body:
        "Log in daily to grow your streak, claim coins and gems, and knock out bite-size " +
        "missions. Then paint fast and beautifully to climb the weekly leaderboard, earning " +
        "badges, stars and frames along the way.",
      pills: [["🔥", "Streak boosters"], ["🎁", "Daily rewards"], ["🏆", "Weekly ranks"]],
      shot: "daily-rewards.png",
      floatCard: { icon: "🏆", big: "#54", small: "You're rising!" }
    }
  ],

  /* ---- Closing CTA ---- */
  ctaTitle: "Tap a color. Watch it boom.",
  ctaBody: "Color Boom is free on Google Play. Your first canvas is one tap away."
};
