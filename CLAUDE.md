# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing landing page for SINAPSEK, a two-person AI engineering studio. Vite + React 19 + TypeScript + Tailwind CSS + Framer Motion. Static single-page site, no backend, no router — deployable to any static host.

## Commands

```bash
npm install
npm run dev       # start dev server
npm run build      # tsc -b (type-check via project refs) then vite build to dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint (rules: react/rules-of-hooks, react/only-export-components)
```

There is no test suite configured. To type-check only, run `tsc -b`.

## Architecture

- `src/App.tsx` assembles the whole page as a flat list of section components rendered in order — there is no routing. Page order = component order in this file.
- `src/components/` — one component per landing page section (Navbar, Hero, Gap, Services, Audiences, Process, WhyUs, Pricing, FAQ, FinalCTA, Footer). Adding/removing/reordering a section means editing this directory and wiring it into `App.tsx`.
- `src/lib/motion.ts` — shared Framer Motion variants (`fadeUp`, `staggerContainer`, `viewportOnce`) used across section components for scroll-in animation. Reuse these rather than defining new variants per component unless the animation genuinely differs.
- `src/constants.ts` — the site's only placeholder links: `BOOK_URL` (mailto, used by every "Book a call" CTA button), `CONTACT_EMAIL`, `GITHUB_URL`. Real content changes to these (e.g. swapping in a Calendly link) should happen here, not by editing individual components.
- `src/components/NeuralField.tsx` is a standalone canvas/visual effect component (219 lines, largest in the tree) — treat it as self-contained decorative logic, not a pattern to replicate elsewhere.
- `index.html` carries `og:url` and other meta placeholders tied to the production domain.

## Notes

- Tailwind config is in `tailwind.config.js` / `postcss.config.js` — standard setup, no custom design tokens beyond what's there.
- `tsconfig.json` is a project-references root pointing at `tsconfig.app.json` (app code) and `tsconfig.node.json` (Vite config); run `tsc -b` (not plain `tsc`) so both are checked.
- See `README.md` for deployment instructions (Vercel, GitHub Pages) and the full placeholder-replacement table.
