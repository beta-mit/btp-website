# Beta Upsilon Chapter — Beta Theta Pi Website

Official website for the Beta Upsilon Chapter of Beta Theta Pi. The site showcases our brotherhood, recruitment, benefits, housing, and alumni network.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom `@utility` classes in `app/globals.css`
- **UI**: shadcn-style primitives (`components/ui`) + custom layout components
- **Icons**: Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+

### Install and Run

```bash
git clone <repository-url>
cd btp-website
npm install
npm run dev
```

Open `http://localhost:3000`.

## 🧭 Key Pages

- Home: Interactive hero and navigation grid
- About, Brothers, Benefits, Housing
- Rush: Pulls events from `public/rush/fall-rush-events.json` and embeds a Google Calendar
- Alumni: External link to `https://beta-mit.org/`

## 📁 Structure Highlights

- `app/layout.tsx`: Metadata and wrapper delegating to `app/RootLayout.tsx`
- `app/RootLayout.tsx`: Client shell with `Header`, `Footer`, `BackToTop`, loading screen, and page transitions
- `lib/constants.ts`: `FRATERNITY_INFO` (address, socials, email) and `NAVIGATION_ITEMS`
- `lib/design-system.ts`: Colors, typography, layout, transitions, helpers
- `public/`: Organized by route (e.g., `homepage/`, `rush/`, `housing/`, `shared/`)

See `docs/PROJECT_STRUCTURE.md` for more.

## 🔁 Content Updates

- Text/images: Edit page components in `app/` and assets in `public/`
- Rush events: Edit `public/rush/fall-rush-events.json` (no code changes required)
- Navigation/contact: Update `lib/constants.ts`

## 🧩 Styling

- Tailwind v4 with tokens and utilities in `app/globals.css`
- Fonts:
  - Albertus — used for big, important headings (`font-serif`)
  - Bernino Sans — used for titles/headlines, uppercase (`font-sans` + `uppercase`)
  - Arial — used for body copy (`font-body`)
- Prefer tokens/utilities: `bg-beta-blue-294`, `text-beta-blue-294`, `shadow-beta`
- Shared tokens/utilities also exported in `lib/design-system.ts`

## 📈 Scripts

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint

## 🤝 Contributing

See `docs/CONTRIBUTING.md`.

## 📞 Contact

- General: `beta-contact@mit.edu`
- Rush: `beta-rush@mit.edu`

---

Men of Principle. Leaders by Nature.
