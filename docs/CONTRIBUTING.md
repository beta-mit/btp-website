# Contributing to Beta Theta Pi Website

Thanks for helping improve the Beta Upsilon Chapter website. This document captures our current conventions with Next.js 15, React 19, and Tailwind v4.

## 🤝 Getting Started

### Prerequisites

- Node.js 18+
- Git configured with your name/email

### Setup

```bash
git clone <your-fork-url>
cd btp-website
npm install
npm run dev
```

## 📝 Code Standards

### TypeScript

- `strict` is enabled; avoid `any`
- Define interfaces/types for props and data structures
- Use clear names and small, focused components

```ts
interface BrotherProfile {
  name: string
  classYear: string
  major: string
  position?: string
}
```

### React

- Function components and hooks
- Prefer composition over deep prop drilling
- Memoize only where there is a measurable benefit

### Styling (Tailwind v4)

- Use Tailwind utility classes and the custom utilities in `app/globals.css`
- Font roles:
  - `font-serif` → Albertus for big headings
  - `font-sans uppercase` → Bernino Sans for titles/headlines
  - `font-body` → Arial for body text
- Prefer tokens/utilities over hard-coded values
- Examples: `text-beta-blue-294`, `bg-beta-blue-293`, `shadow-beta`

## 🗂️ Project Conventions

- Navigation and contact info live in `lib/constants.ts`
- Design tokens/utilities live in `lib/design-system.ts`
- Shared utility `cn` is in `lib/utils.ts`
- Assets are placed under `public/` grouped by route (e.g., `public/rush/`)

## 🔧 Common Tasks

### Update Brothers

`app/brothers/page.tsx` currently holds the in-file data. Add entries to the `brothersDatabase` object and place new headshots under `public/brothers/`.

### Update Rush Events

Edit `public/rush/fall-rush-events.json` to change the events displayed on `/rush`. No code changes are needed if you preserve the JSON shape:

```json
[
  {
    "emoji": "🎳",
    "name": "Bowling Night",
    "secondaryEmoji": "🍕",
    "description": "Join us for...",
    "dates": ["Fri 9/1 7–9pm"]
  }
]
```

### Modify Navigation/Footer

Edit `NAVIGATION_ITEMS` and `FRATERNITY_INFO` in `lib/constants.ts`.

## 🚀 Workflow

- Branch from `main` using `feature/*`, `fix/*`, or `docs/*`
- Use conventional commits, e.g.:

```
feat(rush): support agenda calendar embed
fix(header): correct mobile toggle aria-label
docs(project): describe Tailwind v4 utilities
```

- Validate before pushing:

```bash
npm run build
npm run lint
```

## ✅ QA Checklist

- Keyboard and screen reader friendly
- Images optimized and have meaningful alt text
- Layout responsive on mobile/tablet/desktop
- No console errors; Lighthouse reasonable

## 🔒 Security & 📈 Performance

- Do not commit secrets
- Keep deps updated when possible
- Leverage Next Image and Tailwind for performance
- Security headers are set in `next.config.ts`

## 📞 Help

- Development questions: open an issue or ask the maintainers
- Content questions: contact chapter leadership/webmaster

Thanks again for contributing and keeping our site sharp and consistent.
