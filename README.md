# Cahya — Landing Page

Standalone marketing landing page for the Cahya app. This is a separate Next.js project with its own git history — it is not part of the main app repo and is pushed to its own GitHub repo.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- shadcn/ui (Radix base, Nova preset)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — home page, currently the `OrbitalHeroSectionDemo` hero
- `src/components/ui/orbital-hero-section.tsx` — canvas-based animated hero background (shadcn-style component)
- `src/components/orbital-hero-section-demo.tsx` — demo/usage wrapper with the hero copy and CTAs

## Build

```bash
npm run build
```
