/* components.jsx — shared helpers + content data for Color Boom site */

const S = "assets/screens/"; // screen path prefix

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.colorboom.yuser";
const SOCIALS = {
  instagram: "https://www.instagram.com/colorboomers",
  facebook: "https://www.facebook.com/profile.php?id=61589805556275",
  tiktok: "https://www.tiktok.com/@trirongames"
};

// A floating app-screen card (cropped real screen)
function Screen({
  src,
  className = "",
  style,
  alt = "",
  eager = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen " + className,
    style: style
  }, /*#__PURE__*/React.createElement("img", {
    src: S + src,
    alt: alt,
    loading: eager ? "eager" : "lazy",
    decoding: "async"
  }));
}

// App store download badges (generic, non-trademark)
function AppBadges({
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "badges " + className
  }, /*#__PURE__*/React.createElement("a", {
    className: "badge",
    href: PLAY_STORE_URL,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Get it on Google Play"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
    className: "bt"
  }, /*#__PURE__*/React.createElement("small", null, "Get it on"), /*#__PURE__*/React.createElement("b", null, "Google Play"))));
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, children);
}

// Brand social icons (real logos, not emoji)
function IconInstagram({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.845 0-3.196.016-3.586.061-4.86.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.795.646-1.439 1.44-1.439.793 0 1.44.644 1.44 1.439z"
  }));
}
function IconFacebook({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
  }));
}
function IconTikTok({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
  }));
}

// little confetti dot field, deterministic
function Confetti({
  items
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, items.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: d.sq ? "sq" : "dot",
    style: {
      width: d.s,
      height: d.s,
      background: d.c,
      top: d.t,
      left: d.l,
      right: d.r,
      bottom: d.b,
      opacity: d.o ?? 1,
      transform: d.rot ? `rotate(${d.rot}deg)` : undefined
    }
  })));
}
const HUES = ["var(--gold)", "var(--blue)", "var(--green)", "var(--pink)", "var(--purple)", "var(--primary)"];

// Feature rows content
const FEATURES = [{
  eyebrow: "Color by number",
  title: "Paint by number,\nreimagined as art.",
  body: "Pick a canvas, tap the matching color, and watch intricate line-art bloom into a finished masterpiece. Hundreds of mandalas, florals and licensed packs — from beginner-easy to deeply detailed.",
  pills: [["🎨", "1,200+ canvases"], ["✨", "Magic-tile fills"], ["🆕", "New drops weekly"]],
  screen: "library",
  flip: false,
  float: {
    em: "🖼️",
    big: "Library",
    small: "1,200+ canvases",
    pos: {
      top: "4%",
      left: "clamp(-10%, -3vw, 2%)"
    }
  },
  blob: "var(--purple)"
}, {
  eyebrow: "Daily rewards",
  title: "Streaks &\nrewards that stick.",
  body: "Log in daily to grow your streak, claim coins and gems, and unlock rarer paint boosters. Daily missions hand you bite-size goals so every session pays off.",
  pills: [["🔥", "Streak boosters"], ["🪙", "Daily coins"], ["🎁", "Weekly calendar"]],
  screen: "daily-rewards",
  flip: true,
  float: {
    em: "🔥",
    big: "Day 2",
    small: "Streak active!",
    pos: {
      bottom: "8%",
      right: "clamp(-8%, -3vw, 2%)"
    }
  },
  blob: "var(--primary)",
  mini: "missions"
}, {
  eyebrow: "Compete",
  title: "Climb the\nweekly ranks.",
  body: "Paint fast, paint beautifully, and rise up the weekly leaderboard. Earn badges, stars and frames that show off your style as you climb the ranks.",
  pills: [["🏆", "Weekly ranks"], ["⭐", "Earn stars"], ["🏅", "Badges & frames"]],
  screen: "ranks",
  flip: false,
  float: {
    em: "🏆",
    big: "#54",
    small: "You're rising!",
    pos: {
      top: "6%",
      right: "clamp(-8%, -3vw, 2%)"
    }
  },
  blob: "var(--gold)",
  mini: "profile"
}, {
  eyebrow: "Make it yours",
  title: "Themes, effects\n& fill magic.",
  body: "Switch themes, swap highlight colors, and equip fill effects like Sparkle, Ripple and Splash. Color Boom adapts to your vibe — light, sunset or midnight.",
  pills: [["🎨", "5 themes"], ["💫", "Fill effects"], ["🖌️", "Custom frames"]],
  screen: "settings",
  flip: true,
  float: {
    em: "💫",
    big: "Sparkle",
    small: "Effect equipped",
    pos: {
      bottom: "6%",
      left: "clamp(-8%, -3vw, 2%)"
    }
  },
  blob: "var(--blue)",
  mini: "game-shop"
}];

// Claudiu's avatar (illustrated portrait).
function DevAvatar({
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "assets/claudiu.png",
    className: "dev-avatar",
    style: style,
    alt: "Claudiu T\u0103nas\u0103"
  });
}
Object.assign(window, {
  Screen,
  AppBadges,
  Eyebrow,
  Confetti,
  HUES,
  FEATURES,
  DevAvatar,
  PLAY_STORE_URL,
  SOCIALS,
  IconInstagram,
  IconFacebook,
  IconTikTok
});
/* hero.jsx — Spotlight hero (screenshot-cluster, app-landing style) */

