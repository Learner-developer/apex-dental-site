# Apex Dental & Orthodontic Clinic — UI/UX & Build Brief (v2)

This supersedes the earlier `Apex_Dental_Demo_Site_Build_Brief.md` — that one was written before real assets/data existed. Use this version; it's built entirely around the actual 37-image inventory, 482 real reviews, and the services taxonomy you extracted.

---

## Design System

**Primary color**: Teal `#0D9488` (Tailwind `teal-600`) — already established by the avatar color used in the testimonial data, so keep it as the single brand anchor rather than introducing a new color. This also happens to be a well-supported choice for dental/healthcare — calming, clinical-but-warm, not sterile.

**Background**: Avoid pure white (`#FFFFFF`) — it reads clinical/cold. Use a warm off-white/cream (Tailwind `stone-50`, `#FAFAF9`) as the page background, white reserved for card surfaces only.

**Accent/CTA color**: Teal-on-teal buttons lack urgency and contrast. Use a warm amber/coral (Tailwind `amber-500`, `#F59E0B`) exclusively for primary action buttons (Book, Call, WhatsApp) so they visually pop against the calmer teal/cream palette.

**Typography**: A clean, rounded, humanist sans-serif — Inter, Poppins, or similar. Headings slightly bolder/larger than typical corporate-site defaults; this should feel warm and approachable, not like a hospital admin portal.

**Shape language**: Rounded corners (8-16px radius) on cards/buttons/images, soft drop shadows rather than hard borders — matches the "spa-like, not sterile" pattern seen across the best-performing dental sites researched earlier in this project.

**Imagery rule**: Every image on the site comes from the real 37-asset inventory. No stock photography, no illustration filler. If a section calls for an image type not in the inventory (e.g. a specific missing angle), leave a clearly marked placeholder rather than substituting a stock photo.

---

## Site Architecture: single scrollable homepage, not a multi-page site

With 7 service departments, 37 images, and a full FAQ/testimonial set, the temptation is to build a full multi-page site. Don't — not for this stage. Reasons:
- This is still fundamentally a demo meant to close a sale. One link, reviewed top-to-bottom in one sitting, is easier for her to evaluate than clicking through a menu.
- Fewer pages = fewer places for a first Cursor build pass to go wrong.
- The volume problem is solved with **interactive components** (tabs, accordions, filterable galleries) inside one page, not with more pages.

**If she buys in**, expanding specific sections (e.g. a full dedicated Orthodontics page) is a natural phase-2 upsell — flag this as a future opportunity, not something to build now.

---

## Section-by-Section Build Spec

### 1. Top Announcement Bar
Thin bar above the header. See content brief for compliant copy — avoid raw "% off" framing, lead with "Free Consultation" instead (see compliance notes).

### 2. Header/Navbar
- Logo: `apex-dental-clinic-3d-wall-logo.jpg`
- Sticky on scroll, condensing to a smaller height after ~100px scroll
- Nav links scroll-to-anchor (Services, Doctor, Gallery, Reviews, Location) — not separate pages
- Primary nav CTA button (amber): "Book Now" → opens WhatsApp prefilled message

### 3. Hero
- Split layout: copy left, `dr-jyothi-sajjan-treating-patient-portrait.jpg` right (or as a soft-edged background treatment behind the copy on mobile)
- Headline, subline, dual CTA (WhatsApp primary / Call secondary) — copy in content brief
- Trust pills inline under the headline: rating + review count (numbers only, see compliance note on superlative language)

### 4. Trust Stats Counter
4-stat row, animated count-up on scroll into view. Content brief has the exact stat wording (adjusted from the original JSON to remove the unverifiable superlative framing).

### 5. Core Services — tabbed/accordion, not 7 full sections
Build as a tabbed interface (desktop) that collapses to an accordion (mobile): 7 tabs, one per department (Orthodontics, Root Canal & Endodontics, Oral Surgery, Prosthodontics & Implants, Cosmetic Dentistry, Periodontics & Preventive, Pediatric & Family). Each tab panel: short intro + bulleted service list + one representative image. This is how you fit the full taxonomy into one page without it becoming an endless scroll.

