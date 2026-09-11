# TrironGames site

The studio site for **TrironGames** — home page, a landing page per game, plus
legal, contact and press pages. Live at
<https://yuseres.github.io/trirongames/>.

**No build step.** Plain HTML, CSS and JS. Edit a file, refresh the browser.

---

## Preview it locally

From the repo root:

```bash
py -m http.server 8000
```

then open <http://localhost:8000/>. (Any static server works — `npx serve`,
VS Code Live Server, etc.)

---

## Everything is driven by two data files

| File | What it controls |
|------|------------------|
| [`data/games.js`](data/games.js) | The game catalogue — every game's name, status, colour, blurb and store links. The home page, `games.html`, the roadmap board and the footer all render from this. |
| [`data/studio.js`](data/studio.js) | Studio-wide facts — name, email, socials, the studio story, the "maker" card. |

Both files have a commented header explaining every field.

### Add a game

1. Copy `games/_TEMPLATE/` to `games/<your-slug>/`.
2. Fill in `games/<your-slug>/game.config.js` (see
   `games/color-boom/game.config.js` for a complete, commented example) and drop
   art into `games/<your-slug>/assets/`.
3. In `games/<your-slug>/index.html`, replace every `SLUG` / `Game Name` /
   description / image URL.
4. Add one entry to the array in `data/games.js`.
5. Add one `<url>` line to `sitemap.xml`.

A game with only `slug` + `heroBody` in its config renders a tidy "coming soon"
page automatically. Fill in the rest when it's ready.

### Change a game's status

Edit that game's `status` in `data/games.js` — one of `live`, `beta`, `dev`,
`planned`, `paused`. That single value updates the card pill, the roadmap column
and the badge on the game's own page.

### Edit studio info

Everything (email, socials, the story text, the maker card) lives in
`data/studio.js`.

---

## How it's put together

```
assets/css/
  tokens.css        colours, dark-mode palette, radii, fonts
  base.css          reset, typography, layout primitives, ambient decor
  components.css    nav + mobile menu, buttons, cards, pills, footer, theme toggle
  home.css          home page + games index
  game.css          the shared game-landing template
  legal.css         the legal documents
  pages.css         contact / press / 404
assets/js/
  site.js           builds the nav + footer on every page, runs the dark-mode toggle
  home.js           renders the games grid + roadmap board
  game.js           renders a game landing page from its game.config.js
```

Each page sets a small `window.PAGE = { base, kind, current }` object and loads
`site.js`; `base` is the relative path back to the site root (`""`, `"../"` or
`"../../"`).

Dark mode follows the device by default; the nav toggle overrides it and the
choice is saved in `localStorage`.

---

## Notes

- `app-ads.txt` (repo root) is required by AdMob at the project path. The
  identical file at the **domain** root is served from a separate repo
  (`yuseres/yuseres.github.io`), checked out here as `yuseres.github.io/` and
  git-ignored.
- Fonts load from Google Fonts; everything else is local.
