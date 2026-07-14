# TrironGames site

Static site for TrironGames / Color Boom (homepage, game landing page, legal pages).

## Rebuilding the game page JS

The Color Boom page (`games/color-boom/index.html`) loads a precompiled bundle,
`games/color-boom/app.bundle.js`, built from the JSX sources
(`components.jsx`, `hero.jsx`, `sections.jsx`, `app.jsx`).

After editing any of those `.jsx` files, rebuild from the repo root:

```
npm install   # first time only
npm run build
```

and commit the regenerated `app.bundle.js` alongside the source change —
the live page loads the bundle, not the `.jsx` files.

`tweaks-panel.jsx` and `image-slot.js` are design-tool scaffolding kept for
local editing only; they are not shipped to visitors.
