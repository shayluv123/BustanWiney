@AGENTS.md

# יקב בוסתן הגליל — Bustan HaGalil Winery site

Marketing site for the winery. Next.js 16 (App Router, TypeScript) + Tailwind CSS v4. Fully static with no database, hosted on Vercel from GitHub `shayluv123/BustanWiney` (`main`).

## Languages & routing
- Hebrew is the default: served at `/` with no prefix, RTL. English is at `/en`, LTR.
- `proxy.ts` (Next 16's replacement for middleware) rewrites prefix-less paths to `app/[lang]` with `lang=he` and 308-redirects `/he/*` to `/*`.
- Every route lives under `app/[lang]/` (root layout included). The layout sets `<html lang dir>`.
- Build links with `localePath(lang, path)` from `lib/i18n.ts`; never hardcode `/he` or `/en`.
- Unknown paths: `app/[lang]/[...rest]` calls `notFound()`, which renders `app/[lang]/not-found.tsx` (uses `next/root-params`).

## Page structure
- Landing (`app/[lang]/page.tsx`): Hero, then About (`#about`), then WineColors (`#wines`, cards for red/white/rose), then Contact (`#contact`, email only).
- No header or footer, by the owner's choice.
- Wine color pages: `app/[lang]/wines/[color]/page.tsx`, for `red | white | rose`. Each has a back link, two wines in alternating bottle/text rows, the email, and a per-color gradient background.
- Design source: Figma file `GB5pgT6ikuahcJhKWQnkAZ` (the owner's copy). Home frame `110:1784`; red `110:1805`, rose `110:1841`, white `110:1823`. The owner's Figma plan allows only about 20 MCP calls a month, so use them sparingly.

## Content
- All text is in `content/he.ts` and `content/en.ts`, typed by `Dictionary` in `content/types.ts`. Edit text there, not in components.
- Both files must stay in sync; TypeScript enforces the shape.
- Hebrew text comes from the Figma design. English is a draft translation awaiting the owner's review.
- Wine descriptions are `RichText`: strings plus `{ latin }` parts, rendered in Crimson Pro bold.

## Styling
- Tailwind with logical properties (`ms-`, `pe-`, `text-start`) so layouts flip correctly between RTL and LTR.
- Design tokens are in `app/globals.css` `@theme`: `night`, `wine` (page bg), `copper` (text), `copper-muted` (email); fonts are `font-hebrew` (body text, wine texts and the back link), `font-latin` (Crimson Pro, for Latin terms in wine texts) and `font-typewriter` (Special Elite, for the email, because the Hebrew font has no Latin letters).
- The Hebrew font "Fb MechonatDfus" is loaded with `next/font/local` from `app/fonts/` (a commercial font supplied by the owner).
- Images are in `public/images` and come from the owner's `assets/` exports. `hero.png` is the full composed hero. Render bottles through `components/Bottle.tsx`.

## Commands
```bash
npm run dev     # http://localhost:3000
npm run build   # must pass; all pages prerendered for he + en
npm run lint
```
`NEXT_PUBLIC_SITE_URL` sets the canonical, sitemap and robots base URL (set it in Vercel).
