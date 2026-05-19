# Lumière Image Gallery Documentation

## Project Overview

Lumière is a modern and responsive image gallery website created using HTML, CSS, and JavaScript.
The project features a luxury dark-themed UI with smooth hover effects, category filters, lightbox image preview, responsive layout, and image effects.

---

# Technologies Used

| Technology | Purpose                                |
| ---------- | -------------------------------------- |
| HTML5      | Structure of the gallery               |
| CSS3       | Styling, animations, responsive layout |
| JavaScript | Gallery filtering, lightbox, effects   |

---

# Project Features

## Responsive Gallery Layout

* Images automatically adjust according to screen size.
* Works on desktop, tablet, and mobile devices.

## Image Hover Effects

* Smooth zoom animation on hover.
* Dark overlay with image details.

## Category Filtering

Users can filter images by category:

* Nature
* Architecture
* Abstract
* Portrait

## Lightbox View

* Click any image to open fullscreen preview.
* Next and previous navigation buttons.
* Close button included.

## CSS Image Effects

Users can apply:

* Grayscale
* Sepia
* Saturation
* Invert effects

---

# Folder Structure

```text
Lumiere-Gallery/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── gallery.js
└── images/
```

---

# HTML Structure

The HTML file contains:

* Header section
* Navigation filter buttons
* Hero section
* Gallery grid
* Lightbox modal
* Footer

Example:

```html
<div class="gallery-item">
    <div class="img-wrap">
        <img src="image.jpg" alt="">
    </div>
</div>
```

---

# CSS Styling

CSS is used for:

* Grid layout
* Hover animations
* Responsive design
* Dark luxury theme
* Lightbox styling
* Smooth transitions

Example:

```css
.gallery-item {
    height: 300px;
    overflow: hidden;
}

.img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

---

# JavaScript Functionality

JavaScript handles:

* Image filtering
* Lightbox opening
* Previous/next image navigation
* Closing modal
* Applying CSS effects

Example:

```javascript
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // filter logic
    });
});
```

---

# Responsive Design

Media queries are used for responsiveness.

## Desktop

* 3 column layout

## Tablet

* 2 column layout

## Mobile

* 1 column layout

Example:

```css
@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

# How to Run the Project

1. Download the project files.
2. Open the project folder.
3. Run `index.html` in browser.

No server installation required.

---

# Advantages of the Project

* Easy to customize
* Professional UI design
* Responsive layout
* Interactive user experience
* Smooth animations

---

# Future Improvements

Possible future enhancements:

* Dark/Light mode
* Search functionality
* Image upload system
* Database integration
* Drag and drop gallery
* Masonry layout
* Auto slideshow

---

# Conclusion

The Lumière Image Gallery project demonstrates the use of HTML, CSS, and JavaScript to create a modern and interactive web gallery. The project combines responsive design, animations, filtering, and lightbox functionality to improve user experience and visual appearance.

---

