# ITZFIZZ Scroll Car

A responsive React and Vite landing page featuring a scroll-pinned car animation built with GSAP ScrollTrigger.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. Create the optimized production build with:

```bash
npm run build
npm run preview
```

The build is written to `dist/`.

## GitHub Pages deployment

For a repository site served at `https://<user>.github.io/<repository>/`, edit `base` in `vite.config.js` to `'/<repository>/'` before building. For a user or organization site served at the domain root, keep `base: '/'`. Build with `npm run build` and publish the contents of `dist/` to GitHub Pages (for example, through a Pages workflow that uploads `dist/` as its artifact).

## Animation and accessibility

The hero pins during scrolling; the car, lime trail, headline color, and example statistic cards follow the same scrubbed GSAP timeline in both scroll directions. Motion is reduced when the operating system's reduced-motion preference is enabled. Statistic values are illustrative placeholders.

## Image credit

The car image is the silver top-view sports car PNG by sougoumarv from [Wallpapers.com](https://wallpapers.com/png/silver-sports-car-top-view-s8p2owpnx1mpd504.html). The source page lists it as free with attribution required.
