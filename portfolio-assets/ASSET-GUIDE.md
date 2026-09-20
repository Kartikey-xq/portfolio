# Asset Upload Guide — Kartikey Joshi Portfolio

This portfolio is **100% asset-driven**. You never need to modify React or TypeScript code to display or update your screenshots and video demos.

Simply drop your files into `/public/portfolio-assets/images/` or `/public/portfolio-assets/videos/` following the naming conventions below, refresh your browser, and the website will automatically detect and render them in the corresponding section.

---

## Quick Reference Asset Table

| Page Section | Asset Type | Directory | Exact Filename Pattern | What You Should Capture & Upload |
| :--- | :--- | :--- | :--- | :--- |
| **3. Custom Sections Built** | Image | `images/` | `01-custom-sections-built-01.png`<br>`01-custom-sections-built-02.png` | Screenshots of custom Shopify theme sections you built (e.g., hero banners, custom product showcases, feature grids, or custom announcement bars). |
| **4. Requirement Understanding** | Image | `images/` | `02-requirement-understanding-01.png`<br>`02-requirement-understanding-02.png` | Screenshot showing client briefs, design mockups, wireframes, or side-by-side comparisons of the client's reference vs. your implemented Shopify section. |
| **5. Domain Setup** | Image | `images/` | `03-domain-setup-01.png`<br>`03-domain-setup-02.png` | Screenshot from Shopify admin showing domains connected/configured (e.g., Shopify Settings > Domains, DNS verification, SSL status, primary domain set). |
| **6. Quick Size Guide** | Video | `videos/` | `04-quick-size-guide.mp4`<br>*(or .webm)* | Screen recording demonstrating the Quick Size Guide modal, drawer, or toggle interaction in action on desktop or mobile. |
| **7. Scroll-Based Animations** | Video | `videos/` | `05-scroll-based-animations.mp4`<br>*(or .webm)* | Screen recording showing storefront elements responding, translating, or revealing as you scroll down the page. |
| **8. Scrub-Based Animation** | Video | `videos/` | `06-scrub-based-animation.mp4`<br>*(or .webm)* | Screen recording showcasing an interactive scrub animation where the animation frame/progress is tied directly to scrollbar movement. |
| **9. Pre-Order Sections** | Image | `images/` | `07-preorder-sections-01.png`<br>`07-preorder-sections-02.png` | High-resolution screenshots of the pre-order product page, pre-order badge/button, custom deposit notice, or delivery timeline banner. |
| **10. Pre-Launch Countdown** | Image | `images/` | `08-countdown-prelaunch-01.png`<br>`08-countdown-prelaunch-02.png` | Screenshot of the pre-launch countdown timer bar or section built for creating urgency and announcing launch time. |

---

## Detailed Guidelines per Section

### 1. Custom Sections Built (`01-custom-sections-built-*`)
- **Target folder**: `/public/portfolio-assets/images/`
- **Recommended resolution**: 1600×1000 or full-width desktop view (clean browser window, no clutter).
- **Multiple images supported**:
  - `01-custom-sections-built-01.png`
  - `01-custom-sections-built-02.png`
  - `01-custom-sections-built-03.png`
  - Add as many as you need; the site automatically sorts and renders all of them in a modern multi-image grid.

### 2. Requirement Understanding (`02-requirement-understanding-*`)
- **Target folder**: `/public/portfolio-assets/images/`
- **What to capture**: Shows your professional workflow. A snippet of the client's design requirement, Figma/wireframe reference, or a communication snippet alongside the resulting storefront section.
- **Multiple images supported**:
  - `02-requirement-understanding-01.png`
  - `02-requirement-understanding-02.png`

### 3. Domain Setup (`03-domain-setup-*`)
- **Target folder**: `/public/portfolio-assets/images/`
- **What to capture**: Shopify Admin > Domains page showing connected custom domain, SSL certificate active, and primary domain routing. Blur out sensitive client personal credentials if needed.
- **Filename pattern**:
  - `03-domain-setup-01.png`
  - `03-domain-setup-02.png`

### 4. Quick Size Guide (`04-quick-size-guide.mp4`)
- **Target folder**: `/public/portfolio-assets/videos/`
- **What to record**: Click or tap the "Size Guide" button on the storefront product page, show the popup/drawer smoothly opening with measurements/size tables, and closing.
- **Format**: `.mp4` (recommended H.264 / AAC) or `.webm`.
- **Duration**: 5 to 15 seconds. Keep under 10MB for fast loading.
- **Playback**: The website automatically loops it, autoplays muted, with inline playback on both mobile and desktop.

### 5. Scroll-Based Animations (`05-scroll-based-animations.mp4`)
- **Target folder**: `/public/portfolio-assets/videos/`
- **What to record**: Smoothly scrolling down the storefront page showing elements animating into view (e.g. image reveals, floating badges, sticky headers, staggered text transitions).
- **Format**: `.mp4` or `.webm`.

### 6. Scrub-Based Animation (`06-scrub-based-animation.mp4`)
- **Target folder**: `/public/portfolio-assets/videos/`
- **What to record**: Scrubbing back and forth with scroll where a product spins, scales, or transforms proportionally with the user's scroll position.
- **Format**: `.mp4` or `.webm`.

### 7. Pre-Order Sections (`07-preorder-sections-*`)
- **Target folder**: `/public/portfolio-assets/images/`
- **What to capture**: Full section screenshot of the pre-order callout, custom pre-order buttons, and customer information cards.
- **Multiple images supported**:
  - `07-preorder-sections-01.png`
  - `07-preorder-sections-02.png`

### 8. Pre-Launch Countdown (`08-countdown-prelaunch-*`)
- **Target folder**: `/public/portfolio-assets/images/`
- **What to capture**: The countdown timer banner or hero countdown (Days, Hours, Minutes, Seconds) built into the theme.
- **Filename pattern**:
  - `08-countdown-prelaunch-01.png`
  - `08-countdown-prelaunch-02.png`

---

## Supported File Formats

- **Images**: `.png`, `.jpg`, `.jpeg`, `.webp`
- **Videos**: `.mp4`, `.webm`

---

## How It Works Automatically

1. Save your screenshots or screen recordings.
2. Name them strictly matching the section prefix (e.g., `01-custom-sections-built-01.png`, `04-quick-size-guide.mp4`).
3. Place images in `/public/portfolio-assets/images/` and videos in `/public/portfolio-assets/videos/`.
4. Refresh the webpage. The portfolio automatically discovers and renders them.
5. If any asset hasn't been uploaded yet, a sleek, discreet placeholder will be displayed in that section indicating the exact filename expected, without breaking the page layout.
