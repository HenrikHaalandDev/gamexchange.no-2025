# GameXchange.no – Website Improvement Report

## Project Summary

Improved **GameXchange.no** from a rough draft to a professional platform for buying and selling used video games in Norway.
**Started:** Monday, May 5, 2025, 9:30 AM
**Completed:** Friday, May 9, 2025, 12:00 PM

---

## Total Time Spent

**14 hours 30 minutes** across five days:

* **Day 1 (05.05.2025, 9:30 AM–12:00 PM):** File structure & index.html refactor — 2.5 h
* **Day 2 (06.05.2025, 10:30 AM–2:00 PM):** CSS overhaul & All Products / Highlights pages — 3.5 h
* **Day 3 (07.05.2025, 8:15 AM–3:30 PM):** Contact form rebuild & accessibility fixes — 5 h
* **Day 4 (08.05.2025, 8:15 AM–12:30 PM):** Login/Register semantic forms — 3 h
* **Day 5 (09.05.2025, 9:30 AM–10:30 AM):** JS consolidation & theme toggle — 1 h

---

## 1. Structure and Organization

* **Created dedicated folders:** `/css`, `/js`, `/images`
  *Reason:* Separates assets by type for maintainability and scalability.

* **Renamed files** to clear, SEO-friendly, lowercase names with hyphens:

  * `banners1.png` → `hero-banner.png`
  * `banners2.png` → `secondary-banner.png`
  * `1216145.jpg` → `god-of-war.png`
  * `Screenshot 2025-05-04 142528.png` → `minecraft-titlecard.png`
  * `kontakt.html` → `contact.html`
  * `høydepunkter.htm` → `highlights.html`
  * `allproducts.html` → `all-products.html`
  * `hjem.html` → `index.html`

---

## 2. Technical Fixes

* **CSS Reamped:**
  Refined and updated the existing `style.css` for consistency and better customization across the site. Created `global.css` for broader styling control.

* **HTML validation & accessibility:**

  * Closed unclosed tags; removed deprecated tags like `<font>`, `<center>`, `<marquee>`
  * Added `alt` attributes to all images
  * Updated form structures and added `aria-label`s for accessibility

---

## 3. Design & User Experience

* **Visual consistency:** Unified color palette and typography across pages.

* **Responsive design:**

  * Media queries for mobile responsiveness
  * Flexible grid layout for product display
  * Collapsible mobile menu with improved navigation

---

## 4. Functionality Enhancements

* **UI improvements:** Added breadcrumbs, hover states, and loading indicators
* **Forms:** Implemented field validation, confirmation messages, and improved layout with labels

---

## 5. Troubleshooting – Theme Toggle

During the implementation of the theme toggle feature, I was initially given the following attempt:

```javascript
function darkmode() {
    /* funker ikke :() */
    var element = document.body;
    element.classList.toggle("dark-mode");
}
```

This function attempted to enable dark mode by toggling a `.dark-mode` class on the `<body>` element. While the idea was solid, it didn’t fully work — the CSS was either missing or inconsistent, and the behavior wasn’t persistent across page reloads. I tried building on it, and I got it to work halfway, but ultimately it would take more time to fix than to implement something more reliable.

### My Solution

I replaced this with a more robust and modern approach using the `data-theme` attribute on the `<html>` element. This method allowed for cleaner CSS targeting and made it possible to remember the user’s theme preference using `localStorage`.

```javascript
// theme switch
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', savedTheme || 'light');
});

const toggleButton = document.getElementById('theme-switch');

toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
```

### Why I Changed It

| Given Attempt                      | My Solution                                        |
| ---------------------------------- | -------------------------------------------------- |
| Relied on toggling a class         | Used `data-theme` for cleaner and semantic theming |
| No persistence between page loads  | Stored theme in `localStorage`                     |
| Needed consistent `.dark-mode` CSS | Easier to manage with attribute selectors in CSS   |
| Only affected `<body>`             | Applies theming site-wide via `<html>`             |

This method works more reliably, offers better scalability, and ensures the user’s experience is consistent every time they visit the site.

---

## 6. Tips

### 6.1 HTML5 Boilerplate in VS Code

* Type `!` + Tab to generate boilerplate
* Use Emmet shortcuts:

  * `link:css` → `<link rel="stylesheet" href="style.css">`
  * `script:src` → `<script src="script.js"></script>`

---

## 7. Testing & Quality Assurance

To ensure a consistent and responsive user experience across devices, I manually tested the site on multiple screen sizes.

### Devices Used:

* **iPhone 13 mini (5.4")**

  * Verified scaling, font size, and navigation
  * Ensured mobile menu worked correctly
  * Tested form field usability on small screens

* **Laptop (1920×1080)**

  * Checked full-page layouts, spacing, and theme switching

* **iPad / Tablet Simulator**

  * Tested product grid responsiveness in both orientations
  * Verified contact and login forms

### Tools:

* **Chrome DevTools – Responsive Mode**

  * Simulated viewports at multiple breakpoints (320px, 768px, 1024px)
  * Ran Lighthouse audits for accessibility and performance

### Results:

* No major issues found
* Layout and content adjusted cleanly across breakpoints
* Theme toggle functioned properly with preference retention

---

## 8. Recommendations for Future Improvements

### Short-Term (1–3 months)

* Add search functionality
* Enable user accounts & order tracking
* Implement a shopping cart system

### Medium-Term (3–6 months)

* Enable customer reviews
* Add a newsletter signup
* Introduce game categories and filters

### Long-Term (6+ months)

* Launch a blog section
* Add a trade-in value calculator
* Create a loyalty/reward program

---

## Client Notes for Next Time

* Proofread for spelling errors
* Maintain a consistent folder and file naming structure
* Use meaningful class/id names
* Avoid excessive use of `<br>` for spacing
* Don’t use special characters in filenames
* Choose fonts and colors carefully for visual harmony
* Ensure compliance with **universal design (universell utforming)** principles for accessibility