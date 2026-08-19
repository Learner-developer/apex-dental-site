# Apex Dental & Orthodontic Clinic — Marketing Site

Single-page Astro site for Apex Dental, Vidyaranyapura, Bengaluru.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:4321

## Build

```bash
pnpm build
pnpm preview
```

## Deploy (Cloudflare Pages)

Build command: `pnpm build`  
Output directory: `dist`  
Node version: 22+

```bash
pnpm build
npx wrangler pages deploy dist --project-name apex-dental-site
```

## Before publishing checklist

1. Confirm Dr. Monika's qualifications (`src/components/Doctors.astro` — TODO comment).
2. Set `SHOW_BEFORE_AFTER_GALLERY = true` in `src/data/site.ts` only after patient photo consent is confirmed.

## Contact links (verified)

- WhatsApp: https://wa.me/919886963633
- Phone: tel:+919886963633
