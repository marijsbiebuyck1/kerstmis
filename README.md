# Kerst - Startscherm ( static )

Lightweight static reproduction of the Figma `Startscherm` (node 5:12).

Files added:

- `index.html` — the static page using Figma-exported SVG URLs and Google Fonts.
- `styles.css` — styling to match layout, colors and spacing from the design.
- `dev-server.js` — zero-dependency Node dev server so `npm run dev` works.
- `package.json` — simple manifest with `dev` script.

How to preview

Option A — run with npm (recommended):

1. Make sure you have Node.js installed (v14+).
2. From the project root (`/Users/marijsbiebuyck/Kerstcadeau`) run:

```bash
npm run dev
```

3. Open http://localhost:5173 in your browser.

This uses the included `dev-server.js` so you don't need to install extra packages.

Option B — open `index.html` directly

Open `index.html` in your browser. If the Figma asset server is running locally (as in the Figma export), images will load from `http://localhost:3845/assets/...`.

If the images don't load, replace the `src` attributes in `index.html` with your local copies or public URLs.

Next steps (optional):

- Integrate into your app framework (React/Vue) and convert styles to your project's styling system.
- Add small animations and accessible focus states for the buttons.
# Kerst - Startscherm (static)

Lightweight static reproduction of the Figma `Startscherm` (node 5:12).

Files added:

- `index.html` — the static page using Figma-exported SVG URLs and Google Fonts.
- `styles.css` — styling to match layout, colors and spacing from the design.

How to preview

Open `index.html` in your browser. If the Figma asset server is available locally (as in the Figma export), images will load from `http://localhost:3845/assets/...`.

If the images don't load, replace the `src` attributes in `index.html` with your local copies or public URLs.

Next steps (optional):

- Integrate into your app framework (React/Vue) and convert styles to your project's styling system.
- Add small animations and accessible focus states for the buttons.
