# Bodrum Konağı — Website

A premium, scroll-animated, **bilingual (EN/TR)** single-page website for **Bodrum Konağı**,
a boutique hotel in the heart of Bodrum. Built in the editorial style of the *Valora Heights*
reference — elegant serif type, glassmorphism, dark cinematic sections, custom cursor and
motion-on-scroll — adapted to the Aegean and driven by the hotel's real information.

No build step, no framework. Just open it or drop it on any web host.

## Run / preview locally
```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```
(or open `index.html` directly — but a local server is recommended so the fonts/map load cleanly.)

## Project structure
```
index.html            # all sections (semantic + data-i18n hooks)
css/style.css         # design tokens, components, responsive
js/data.js            # ← EDIT THIS: rooms, prices, reviews, ratings, galleries
js/main.js            # preloader, cursor, i18n, reveals, carousel, parallax, booking
assets/logo.svg       # standalone wordmark (swap target)
assets/logo-mark.svg  # logo icon (nav / preloader / footer / favicon)
assets/images/        # all photos (see assets/images/README.md to swap them)
```

## Editing content (no coding needed)
- **Rooms, prices, room types** → `js/data.js` → `ROOMS`. Scales to your **12 rooms / 7 types**.
  Copy a room block, edit the fields, point `images` to your photos. Prices are placeholders.
- **Reviews** → `js/data.js` → `REVIEWS`.   **Rating badges** → `RATINGS`.
- **Gallery tabs** ("What We Offer") → `js/data.js` → `GALLERY`.
- **Text / translations** → `js/main.js` → the `I18N` dictionary (`en` and `tr`).
- **Photos** → overwrite files in `assets/images/` keeping the same names — see that folder's README.
- **Logo** → replace `assets/logo.svg` / `assets/logo-mark.svg` with your official artwork.

## Contact details used on the site
- Phone / WhatsApp: **+90 533 022 88 48**
- Email: **info@bodrumkonagi.com**, **bilgi@bodrumkonagi.com**
- Instagram: **@bodrumkonagi**
- Address: Çarşı Mah. 1030 Sokak No:14, 48400 Bodrum / Muğla

Reservation buttons open **WhatsApp** (with a pre-filled message), with **tap-to-call** and
**email** as alternatives. To change the number/email, edit the constants at the top of `js/main.js`.

## Deploy
Upload the whole folder to any static host — **Netlify, Vercel, GitHub Pages, or classic cPanel
hosting**. No server, database or build required.

## Notes
- Images currently shipped are **Aegean reference photos** (placeholders). Swap in real
  Bodrum / hotel photography before launch.
- Honors `prefers-reduced-motion`; lazy-loads images; mobile-first responsive.
