# יקב בוסתן הגליל — Bustan HaGalil Winery

Bilingual (Hebrew default, English) marketing site. Next.js App Router + Tailwind CSS, fully static, hosted on Vercel.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Structure

- `/` Hebrew (RTL), `/en` English (LTR). `proxy.ts` rewrites prefix-less paths to `app/[lang]` with `lang=he` and redirects `/he/*` to `/*`.
- `app/[lang]/page.tsx` — landing: Hero, About, Wines (red / white / rosé), Contact.
- `app/[lang]/wines/[color]/page.tsx` — wine color pages (`/wines/red`, `/en/wines/red`, …).
- `content/he.ts`, `content/en.ts` — all site text; `content/types.ts` defines the shape.
- `components/` — page sections, header, footer, language switcher.

## Configuration

- `NEXT_PUBLIC_SITE_URL` — production URL (used for canonical links, sitemap, robots). Set it in Vercel project settings.