### 6. Meet the Doctor(s)
- Dr. Jyothi Sajjan (BDS, MDS Orthodontics) — primary, larger card. Images: `dr-jyothi-sajjan-patient-consultation-desk.jpg`, `dr-jyothi-sajjan-bds-mds-certificates-registration.jpg` (credentials wall)
- Dr. Monika (Endodontics) — secondary card, smaller, same visual template
- Bio copy in content brief

### 7. Why Choose Apex Dental
6 icon + short-text feature cards, paraphrased from real review themes (not stock "why choose us" copy) — see content brief.

### 8. Before & After Gallery — handle with care (see compliance note)
Filterable grid (filter chips: Braces, Cosmetic, Crowns/Dentures, Cleaning). **Before enabling this section live**, confirm with her whether patient consent exists for these specific images to be used in public marketing — this is the single highest compliance-risk section on the page. If consent isn't confirmed, default to showing this section as a private password-gated preview during the pitch only, not the public demo link. Component-wise: build a simple lightbox/slider so the images can be swapped in or removed without restructuring the page.

### 9. Clinic & Technology Tour
Image grid/carousel using the 12 interior/equipment photos (operatory rooms, sterilization bay, digital OPG, NSK Endo-Mate). Short captions per image, pulled from the visual asset brief's existing tags — this section is unambiguously safe content (facility photos, not outcome claims).

### 10. Patient Testimonial Carousel
Card-based carousel. Each card: avatar (existing `ui-avatars.com` URLs), name, star rating, **short pull-quote only** (the "Highlight Headline" lines already extracted, e.g. "Teeth aligned in just 11 months"), Local Guide/Google Verified badge, and a "Read full review on Google" link using the existing `google_review_url`. Don't render the full-length review text as static page copy for every card — short quote + verified outbound link is both a cleaner UX pattern and reduces reproducing large blocks of third-party-authored text at scale.

### 11. FAQ Accordion
5 Q&As from the content brief (refined from your original draft).

### 12. Location, Map & Appointment
Embedded map, real address, real split-shift hours displayed as two clear time blocks, phone number, WhatsApp button repeated here.

### 13. Footer
NAP info, quick links, hours, emergency contact line if applicable.

### Persistent element: Sticky mobile CTA bar
Fixed bottom bar on mobile only — Call + WhatsApp buttons, always visible regardless of scroll position. Most patients will be on mobile; don't make them scroll back up to find the CTA.

---

## Tech Stack

- **Astro** for the site shell (static output, fast, simple for Cursor to scaffold correctly in one pass)
- **Tailwind CSS** for styling — maps directly onto the teal/amber/stone palette above
- **Alpine.js** (lightweight, ~15kb) for the interactive bits — tabs, accordion, carousel, gallery filter — instead of pulling in full React. Keeps the bundle small and avoids framework overhead for what is fundamentally a marketing page.
- **No backend/database** — static site, `tel:` and `wa.me` links handle contact, no forms requiring server-side processing needed for the demo stage.

## Image Handling (important — 37 real photos)

- Compress and convert all images to WebP before deployment (Astro's built-in image optimization handles this if images are imported properly — instruct Cursor to use Astro's `<Image />` component, not raw `<img>` tags, for automatic optimization)
- Lazy-load everything below the hero fold
- Use the existing descriptive filenames as a basis for `alt` text (they're already well-structured for this — e.g. `before-after-braces-severe-teeth-crowding.jpg` → alt="Before and after: severe teeth crowding correction with braces")
- Keep the folder structure exactly as laid out in the visual assets brief — don't flatten or rename during import, it'll make future updates easier

## Hosting

Unchanged from the earlier brief: **Cloudflare Pages**, not Vercel — free tier explicitly permits commercial use, unlimited bandwidth, same GitHub auto-deploy and preview-URL workflow. Push to GitHub, connect the repo in Cloudflare Pages dashboard, auto-deploy on push to `main`.

## Performance/Accessibility Checklist for Cursor

- Lighthouse mobile score target: 90+ (achievable with Astro + WebP + lazy loading)
- All interactive elements (tabs, accordion, WhatsApp/call buttons) keyboard-navigable
- Color contrast: verify amber CTA text/background combo meets WCAG AA against the cream background
- Test the WhatsApp deep link and tel: link on an actual mobile device before the pitch — these are the two most important interactions on the whole site
