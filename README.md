# e-plantShopping (Paradise Nursery)

Paradise Nursery is a React + Redux single-page shopping application for
browsing houseplants, adding them to a cart, and managing quantities before
checkout. It was built as the final project for the Coursera front-end
capstone: a landing page, a categorized product listing page, and a fully
interactive shopping cart page, all sharing one Redux store and navigated
with component state (no router).

## Features

- **Landing page** (`App.jsx` / `App.css`) — a `.background-image` layer,
  the company name, an About Us section (`AboutUs.jsx`, using the
  `about-us-container` class), and a "Get Started" button that calls
  `setShowProductList(true)` to reveal the catalog.
- **Product listing page** (`ProductList.jsx`) — 6 houseplants across 3
  categories (Air-Purifying, Succulents, Aromatic), each with a thumbnail,
  name, price, and an "Add to Cart" button that disables itself once the
  plant is in the cart.
- **Shared header** (`components/Header.jsx`) — visible on the product and
  cart pages, with Home / Plants / Cart navigation and a cart icon whose
  item count updates live from Redux state.
- **Shopping cart page** (`CartItem.jsx`) — thumbnail, name, and unit price
  per plant; per-line and cart-wide totals; increase/decrease quantity
  buttons (`handleIncrement` / `handleDecrement`, both dispatching
  `updateQuantity`); a delete button; a "Continue Shopping" button back to
  the catalog; and a "Checkout" button that shows a coming-soon message.
- **Redux Toolkit slice** (`CartSlice.jsx`) — `addItem`, `removeItem`, and
  `updateQuantity` reducers power every cart interaction across the app.

## Tech stack

- React 19 + Vite
- Redux Toolkit + React-Redux

## Project structure

```
src/
├── App.jsx                 # Landing page + view-toggling state
├── App.css                  # Landing page background image & layout
├── AboutUs.jsx               # Company description (about-us-container)
├── ProductList.jsx / .css       # Product listing page
├── CartItem.jsx / .css          # Shopping cart page
├── CartSlice.jsx             # Redux Toolkit cart slice
├── store.js                  # Redux store configuration
├── plantData.js               # Plant catalog data (name, cost, category)
├── components/
│   ├── Header.jsx / Navbar.css  # Shared header with cart badge & nav
│   └── PlantArt.jsx              # Inline SVG plant illustrations
└── main.jsx                  # App entry point (Redux Provider)
```

## Getting started locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Building for production

```bash
npm run build
```

Output is written to `dist/`.

## Deploying to GitHub Pages

This project uses the `gh-pages` package.

1. In `vite.config.js`, `base` is already set to `/e-plantShopping/`. If you
   rename the repository, update this value (and `homepage` in
   `package.json`) to match.
2. Push the project to a public GitHub repository named `e-plantShopping`.
3. Run:

   ```bash
   npm run deploy
   ```

   This builds the app and pushes `dist/` to the `gh-pages` branch.
4. In the repository's Settings → Pages, set the source to the `gh-pages`
   branch. The app will be live at
   `https://<your-github-username>.github.io/e-plantShopping/`.
