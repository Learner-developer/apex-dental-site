# Master Build Prompt — Paste this into Cursor's Agent/Composer chat

Build a marketing website for Apex Dental & Orthodontic Clinic. I've provided three reference documents in this project — read all three fully before writing any code:

1. **UI/UX Build Brief** — design system, section-by-section structure, component specs
2. **Final Website Copy Deck** — every word of content for every section, already final, use it verbatim
3. **Visual Assets Brief** — the 37 real photos, their folder structure, and which section each one belongs to

Also present in the project: the actual image files, organized in the folder structure described in the Visual Assets Brief. Use these real images exactly as mapped — no stock photography, no placeholder images, ever.

## Tech stack — use current, not legacy, patterns

- **Astro**, latest stable version (v6+). Static output mode (no SSR needed — this is a static marketing page).
- **Tailwind CSS v4**, installed via the **official `@tailwindcss/vite` plugin**. Do NOT use `@astrojs/tailwind` — that integration is deprecated for Tailwind v4. Use the CSS-first config approach (`@theme` block in a global CSS file), not a `tailwind.config.js` file.
- Map the design system's colors into the Tailwind theme: primary teal `#0D9488`, cream background `#FAFAF9`, amber CTA accent `#F59E0B`.
- **View Transitions**: use Astro's built-in `<ClientRouter />` (or current equivalent — check Astro's own docs for the exact current component name/import if it's changed) for smooth transitions between in-page sections/anchors.
- **Scroll-reveal animations**: use native CSS `animation-timeline: view()` scroll-driven animations for elements fading/sliding into view as the user scrolls (service cards, testimonial cards, stat counters). Since browser support isn't universal yet, write these as progressive enhancement: content must be fully visible and usable with zero animation if the browser doesn't support the feature — never gate visibility behind the animation. Wrap all animation in `@media (prefers-reduced-motion: no-preference)` so users who've asked for reduced motion get none.
- **Interactive components** (service tabs, FAQ accordion, testimonial carousel, gallery filter): use Alpine.js (lightweight, ~15kb) for these specifically — don't pull in a full React/Vue setup for what's fundamentally a content site with a handful of interactive widgets.
- **Micro-interactions**: buttons and cards get a subtle hover-lift (translateY -2px to -4px + shadow increase) on 150-250ms ease-out transitions. The primary CTA buttons can have a gentle pulse/glow animation to draw the eye, in the reduced-motion wrapper described above.
- **Images**: use Astro's `<Image />` component (not raw `<img>`) for automatic optimization and WebP conversion. Lazy-load everything below the hero fold. Generate `alt` text from each filename's descriptive structure (e.g. `before-after-braces-severe-teeth-crowding.jpg` → "Before and after: severe teeth crowding correction with braces").

## Structure

Single scrollable homepage with anchor-based navigation (Services, Meet the Doctors, Gallery, Reviews, Location) — not a multi-page site. Follow the 13-section structure from the UI/UX Build Brief exactly, in order. Use the copy from the Final Website Copy Deck verbatim — don't rewrite, paraphrase, or invent alternative copy for any section.

## Two things to build carefully, per the briefs

1. **The Before & After Gallery (Section 8)**: build the component fully, but keep it hidden from the main nav and not linked from the page by default — the client hasn't confirmed patient photo consent yet. Build it behind a simple flag (e.g. a boolean constant near the top of the relevant component) that's easy to flip on later.
2. **Dr. Monika's bio**: use the copy as written, but leave the placeholder note from the brief as a visible code comment near that section so it isn't forgotten before publishing.

## Process

- Scaffold the Astro project using non-interactive/CI-friendly flags wherever the CLI supports them, so the setup doesn't stall waiting on prompts.
- Build section by section, committing to git locally as you complete each meaningful chunk (clear, descriptive commit messages) — but don't push to the remote. I'll review locally first and push myself.
- If anything in the briefs is ambiguous or you have to make a judgment call not covered by the documents, ask me rather than guessing silently.
- When finished, tell me how to run it locally (`npm run dev` or equivalent) and confirm the WhatsApp (`wa.me/919886963633`) and tel (`+919886963633`) links are wired correctly — these two links matter more than any visual polish on the page.
