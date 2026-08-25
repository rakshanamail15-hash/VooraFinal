# ARKHE — Building Future Landmarks

A modern, fully responsive landing page for a premium **construction & architectural design** company, built with **React** and **plain CSS** (no UI framework). It agastya-feature-features smooth, user-friendly animations, an animated preloader, a live chat widget, filterable project galleries, and count-up statistics.

![Tech](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-5-646cff) ![CSS](https://img.shields.io/badge/CSS-vanilla-264de4)

---

## ✨ agastya-feature-features

- **Animated preloader** — a brand logo draws itself in, a progress bar fills, then split panels slide apart to reveal the page.
- **Sticky, blur-on-scroll navbar** with a slide-in mobile drawer and animated burger.
- **Hero section** with floating imagery, gradient blobs, and a glassmorphism stats card. Each stat has a **themed icon** and an animated **count-up** number.
- **Infinite marquee** of service badges (pauses on hover).
- **About / "Where Vision Meets Craft"** — agastya-feature-feature cards + a rounded "15+ Years of Excellence" badge.
- **Services grid** with hover lift & glow effects.
- **Upcoming Projects** — filter tabs + an arrow-driven horizontal carousel.
- **Completed Projects** — filterable, uniform grid that re-animates (staggered pop-in) on every filter change.
- **Trust / Stats band** — dark section with animated count-up numbers.
- **Testimonials** — 3-up sliding carousel with dot navigation.
- **Contact section** — validated form with a "Message Sent!" confirmation state.
- **Footer** — link columns, social icons, newsletter signup.
- **Floating chat widget** — pulsing launcher, teaser bubble, quick replies, typing indicator, and a working chat input.
- **Scroll-reveal animations** throughout via `IntersectionObserver`.
- **Accessible & inclusive** — fully responsive (desktop → mobile) and respects `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

| Layer        | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | React 18                                |
| Build tool   | Vite 5                                   |
| Styling      | Vanilla CSS (one stylesheet per component) + CSS variables |
| Animations   | CSS keyframes + `IntersectionObserver`  |
| Fonts        | Poppins & Plus Jakarta Sans (Google Fonts) |

No external CSS/animation/icon libraries — everything is hand-rolled.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (developed on Node 24)
- npm (ships with Node)

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Create a production build (output in /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
.
├── index.html                 # HTML entry + Google Fonts
├── vite.config.js             # Vite + React plugin config
├── package.json
├── public/
│   └── favicon.svg            # ARKHE "A" logo mark
└── src/
    ├── main.jsx               # React root
    ├── App.jsx                # Composes all sections
    ├── index.css              # Global tokens, resets, shared utilities & keyframes
    ├── hooks/
    │   └── useReveal.js       # IntersectionObserver scroll-reveal hook
    └── components/            # Each section + its own .css file
        ├── Preloader          # Animated loading screen
        ├── Navbar             # Sticky nav + mobile drawer
        ├── Hero               # Headline, CTA & animated stat cards
        ├── Marquee            # Scrolling service badges
        ├── About              # "Where Vision Meets Craft"
        ├── Services           # Service cards
        ├── UpcomingProjects   # Filterable carousel
        ├── CompletedProjects  # Filterable gallery grid
        ├── TrustStats         # Dark stats band (count-up)
        ├── Testimonials       # Client review slider
        ├── Contact            # Lead capture form
        ├── Footer             # Links, social, newsletter
        └── ChatWidget         # Floating live-chat assistant
```

---

## 🎨 Customization

### Colors, spacing & radius
All design tokens live as CSS variables at the top of **`src/index.css`** (`:root`). Change the brand palette, gradients, shadows, radii, and fonts in one place:

```css
:root {
  --purple-500: #7c3aed;
  --grad-purple: linear-gradient(135deg, #8b5cf6 0%, #935ce9 100%);
  --radius-lg: 26px;
  /* ...etc */
}
```

### Content & images
Text, project data, stats, and image URLs are defined as arrays/constants at the top of each component file — e.g. edit the `projects`, `stats`, `services`, or `reviews` arrays to update content. Swap the image `src` / `backgroundImage` URLs to use your own assets (drop files in `/public` and reference them as `/your-image.jpg`).

### Section anchors
Navbar links scroll to in-page section IDs: `#about`, `#services`, `#projects`, `#portfolio`, `#contact`.

---

## ♿ Accessibility & Performance

- Respects `prefers-reduced-motion` — animations are disabled for users who opt out.
- Semantic landmarks (`header`, `main`, `section`, `footer`) and ARIA labels on icon buttons.
- Lazy-friendly: scroll-reveal only animates elements once they enter the viewport.
- Lightweight production bundle (no heavy dependencies).

---

## 📝 Notes

- The chat widget and contact form use **simulated/canned responses** — wire them to a real backend (email, WhatsApp, or an API) for production use.
- Project images currently load from external URLs; replace them with optimized local assets before deploying.

---

## 📦 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server (HMR)      |
| `npm run build`   | Build for production into `/dist`    |
| `npm run preview` | Serve the production build locally   |

---

Built with ❤️ for **ARKHE Construction**.