function HeroD() {
  return /*#__PURE__*/React.createElement("div", {
    className: "heroD"
  }, /*#__PURE__*/React.createElement("div", {
    className: "copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Color by number \xD7 Magic tiles"), /*#__PURE__*/React.createElement("h1", {
    className: "wordmark"
  }, "Tap a color,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "pop"
  }, "boom"), " \u2014 it's art."), /*#__PURE__*/React.createElement("p", {
    className: "hd-tag"
  }, "Every tile you fill bursts into art."), /*#__PURE__*/React.createElement(AppBadges, {
    className: "hd-badges"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mt"
  }, "\uD83C\uDFA8 ", /*#__PURE__*/React.createElement("b", null, "1,200+"), " canvases and counting"))), /*#__PURE__*/React.createElement("div", {
    className: "spot-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spot-card sc1"
  }, /*#__PURE__*/React.createElement(Screen, {
    src: "profile.png",
    className: "bob",
    alt: "My Profile screen",
    eager: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "spot-card sc2"
  }, /*#__PURE__*/React.createElement(Screen, {
    src: "library.png",
    className: "bob s2",
    alt: "Art Library screen",
    eager: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "spot-card sc3"
  }, /*#__PURE__*/React.createElement(Screen, {
    src: "ranks.png",
    className: "bob s3",
    alt: "Weekly Ranks screen",
    eager: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "hd-puck bob s2",
    style: {
      top: "2%",
      left: "0%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pi"
  }, "\uD83D\uDD25"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, "Streak"), /*#__PURE__*/React.createElement("b", null, "Day 2"))), /*#__PURE__*/React.createElement("div", {
    className: "hd-puck bob s3",
    style: {
      bottom: "4%",
      right: "-2%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pi"
  }, "\uD83E\uDE99"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("small", null, "Earned"), /*#__PURE__*/React.createElement("b", null, "+1,000")))));
}
function ScrollCue() {
  return /*#__PURE__*/React.createElement("a", {
    className: "scroll-cue",
    href: "#features",
    "aria-label": "See more features"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sc-label"
  }, "More features"), /*#__PURE__*/React.createElement("span", {
    className: "chev"
  }, "\u2304"));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(HeroD, null)), /*#__PURE__*/React.createElement(ScrollCue, null));
}
Object.assign(window, {
  Hero
});
/* sections.jsx — nav, proof, features, gamification, studio, cta, footer */

