# Lumière — Image Gallery

A dark, editorial-style responsive image gallery built with pure HTML, CSS, and JavaScript.

## Features

### Core
- **Responsive Grid Layout** — Masonry-style CSS Grid with wide and tall card variants
- **Hover Effects** — Smooth overlay with title/tag reveal + scale animation
- **Lightbox Viewer** — Full-screen view with image caption

### Navigation
- **Prev / Next buttons** in lightbox
- **Keyboard support** — Arrow keys (← →) + Escape to close
- **Touch / Swipe** support for mobile
- **Category filter** — All / Nature / Architecture / Abstract / Portrait

### Bonus
- **CSS Image Filters (FX Bar)** — Toggle between Original, Grayscale, Sepia, Vivid, Invert
- **Lazy loading** — Images load on scroll via IntersectionObserver
- **Staggered entrance animation** on page load

## File Structure

```
image-gallery/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styles (variables, grid, hover, lightbox, responsive)
├── js/
│   └── gallery.js      # Filter, lightbox, FX, scroll reveal
└── README.md
```

## How to Run

Simply open `index.html` in any modern browser. No build tools, no dependencies.

> **Note:** Images are loaded from Unsplash CDN — an internet connection is required.

## Browser Support

Chrome, Firefox, Safari, Edge (all modern versions).
