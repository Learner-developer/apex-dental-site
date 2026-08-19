# Build Brief: Demo Website for Apex Dental & Orthodontic Clinic

## Context — read this first
This is a high-priority demo for a lead who explicitly said other people have shown her website samples before and she didn't like any of them. The #1 goal is that this must NOT feel like a generic template. Every piece of content below is real, pulled directly from her actual Google Business listing — use it as-is, don't replace it with generic placeholder copy.

## Real business data (use exactly as given, don't invent alternatives)

- **Business name**: Apex Dental & Orthodontic Clinic
- **Tagline (hers, verbatim — use as the hero headline or subline)**: "Where Quality Meets Affordability"
- **Rating**: 5.0 stars, 482 Google reviews — this is the single strongest trust signal available; it should be visually prominent near the top of the page, not buried in a footer
- **Doctor name**: Dr. Jyoti (referenced repeatedly by name in patient reviews — feature her by name, not just "our dentist")
- **Address**: 2, Amba Bhavani Temple Rd, near Sambhram Institute of Technology, Vidyaranyapura Post, BHEL Layout, Chickbetahalli, Bengaluru, Karnataka 560097
- **Phone**: +91 98869 63633
- **Hours**: Monday–Saturday, 9:30 AM–2:00 PM and 4:30 PM–8:30 PM (split shift — display as two time blocks, don't collapse into one range). Closed Sunday.
- **Specialties patients specifically mention** (weight these higher than generic "general dentistry" copy): orthodontics/braces treatment, dental implants (one review specifically praises a "painless implant"). Still include general dentistry/cleaning as a standard third service card, but braces and implants are the two to lead with since real patients volunteered them unprompted.
- **Recurring themes in real patient reviews** — use these as the tone and structure for testimonial/trust copy, but do NOT copy any review text verbatim (copyright — paraphrase into short, original phrases): painless procedures, professional and caring staff, clean/hygienic/well-organized clinic, affordability without compromising quality, clear explanation of treatment before starting.

## What NOT to do (this is what likely killed the previous pitches)

- No stock photography of generic smiling models — if we don't have real clinic/team photos yet, use clean icon-based or illustration-based service graphics instead, never fake "patient" stock photos. Flag clearly in the README that real photos from her Google Business Profile or a quick phone-shoot at the clinic would upgrade this significantly, and ask before launch.
- No generic dental-template copy ("Your Smile is Our Priority," "State of the Art Facility," etc.) — every headline should trace back to either her real tagline, her real specialties, or paraphrased real patient sentiment above.
- No cluttered clinical/sterile look (harsh white backgrounds, stock cross/tooth icons everywhere) — research into current well-regarded dental sites consistently favors calming, warm palettes (soft blues, teals, off-whites) over sterile clinical white, and real/human photography over illustration where possible.

## Page structure (single page is fine for a demo — don't over-build)

1. **Hero**: Clinic name, her tagline as the headline, primary CTA button ("Book on WhatsApp" → wa.me link using +91 98869 63633, pre-filled message like "Hi, I'd like to book an appointment at Apex Dental"), secondary CTA "Call Now" (tel: link)
2. **Trust bar**: 5.0★ / 482 Google reviews, displayed prominently with stars, directly under the hero — this is the strongest asset on the page, don't undersell it
3. **Services**: 3 cards — Orthodontics & Braces, Dental Implants, General Dentistry & Cleaning — short, plain-language descriptions, no jargon
4. **Meet Dr. Jyoti**: short bio section (placeholder text flagged clearly as `[NEEDS REAL BIO/PHOTO FROM CLINIC]`), built around the "professional, friendly, caring" theme patients repeat
5. **Why patients choose us**: 3-4 short cards paraphrasing the real review themes (painless care, affordability + quality, clean modern clinic, clear communication) — original wording, not copied review text
6. **Location & hours**: embedded map (address above), hours displayed as the real split-shift schedule, phone number, "closed Sunday" clearly shown
7. **Final CTA**: repeat the WhatsApp/Call buttons

## Tech stack recommendation

Keep this simple — it's a single marketing page, not an app, and simplicity means fewer things that can break during a live pitch:
- **Astro** or plain HTML/CSS + Tailwind (via CDN) — avoid a full Next.js app for a static single page; less build complexity for Cursor/Antigravity to get right on the first pass, and faster load times, which matters for a mobile-first audience
- Mobile-first by default — most patients will open this link on a phone (likely via WhatsApp), design for that viewport first, desktop second
- No backend/database needed — this is static content plus `tel:` and `wa.me` links, nothing server-side required

## Hosting — use Cloudflare Pages, not Vercel

Vercel's free Hobby tier explicitly prohibits commercial use in its terms of service — since every site built here is for a paying business, that's a real compliance risk to build the whole workflow around, not just a technicality. Cloudflare Pages' free tier explicitly permits commercial use, has unlimited bandwidth (no risk of the site getting paused mid-pitch), and offers the same GitHub-integrated auto-deploy and per-branch preview URLs.

Setup:
1. Push the site to a GitHub repo
2. Connect the repo in the Cloudflare dashboard: Pages → Create a project → Connect to Git — it auto-detects the framework and build settings
3. Every push to `main` auto-deploys to the live preview URL; pushes to other branches get their own preview URL, useful for testing a revision before showing her
4. Free subdomain (`project-name.pages.dev`) is enough for a demo; if she buys in, a custom domain can be attached later at no extra hosting cost (only the domain purchase itself costs anything)

## Before you build further

Ask her directly, if you haven't already: **"What didn't work about the sites you saw before?"** If she gives a specific answer (wrong tone, disliked a photo style, wanted something more premium/more simple, etc.), that should override any assumption in this brief — real feedback from her beats every guess above.

## Deliverables

1. The site itself (Astro or static HTML/Tailwind), pushed to a GitHub repo
2. Deployed on Cloudflare Pages with a live preview link
3. A short note listing every place a `[NEEDS REAL PHOTO/BIO]` placeholder was used, so it's easy to swap in real assets before or during the pitch call
