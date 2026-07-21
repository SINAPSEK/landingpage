# SINAPSEK — landing page

Marketing site for SINAPSEK, a two-person AI engineering studio. Built with
Vite, React, TypeScript, Tailwind CSS and Framer Motion. Static output —
deployable to any static host.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # type-checks then builds to dist/
npm run preview # serve the production build locally
```

## Deploy

### Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (Vercel detects both automatically).
3. Deploy — every push to the connected branch gets a preview/production
   deployment.

Or from the CLI:

```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages

1. Set `base` in `vite.config.ts` to your repo name, e.g.:
   ```ts
   export default defineConfig({
     base: '/landingpage/',
     plugins: [react()],
   });
   ```
2. Build and publish the `dist/` folder to the `gh-pages` branch, e.g. with
   [`gh-pages`](https://www.npmjs.com/package/gh-pages):
   ```bash
   npm i -D gh-pages
   npx gh-pages -d dist
   ```
3. In the repo settings, point GitHub Pages at the `gh-pages` branch.

## Replacing placeholders

| Placeholder | Where | Replace with |
| --- | --- | --- |
| `mailto:hello@sinapsek.com?subject=Automation%20audit` | `src/constants.ts` (`BOOK_URL`) | Calendly / Cal.com booking URL |
| `hello@sinapsek.com` | `src/constants.ts` (`CONTACT_EMAIL`) | real contact email |
| `https://github.com/SINAPSEK` | `src/constants.ts` (`GITHUB_URL`) | real GitHub org URL |
| `https://sinapsek.com` | `index.html` (`og:url`) | real production domain |

All CTA buttons import `BOOK_URL` from `src/constants.ts`, so updating that
one constant repoints every "Book a call" / "Book a free automation audit"
button on the site.

## Structure

```
src/
  components/   one component per landing page section
  lib/motion.ts shared Framer Motion variants
  constants.ts  placeholder links (see table above)
  App.tsx       assembles all sections
```
