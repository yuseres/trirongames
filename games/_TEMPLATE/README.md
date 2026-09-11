# New game starter

Copy this whole folder to `games/<your-slug>/`, then:

1. **`game.config.js`** — fill in the page content. Every field is
   documented in `games/color-boom/game.config.js` (a complete example).
   For a game that isn't playable yet, keep it minimal (just `slug` +
   `heroBody`) and the page renders a "coming soon" layout automatically.

2. **`assets/`** — drop your art here:
   - `logo.png` — square icon (used in the nav + cards)
   - `promo-art.png` or `banner.png` — wide key art (home feature card + OG image)
   - `screens/` — phone screenshots referenced from `game.config.js`

3. **`index.html`** — replace every `SLUG`, `Game Name`, the description
   and the `theme-color`/OG image URLs. Nothing else to change.

4. **`/data/games.js`** — add one entry (see the header of that file).
   `slug` must match your folder name and the `slug` in `game.config.js`.

That's it — no build step. Preview locally with `py -m http.server`
from the repo root and open `http://localhost:8000/`.
