# Images — how to swap in your real photos

Every image on the site uses a **fixed filename**. To use your own photo, just
**overwrite the file with the same name** (keep the name identical). No code changes needed.

Recommended: JPG, optimized for web (~150–400 KB each). Shoot/crop close to the ratios below.

| File | Where it appears | Recommended size / ratio |
|------|------------------|--------------------------|
| `hero.jpg` | Full-screen hero background | 2400 × 1500 (landscape) |
| `experience.jpg` | "Live the Bodrum life" divider | 2400 × 1500 (landscape) |
| `location.jpg` | Used in the "Getting around" gallery | 2000 × 1500 |
| `act-breakfast.jpg` | What We Offer → Cuisine | 1200 × 1600 (portrait) |
| `act-dining.jpg` | What We Offer → Cuisine | 1200 × 1600 |
| `act-marina.jpg` | What We Offer → Explore / Around | 1200 × 1600 |
| `act-beach.jpg` | What We Offer → Explore | 1200 × 1600 |
| `act-pool.jpg` | What We Offer → Comfort | 1200 × 1600 |
| `act-oldtown.jpg` | What We Offer → Explore | 1200 × 1600 |
| `act-nightlife.jpg` | What We Offer → Around | 1200 × 1600 |
| `act-diving.jpg` | What We Offer → Explore | 1200 × 1600 |
| `room-1.jpg` … `room-4.jpg` | Room cards (see `js/data.js`) | 1600 × 1200 (4:3) |
| `room-bath.jpg`, `room-lounge.jpg` | Extra room photos | 1600 × 1200 |
| `guest-1.jpg` … `guest-4.jpg` | Reviewer avatars / portraits | 800 × 1000 (portrait) |
| `exp-1.jpg` … `exp-5.jpg` | Floating photos in the closing section | 800 × 800–1000 |

## Rooms (12 rooms / 7 types)
Room photos are assigned in **`js/data.js`** (the `ROOMS` list). Each room's `images: [...]`
array points to files here. Add your real room photos (e.g. `room-terrace-1.jpg`) to this
folder and reference them in `js/data.js`.

> The current images are **Aegean reference photos** (placeholders) so you can see the design.
> Replace them with your own Bodrum / hotel photography before going live.
