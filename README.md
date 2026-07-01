# Saba Raza — Portfolio

A premium, animated developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Stack

- React 18 + Vite
- Tailwind CSS (custom design tokens for color, glassmorphism, gradients)
- Framer Motion (scroll reveals, hero animations, page-load sequence)
- React Icons
- React Router (home + 404 page)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, ThemeToggle, Loader, cards, etc.
  sections/     One file per homepage section (Hero, About, Skills, ...)
  pages/        Home.jsx and NotFound.jsx, wired up in App.jsx via React Router
  hooks/        useTheme, useScrollProgress, useCountUp
  constants/    data.js — all copy, links, projects, and skills live here
public/
  resume.pdf    Replace with an updated resume export any time
  favicon.svg
  og-cover.svg
```

## Editing content

Almost everything on the page is driven from **`src/constants/data.js`** — update your bio, projects, skills, experience, education, certificates, and social links there without touching any component markup.

## Contact form

The contact form validates client-side and currently opens the visitor's email client (`mailto:`) pre-filled with their message, since no backend is wired up. To connect it to a real backend or a service like Formspree/EmailJS, replace the `handleSubmit` logic in `src/sections/Contact.jsx`.

## Deploying

This is a static Vite build — it deploys as-is to Vercel, Netlify, GitHub Pages, or Cloudflare Pages. Set the build command to `npm run build` and the output directory to `dist`.

## Notes

- Dark mode is the default if the visitor's OS prefers dark; otherwise it respects their last toggle (stored in `localStorage`).
- The custom cursor and floating hero animation automatically disable on touch devices and for users with `prefers-reduced-motion` set.
- Replace `public/resume.pdf` any time you have an updated resume — the "Download Resume" button always points to that file.
