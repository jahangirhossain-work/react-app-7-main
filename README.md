# Utility Holding — React Web App

A polished, fully responsive corporate website for Utility Holding built with React, Vite, React Router, and Framer Motion. Includes English and Arabic with full RTL support, a professional loading screen, animated counters, and scroll-reveal animations.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:5173
```

## Build for production

```bash
npm run build
# Static files are in dist/
```

The build produces a single `dist/` folder you can deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.). No server needed.

A pre-built copy of `dist/` is included in this archive — you can also just serve that directly:

```bash
cd dist
python3 -m http.server 8000
# open http://localhost:8000
```

## Pages

| Route          | Page                            |
| -------------- | ------------------------------- |
| `/`            | Home                            |
| `/about`       | About Us                        |
| `/companies`   | Our Companies (index)           |
| `/business`    | Utility Business                |
| `/insulation`  | Utility Insulation              |
| `/fm`          | Utility Facility Management     |
| `/real-estate` | Utility Real Estate             |
| `/partners`    | Partners                        |
| `/contact`     | Contact                         |

## Languages

Toggle between English and Arabic from the header (`العربية` / `English`). Language preference persists in `localStorage`. The Arabic version flips the entire layout to RTL using CSS logical properties; accent words switch to a bolder, orange-colored Arabic typeface.

## Design

- **Typography** — Montserrat (English) + IBM Plex Sans Arabic, loaded from Google Fonts.
- **Brand colors** — Navy `#18264F` (text/dark sections), Orange `#EE4823` (accent/CTA).
- **Accent treatment** — Title weight contrast: base text at weight 500, accent words at weight 700. No italic.

## Features

- **Loading page** — Navy splash with the orange Utility "U" logo (pulse animation) and a sliding orange progress bar.
- **Page transitions** — Framer Motion AnimatePresence with subtle fade+rise between routes.
- **Scroll reveal** — Sections and cards animate in when they enter the viewport.
- **Animated counters** — Stats count up smoothly when their section is visible.
- **Hero zoom** — Slow Ken-Burns-style zoom on the homepage hero image.
- **Sticky header** — Background fades in as you scroll, mobile hamburger animates.
- **Hover micro-interactions** — Card lifts, CTA arrow rotates 45° on hover, leader photos go from grayscale to color.
- **Accessibility** — Semantic HTML, focus rings, `aria-label`s, full `prefers-reduced-motion` support.

## Editing content

All copy lives in **`src/data/translations.js`**. To change a string, find its key and edit both the `en` and `ar` versions. Use `/word/` syntax inside a translation value to mark accent words (e.g. `"Structured Solutions /Measurable/ Value."`).

## Responsive breakpoints

- **Desktop** — 1280px+ (full multi-column grids)
- **Tablet** — 980px and below
- **Mobile** — 640px and below
- **Small mobile** — 420px and below
