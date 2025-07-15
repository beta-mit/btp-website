# Project Structure

This document explains the organization and architecture of the Beta Theta Pi website codebase.

## 📁 Root Directory

```
btp-website/
├── app/                    # Next.js App Router pages and layouts
├── components/             # Reusable React components
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets (images, icons, etc.)
├── [config files]          # Configuration files
├── CONTRIBUTING.md         # Development guidelines
├── PROJECT_STRUCTURE.md    # This file
└── README.md              # Project overview and setup
```

## 🚪 App Directory (`app/`)

The `app/` directory uses Next.js 13+ App Router for file-based routing.

```
app/
├── about/                  # About page route
│   └── page.tsx           # /about page component
├── benefits/               # Benefits page route
│   └── page.tsx           # /benefits page component
├── brothers/               # Brothers page route
│   └── page.tsx           # /brothers page component
├── housing/                # Housing page route
│   └── page.tsx           # /housing page component
├── rush/                   # Rush information route
│   └── page.tsx           # /rush page component
├── ClientLayout.tsx        # Client-side layout wrapper
├── globals.css            # Global styles and Tailwind directives
├── layout.tsx             # Root layout with metadata
├── page.tsx               # Homepage (/) component

```

### Key Files Explained

#### `layout.tsx`
- **Purpose**: Root layout for the entire application
- **Features**: Metadata configuration, SEO optimization
- **Wraps**: All pages with common layout elements

#### `ClientLayout.tsx`
- **Purpose**: Client-side layout with interactive features
- **Features**: Header, footer, smooth scrolling, animations
- **Usage**: Wraps page content with navigation and layout

#### `page.tsx`
- **Purpose**: Homepage with hero section and navigation grid
- **Features**: Interactive mouse tracking, image hover effects, responsive design
- **Navigation**: Links to all other pages in the site

#### `globals.css`
- **Purpose**: Global styles and Tailwind CSS directives
- **Includes**: Custom animations, utility classes, component styles
- **Usage**: Imported in layout for site-wide styling

### Page Components

Each page directory contains a `page.tsx` file that exports the page component:

