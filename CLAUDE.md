# Claude Code Instructions

## Project Overview
R Flow Productions — marketing website for a video production company specializing in strategic video storytelling for tech companies and medical practitioners. Single-page site with sections for services, process, case studies, FAQ, founder bio, and CTAs.

## Tech Stack
- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)
- react-intersection-observer (scroll-triggered animations)

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server (Vite) |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |
| `npx tsc --noEmit` | Type check |

## Pre-Commit Checklist

**Before ANY git commit, run these checks:**

```bash
npx tsc --noEmit     # 1. TypeScript type checking
npm run lint          # 2. ESLint
npm run build         # 3. Build verification
```

All three must pass before committing.

## Project Structure

```
src/
├── App.tsx                # Main app — assembles all page sections
├── main.tsx               # React entry point
├── index.css              # Global styles + Tailwind directives
├── vite-env.d.ts          # Vite type declarations
└── components/
    ├── Header.tsx          # Navigation bar
    ├── Hero.tsx            # Hero section with CTA
    ├── Features.tsx        # Services/features grid
    ├── Process.tsx         # How-it-works steps
    ├── CaseStudy.tsx       # Portfolio/case study showcase
    ├── Faq.tsx             # FAQ accordion
    ├── FinalCta.tsx        # Bottom call-to-action
    ├── Founder.tsx         # Founder bio section
    ├── Footer.tsx          # Footer with links
    ├── ScrollToTop.tsx     # Scroll-to-top button
    └── ui/
        ├── Button.tsx      # Reusable button component
        ├── FeatureCard.tsx  # Feature card component
        ├── ProcessStep.tsx  # Process step component
        └── YouTubeEmbed.tsx # YouTube video embed
```

## Theme
Dark theme with blue/indigo primary accent:
- Background: `dark-800` (#121212) to `dark-900` (#090909) gradient
- Primary: `#4b66fc` (indigo-blue)
- Fonts: Inter (sans), Playfair Display (serif)

## Deployment
- Hosted on Netlify (auto-deploys from GitHub `main` branch)
- Build: `npm run build` → `dist/`
- SPA redirect configured in `netlify.toml`
