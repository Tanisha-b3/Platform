# LegalOS — Legal Work Management Platform

A modern landing page for a legal-tech SaaS platform built with Next.js 14, Tailwind CSS, Framer Motion, and Lucide React.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles & Tailwind imports
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── HeroSection.tsx   # Main hero with floating cards
│   ├── Navbar.tsx        # Top navigation
│   └── ThemeToggle.tsx   # Dark/light toggle
└── public/               # Static assets
```
