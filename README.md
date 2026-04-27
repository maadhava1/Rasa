# Rasa Caterers — Mumbai 🍛

A production-ready sample website for a Mumbai-based catering business. Built with plain HTML, CSS, and JavaScript — no build tools, no frameworks, no npm. Just open `index.html` in a browser or serve locally.

## Live Preview

> Replace this line with your deployed URL (GitHub Pages, Netlify, Vercel, etc.)

---

## Features

- **Full-screen hero** with a real food photograph and overlay typography
- **Animated counters** — 8,000+ events, 60+ chefs, 20+ years
- **Marquee ticker** — scrolling event categories
- **Services grid** — 4 categories with icons
- **Dish cards** — 6 signature dishes with Unsplash food photography
- **Masonry gallery** — 8 event photos
- **Testimonials** — 3 real-style testimonials with featured card
- **Contact form** — with Indian mobile number validation (`/^[6-9]\d{9}$/`), inline error states, and success message
- **WhatsApp FAB** — floating chat button (bottom-right)
- **Fully responsive** — mobile nav overlay, horizontal scroll menu on small screens
- **Scroll animations** — IntersectionObserver entrance reveals, respects `prefers-reduced-motion`
- **Sticky header** — transparent over hero, frosted glass on scroll
- **Embedded Google Maps** in contact section

---

## Tech Stack

| Layer      | Choice              |
|------------|---------------------|
| Markup     | Semantic HTML5      |
| Styles     | Vanilla CSS (custom properties, Grid, Flexbox, `clamp()`) |
| Scripts    | Vanilla JS (ES5-compatible, no dependencies) |
| Fonts      | Google Fonts — Cormorant Garamond + DM Sans |
| Images     | Unsplash CDN (free, attributed below)        |

---

## Getting Started

### Option 1 — Open directly
```
Double-click index.html
```
No server needed for basic browsing.

### Option 2 — Local server (recommended for full feature testing)
```bash
# Node.js (npx serve)
npx serve -l 3000

# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```
Then open [http://localhost:3000](http://localhost:3000)

### Option 3 — Public URL via ngrok
```bash
# Start local server first (see Option 2), then:
ngrok http 3000
```

---

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder `/`
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

---

## Customisation Guide

| What to change          | Where                          |
|------------------------|--------------------------------|
| Business name          | `index.html` — `.logo-rasa`, footer `.footer-logo`, `<title>` |
| Phone / WhatsApp       | `index.html` — `tel:` links and `.whatsapp-fab` href |
| Email                  | `index.html` — `mailto:` link |
| Address                | `index.html` — `#contact .contact-details` |
| Colours                | `style.css` — `:root` CSS variables |
| Dish names / prices    | `index.html` — `#menu .menu-grid` |
| Gallery images         | Replace `<img src="...">` in `#gallery` with your own photos |
| Google Maps embed      | Replace the `<iframe>` `src` in `#contact` |

---

## Image Credits

All photos sourced from [Unsplash](https://unsplash.com) under the free Unsplash License.

| Photo | Unsplash ID |
|-------|-------------|
| Hero background | `photo-1601050690597-df0568f70950` |
| About / chef | `photo-1414235077428-338989a2e8c0` |
| Pav Bhaji | `photo-1606491956689-2ea866880c84` |
| Biryani | `photo-1563379091339-03b21ab4a4f8` |
| Fish curry | `photo-1534422298391-e4f8c172dddb` |
| Dal Baati | `photo-1585937421612-70a008356fbe` |
| Modak / sweets | `photo-1547592180-85f173990554` |
| Seekh Kebab | `photo-1603360946369-dc9bb6258143` |
| Gallery (various) | `photo-1567620832903-9fc6debc209f`, `photo-1504674900247-0877df9cc836`, `photo-1455619452474-d2be8b1e70cd`, `photo-1565557623262-b51f2cdc9eff`, `photo-1567337710282-00832b415979`, `photo-1596797038530-2c107229654b`, `photo-1631452180519-462f004c5eb5`, `photo-1546069901-ba9599a7e63c` |

---

## Project Structure

```
rasa-caterers/
├── index.html      # All markup and content
├── style.css       # All styles (CSS variables, layout, responsive)
├── script.js       # Mobile nav, scroll header, counters, form validation
├── .gitignore
└── README.md
```

---

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT) — free to use, modify, and deploy for personal or commercial projects.

---

*Built with ❤️ in Mumbai*
