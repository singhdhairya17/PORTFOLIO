# PORTFOLIO

Personal portfolio site for **Dhairya Singh** — B.Tech Computer Science student (final year). Built as a fast, single-page React app with smooth scrolling, dark mode, and a downloadable résumé.

**Repository:** [github.com/singhdhairya17/PORTFOLIO](https://github.com/singhdhairya17/PORTFOLIO)

## Features

- **Single-page layout** — Home, About, Skills, Projects, Experience, Education, Achievements, and Contact in one scrollable view
- **Smooth scroll navigation** — Header links and in-page anchors; active section highlighting while scrolling
- **Dark / light theme** — Toggle in the navbar (persists for the session via `body` class)
- **Scroll progress bar** — Thin gradient indicator at the top of the viewport
- **Floating widgets** — Quick stats, social links, jump-to-section controls, and back-to-top (responsive: rail on wide screens, compact strip on smaller viewports)
- **Résumé download** — PDF served from `public/assets/`
- **Project links** — GitHub repositories for featured work (no live demos until deployed)

## Tech stack

| Area        | Choice                          |
| ----------- | ------------------------------- |
| UI          | React 18                        |
| Tooling     | Vite 6                          |
| Routing     | React Router 6 (SPA + redirects)|
| Styling     | Plain CSS (design tokens, responsive) |
| Hosting     | [Vercel](https://vercel.com) (recommended) |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (20+ recommended)
- npm (comes with Node)

### Install

```bash
git clone https://github.com/singhdhairya17/PORTFOLIO.git
cd PORTFOLIO
npm install
```

### Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm run dev`  | Start Vite dev server (hot reload) |
| `npm run build`| Production build → `dist/`     |
| `npm run preview` | Serve `dist/` locally for checks |

Development server is usually at `http://localhost:5173`.

## Project structure

```
PORTFOLIO/
├── public/
│   ├── assets/dhairya_resume.pdf   # Résumé (replace to update download)
│   └── images/avatar.png           # Profile image
├── src/
│   ├── pages/                      # Section components (About, Projects, …)
│   ├── App.jsx                     # Routes (SPA fallback to `/`)
│   ├── Layout.jsx                  # Nav, footer, scroll spy, theme
│   ├── PageWidgets.jsx             # Stats rail, jump controls, scroll-to-top
│   ├── ScrollProgress.jsx          # Top progress bar
│   ├── index.css                   # Global styles
│   └── main.jsx                    # React entry
├── index.html                      # Vite HTML shell
├── vite.config.js
├── vercel.json                     # SPA rewrite for client-side routing
└── package.json
```

## Deploying (Vercel)

1. Push this repo to GitHub (already the default remote for this project).
2. In [Vercel](https://vercel.com), **Import** the repository.
3. Framework preset: **Vite** (or “Other” with **Build Command** `npm run build` and **Output Directory** `dist`).
4. Deploy. Use the production URL on your résumé and profiles.

`vercel.json` includes a catch-all rewrite to `index.html` so direct URLs and refreshes work with the SPA.

## Customization

- **Content:** Edit files under `src/pages/` and `src/Layout.jsx`.
- **Colors:** CSS variables in `src/index.css` (`:root` and `body.dark`).
- **Avatar / PDF:** Replace files in `public/images/` and `public/assets/` (keep the same paths or update references in `Home.jsx` and `Layout.jsx`).

## License

Personal portfolio — all rights reserved unless you choose to add an open license.

## Author

**Dhairya Singh**

- GitHub: [@singhdhairya17](https://github.com/singhdhairya17)
- LinkedIn: [linkedin.com/in/dhairya-singh-b75361303](https://www.linkedin.com/in/dhairya-singh-b75361303)
