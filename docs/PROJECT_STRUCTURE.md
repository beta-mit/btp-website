# Project Structure

This document reflects the current organization and architecture of the Beta Theta Pi website codebase.

## 📁 Root Directory

```
btp-website/
├── app/                    # Next.js App Router pages and layouts
├── components/             # Reusable React components
├── lib/                    # Constants, design tokens, utilities, types
├── public/                 # Static assets grouped by route/usage
├── docs/                   # Project documentation
├── [config files]          # Configuration files
```

## 🚪 App Directory (`app/`)

Next.js App Router pages and global layout.

```
app/
├── about/
│   └── page.tsx            # /about
├── benefits/
│   └── page.tsx            # /benefits
├── brothers/
│   └── page.tsx            # /brothers (hardcoded data in-file)
├── housing/
│   └── page.tsx            # /housing
├── rush/
│   └── page.tsx            # /rush (reads events JSON from /public)
├── RootLayout.tsx          # Client layout (Header/Footer, transitions, loaders)
├── layout.tsx              # App metadata and wrapper delegating to RootLayout
├── page.tsx                # Homepage (hero + navigation grid)
└── globals.css             # Tailwind v4 + custom utilities, animations, tokens
```

### Key Files

- `layout.tsx`: Declares site `metadata` (title, description, icon) and wraps children with `AppRootLayout`.
- `RootLayout.tsx`: Client-side shell providing `Header`, `Footer`, `BackToTop`, `Loading`, and `PageTransition` around page content.
- `page.tsx`: Home hero (with interactive mask) and image-based nav grid.
- `globals.css`: Tailwind v4 entry with CSS variables, custom `@utility` classes (e.g., `bg-beta-blue-294`), animations, and print styles.
 - `globals.css`: Tailwind v4 entry with CSS variables, custom `@utility` classes (e.g., `bg-beta-blue-294`), font-face declarations (Albertus, Bernino Sans), animations, and print styles.

## 🧩 Components Directory (`components/`)

```
components/
├── layout/
│   ├── BackToTop.tsx
│   ├── Loading.tsx
│   ├── PageHeader.tsx
│   ├── PageTransition.tsx
│   ├── footer.tsx
│   └── header.tsx
└── ui/
    ├── badge.tsx
    ├── button.tsx          # shadcn-style primitives
    └── card.tsx
```

### Notes

- `header.tsx` renders three navigation columns derived from `NAVIGATION_ITEMS` in `lib/constants.ts`.
- `footer.tsx` reads address and social links from `FRATERNITY_INFO` in `lib/constants.ts`.
- UI primitives follow shadcn-style APIs and Tailwind class composition.

## 🛠️ Lib Directory (`lib/`)

```
lib/
├── animations.ts           # Animation helpers (if needed by pages/components)
├── constants.ts            # `FRATERNITY_INFO`, `NAVIGATION_ITEMS`, common classes
├── design-system.ts        # Centralized colors, typography, layout, effects
├── types.ts                # Shared TypeScript types
└── utils.ts                # `cn` (clsx + tailwind-merge) and misc utils
```

- Update navigation or contact info in `constants.ts`.
- Use `design-system.ts` for consistent tokens (colors, spacing, typography).

## 🖼️ Public Directory (`public/`)

Static assets served from the root. Organized by route/usage rather than a single images folder.

```
public/
├── about/                  # Assets used on /about
├── benefits/               # Assets used on /benefits
├── brothers/               # Brother headshots (e.g., amir.JPEG)
├── favicon/                # Favicon(s) (referenced in `app/layout.tsx`)
├── homepage/               # Images for homepage hero/grid
├── housing/                # House images a..t.jpg
├── rush/
│   ├── 2020-american.jpg
│   └── fall-rush-events.json  # Source of rush events displayed on /rush
└── shared/                 # Shared assets (e.g., `btp-logo.png`, placeholders)
```

### Rush Events Data

- The `/rush/page.tsx` fetches `GET /rush/fall-rush-events.json` at runtime.
- Shape:
  ```json
  [{
    "emoji": "🎳",
    "name": "Bowling Night",
    "secondaryEmoji": "🍕",
    "description": "Join us for...",
    "dates": ["Fri 9/1 7–9pm", "Sat 9/2 5–7pm"]
  }]
  ```
- Edit `public/rush/fall-rush-events.json` to update events without code changes.

## ⚙️ Configuration Files

- `package.json`: Scripts and deps (Next 15, React 19, Tailwind v4).
- `tsconfig.json`: Strict TS, `@/*` path alias to project root.
- `postcss.config.mjs`: Tailwind v4 via `@tailwindcss/postcss`.
- `next.config.ts`: Performance, image formats, and security headers.
- `eslint.config.mjs`: ESLint 9 + `next` config.

Note: Tailwind v4 does not require a local `tailwind.config.*` file for basic usage here.

## 🎨 Styling Architecture

Tailwind v4 with CSS variables defined in `:root` and custom utilities via `@utility` in `globals.css`.

- Brand tokens: `--beta-blue-294`, `--beta-blue-293`, `--beta-blue-292`, etc.
- Utility classes provided: `bg-beta-blue-294`, `text-beta-blue-294`, `shadow-beta`, `shadow-beta-lg`, and more.
- Animations: `animate-fade-in-up`, `page-enter`.

## 🔄 Data Flow & Rendering

- Pages are React function components; homepage and most inner pages are Client Components for interactivity.
- Navigation/branding comes from lib constants; page transitions and loaders provided by `RootLayout.tsx`.
- Assets are consumed via Next `Image` where appropriate.

## 📱 Responsive Design

- Mobile-first Tailwind classes; common breakpoints `md`, `lg`, `xl` used across components.

## 🔒 Security & Performance

- Security headers configured in `next.config.ts`.
- Images optimized; AVIF/WebP supported.
- Dev server uses Turbopack (`next dev --turbopack`).

---

This structure mirrors the current implementation to help you locate files quickly and make safe, consistent updates.