function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "back-link",
    href: "../../index.html"
  }, "\u2190 ", /*#__PURE__*/React.createElement("span", {
    className: "back-label"
  }, "TrironGames")), /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("span", null, "Color Boom")), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#game"
  }, "The Game"), /*#__PURE__*/React.createElement("a", {
    href: "#features"
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    href: "#download"
  }, "Download")), /*#__PURE__*/React.createElement("button", {
    className: "nav-cta",
    onClick: () => document.getElementById("download")?.scrollIntoView()
  }, "Get the app"))));
}
function Proof() {
  const items = [{
    big: "1,200+",
    lbl: "Canvases\nto paint"
  }, {
    big: "5",
    lbl: "Themes &\nfill effects"
  }, {
    big: "Weekly",
    lbl: "New canvas\ndrops"
  }, {
    big: "Solo",
    lbl: "Indie-made\nwith ❤"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "proof reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-row"
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "proof-item"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, it.big), /*#__PURE__*/React.createElement("div", {
    className: "lbl",
    style: {
      whiteSpace: "pre-line"
    }
  }, it.lbl))), i < items.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "proof-sep"
  }))))));
}
function FeatureRow({
  f,
  idx
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "frow reveal" + (f.flip ? " flip" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-copy"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, f.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      whiteSpace: "pre-line"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", null, f.body), /*#__PURE__*/React.createElement("div", {
    className: "fr-pills"
  }, f.pills.map((p, i) => /*#__PURE__*/React.createElement("span", {
    className: "fr-pill",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "em"
  }, p[0]), p[1])))), /*#__PURE__*/React.createElement("div", {
    className: "fr-media"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fr-blob",
    style: {
      background: f.blob,
      opacity: .18
    }
  }), f.mini && /*#__PURE__*/React.createElement(Screen, {
    src: f.mini + ".png",
    className: "bob s3",
    style: {
      position: "absolute",
      width: 150,
      zIndex: 1,
      ...(f.flip ? {
        top: "2%",
        right: "2%"
      } : {
        bottom: "2%",
        left: "2%"
      })
    },
    alt: ""
  }), /*#__PURE__*/React.createElement(Screen, {
    src: f.screen + ".png",
    className: "bob",
    style: {
      zIndex: 3
    },
    alt: f.eyebrow
  }), /*#__PURE__*/React.createElement("div", {
    className: "float-card bob s2",
    style: {
      ...f.float.pos
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "em"
  }, f.float.em), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 18
    }
  }, f.float.big), /*#__PURE__*/React.createElement("small", null, f.float.small)))));
}
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head center reveal",
    style: {
      marginBottom: "clamp(50px,7vw,90px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Why painters stay"), /*#__PURE__*/React.createElement("h2", null, "A little ritual that feels like magic."), /*#__PURE__*/React.createElement("p", null, "Color Boom blends the calm of paint-by-number with the spark of a tile-matching game \u2014 wrapped in rewards that make every day worth opening.")), FEATURES.map((f, i) => /*#__PURE__*/React.createElement(FeatureRow, {
    key: i,
    f: f,
    idx: i
  }))));
}
function Gamification() {
  const tiles = [{
    ic: "🪙",
    cls: "ic-gold",
    h: "Coins",
    p: "Spend on canvases, hints and paint boosters in the in-game shop."
  }, {
    ic: "💎",
    cls: "ic-blue",
    h: "Gems",
    p: "Premium currency for art packs, frames and rare fill effects."
  }, {
    ic: "🔥",
    cls: "ic-pink",
    h: "Streaks",
    p: "Keep your daily streak alive for ever-rarer rewards."
  }, {
    ic: "🏆",
    cls: "ic-green",
    h: "Ranks",
    p: "Battle for the top of the weekly global leaderboard."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "game",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gband reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head",
    style: {
      marginBottom: 34,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "A whole little economy"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(1.9rem,3.6vw,2.9rem)"
    }
  }, "Earn it, spend it, show it off.")), /*#__PURE__*/React.createElement("div", {
    className: "gband-grid"
  }, tiles.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "gtile reveal",
    key: i,
    style: {
      transitionDelay: `${i * 0.07}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic " + t.cls
  }, t.ic), /*#__PURE__*/React.createElement("h3", null, t.h), /*#__PURE__*/React.createElement("p", null, t.p)))))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "download",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      width: 120,
      height: 120,
      background: "rgba(255,255,255,.14)",
      top: "-30px",
      left: "-20px"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sq",
    style: {
      width: 60,
      height: 60,
      background: "rgba(255,255,255,.12)",
      bottom: "20px",
      left: "32%",
      transform: "rotate(20deg)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      width: 26,
      height: 26,
      background: "rgba(255,255,255,.5)",
      top: "30%",
      left: "46%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff"
    }
  }, "Free to play")), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 14
    }
  }, "Your next favorite way to unwind."), /*#__PURE__*/React.createElement("p", null, "Download Color Boom free on Google Play. Your first masterpiece is one tap away."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(AppBadges, null))), /*#__PURE__*/React.createElement("div", {
    className: "cta-phone"
  }, /*#__PURE__*/React.createElement(Screen, {
    src: "my-feed.png",
    className: "bob",
    alt: "Start painting"
  }))))));
}
function Footer() {
  const cols = [{
    h: "Game",
    links: [["Features", "#features"], ["Canvases", "#features"], ["Daily rewards", "#game"], ["Leaderboards", "#game"]]
  }, {
    h: "Studio",
    links: [["About us", "../../index.html#studio"], ["Contact", "mailto:trirongames@gmail.com"]]
  }, {
    h: "Legal",
    links: [["Privacy Policy", "../../legal/privacy-policy.html"], ["Terms", "../../legal/terms.html"], ["Delete Account", "../../legal/delete-account.html"]]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "../../index.html"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("span", null, "TrironGames", /*#__PURE__*/React.createElement("small", null, "Studio"))), /*#__PURE__*/React.createElement("p", null, "The cozy color-by-number game where every tile bursts into art."), /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: window.SOCIALS.instagram,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement(IconInstagram, null)), /*#__PURE__*/React.createElement("a", {
    href: window.SOCIALS.tiktok,
    target: "_blank",
    rel: "noopener",
    "aria-label": "TikTok"
  }, /*#__PURE__*/React.createElement(IconTikTok, null)), /*#__PURE__*/React.createElement("a", {
    href: window.SOCIALS.facebook,
    target: "_blank",
    rel: "noopener",
    "aria-label": "Facebook"
  }, /*#__PURE__*/React.createElement(IconFacebook, null)))), cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("h4", null, c.h), /*#__PURE__*/React.createElement("ul", null, c.links.map((l, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement("a", {
    href: l[1]
  }, l[0]))))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bot"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 TrironGames. Made with \uD83C\uDFA8 and a lot of coffee."), /*#__PURE__*/React.createElement("span", null, "Beta 1.2.32"))));
}
Object.assign(window, {
  Nav,
  Proof,
  Features,
  Gamification,
  CTA,
  Footer
});
/* app.jsx — root. Defaults (theme petal, highlight #F97A2E, confetti on)
   are baked into styles.css :root — no JS overrides needed. */

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-decor"
  }, /*#__PURE__*/React.createElement("i", {
    className: "blob-a"
  }), /*#__PURE__*/React.createElement("i", {
    className: "blob-b"
  }), /*#__PURE__*/React.createElement("i", {
    className: "blob-c"
  }), /*#__PURE__*/React.createElement("i", {
    className: "blob-d"
  })), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Gamification, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