- **About**: Chapter history, values, and mission
- **Alumni**: Redirects to external alumni website (https://beta-mit.org/)
- **Benefits**: Advantages of joining Beta Theta Pi
- **Brothers**: Active member profiles and leadership
- **Housing**: Chapter house details and amenities
- **Rush**: Information for prospective members

## 🧩 Components Directory (`components/`)

Reusable React components organized by purpose.

```
components/
├── layout/                 # Layout-specific components
│   ├── header.tsx         # Site header and navigation
│   └── footer.tsx         # Site footer with contact info
└── ui/                    # Base UI components
    ├── badge.tsx          # Badge component for labels/tags
    ├── button.tsx         # Button component with variants
    └── card.tsx           # Card component for content containers
```

### Layout Components

#### `header.tsx`
- **Purpose**: Site navigation and branding
- **Features**:
  - Responsive mobile menu
  - Multi-column navigation layout
  - Logo with hover effects
  - Brand colors and typography
- **Navigation Structure**: Organized in three columns for desktop

#### `footer.tsx`
- **Purpose**: Site footer with contact and social information
- **Features**:
  - Contact information
  - Social media links
  - Chapter address
  - Brand consistency

### UI Components

Built with Tailwind CSS and following consistent design patterns:

#### `button.tsx`
- **Variants**: Primary, secondary, outline, ghost
- **Sizes**: Small, medium, large
- **States**: Default, hover, active, disabled

#### `card.tsx`
- **Usage**: Content containers, member profiles, information blocks
- **Features**: Consistent padding, shadows, hover effects

#### `badge.tsx`
- **Usage**: Labels, tags, status indicators
- **Variants**: Different colors and sizes

## 🛠️ Lib Directory (`lib/`)

Utility functions and helper modules.

```
lib/
└── utils.ts               # General utility functions
```

#### `utils.ts`
- **Purpose**: Common utility functions used across the application
- **Includes**: Class name utilities, formatting functions, helpers
- **Pattern**: Pure functions that can be easily tested and reused

## 🖼️ Public Directory (`public/`)

Static assets served directly by the web server.

```
public/
├── images/                # (Future) Image assets
│   ├── brothers/         # Brother profile photos
│   ├── events/           # Event photos
│   └── general/          # General site images
├── file.svg              # File icon
├── globe.svg             # Globe icon
├── next.svg              # Next.js logo
├── vercel.svg            # Vercel logo
└── window.svg            # Window icon
```

### Asset Organization

- **Images**: Organized by type/purpose in subdirectories
- **Icons**: SVG files for scalable icons
- **Optimization**: Images should be optimized for web delivery
- **Naming**: Use descriptive, kebab-case file names

## ⚙️ Configuration Files

### `package.json`
- **Purpose**: Project dependencies and scripts
- **Scripts**: Development, build, lint, start commands
- **Dependencies**: Next.js, React, Tailwind CSS, UI libraries

### `tsconfig.json`
- **Purpose**: TypeScript configuration
- **Features**: Strict type checking, path aliases, ES module support
- **Aliases**: `@/` points to root directory for clean imports

### `tailwind.config.js`
- **Purpose**: Tailwind CSS configuration (generated by components.json)
- **Customization**: Brand colors, spacing, animations
- **Components**: shadcn/ui component styling

### `next.config.ts`
- **Purpose**: Next.js configuration
- **Features**: Build optimization, routing, deployment settings

### `eslint.config.mjs`
- **Purpose**: ESLint configuration for code quality
- **Rules**: Next.js best practices, accessibility, TypeScript

### `postcss.config.mjs`
- **Purpose**: PostCSS configuration for CSS processing
- **Plugins**: Tailwind CSS processing

### `components.json`
- **Purpose**: shadcn/ui component configuration
- **Settings**: Component paths, styling, aliases

## 🎨 Styling Architecture

### Tailwind CSS Organization

1. **Global Styles**: `app/globals.css`
   - Tailwind directives (@tailwind base, components, utilities)
   - Custom CSS classes
   - Global animations

2. **Component Styles**: Inline with Tailwind classes
   - Responsive design patterns
   - Hover and focus states
   - Brand color consistency

3. **Design System**: Consistent use of:
   - Colors: Primary (#002F6C), Secondary (#69B3E7), Accent (#F99FC9)
   - Typography: Serif for headers, sans-serif for body
   - Spacing: Tailwind's spacing scale
   - Animations: Custom CSS animations for interactions

## 🔄 Data Flow

### Page Rendering
1. **Server Side**: Next.js renders initial HTML
2. **Client Side**: React hydrates for interactivity
3. **Navigation**: Client-side routing with page transitions

### Component Communication
- **Props**: Data flows down from pages to components
- **Events**: User interactions bubble up through callbacks
- **State**: Local component state for UI interactions

### Asset Loading
- **Images**: Next.js Image component for optimization
- **Icons**: SVG imports for crisp rendering
- **Fonts**: Google Fonts loaded via Next.js font optimization

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 0-768px (base Tailwind classes)
- **Tablet**: 768px+ (`md:` prefix)
- **Desktop**: 1024px+ (`lg:` prefix)
- **Large**: 1280px+ (`xl:` prefix)

### Mobile-First Approach
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interactive elements

## 🎯 Performance Considerations

### Code Splitting
- Automatic page-level code splitting
- Component-level splitting where beneficial
- Dynamic imports for heavy components

### Image Optimization
- Next.js Image component for automatic optimization
- WebP format support
- Responsive image loading

### Bundle Optimization
- Tree shaking for unused code elimination
- Minification in production builds
- CSS purging for smaller stylesheets

## 🔒 Security

### Best Practices
- No sensitive data in client-side code
- Environment variables for configuration
- Sanitized user inputs (when forms are added)
- Secure headers via Next.js configuration

## 🚀 Deployment

### Build Process
1. TypeScript compilation
2. CSS processing with PostCSS/Tailwind
3. Bundle optimization and minification
4. Static asset optimization

### Hosting Considerations
- Optimized for Vercel deployment
- Static generation where possible
- Edge function support for dynamic features

---

This structure provides a solid foundation for maintaining and expanding the Beta Theta Pi website while ensuring code quality, performance, and developer experience.
