# Beta Upsilon Chapter - Beta Theta Pi Website

Official website for the Beta Upsilon Chapter of Beta Theta Pi fraternity. This modern, responsive website showcases our brotherhood, recruitment process, benefits, housing, and alumni network.

## 🏛️ About Beta Theta Pi

Beta Theta Pi is one of the oldest college fraternities in North America, founded in 1839 at Miami University. The Beta Upsilon Chapter represents our local presence and commitment to the ideals of mutual assistance, intellectual growth, trust, and responsible conduct.

## 🚀 Features

- **Modern Design**: Clean, responsive design with interactive elements
- **Mobile Optimized**: Fully responsive across all device sizes
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Comprehensive metadata and search engine optimization
- **Accessibility**: WCAG compliant design principles

## 📱 Pages

- **Home**: Hero section with interactive navigation grid
- **About**: Chapter history, values, and mission
- **Brothers**: Active member profiles and leadership
- **Benefits**: Advantages of joining Beta Theta Pi
- **Rush**: Information for prospective members
- **Housing**: Chapter house details and amenities
- **Alumni**: Redirects to external alumni website (https://beta-mit.org/)

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd btp-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📝 Development

### Project Structure

```
btp-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── benefits/          # Benefits page
│   ├── brothers/          # Brothers page
│   ├── housing/           # Housing page
│   ├── rush/              # Rush information page
│   ├── ClientLayout.tsx   # Client-side layout wrapper
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── layout/           # Layout components
│   │   ├── header.tsx    # Site header and navigation
│   │   └── footer.tsx    # Site footer
│   └── ui/               # Base UI components
│       ├── badge.tsx     # Badge component
│       ├── button.tsx    # Button component
│       └── card.tsx      # Card component
├── lib/                  # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
└── [config files]       # Various configuration files
```

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Styling Guidelines

- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Maintain consistent color scheme:
  - Primary: `#002F6C` (Beta Theta Pi Blue)
  - Secondary: `#69B3E7` (Light Blue)
  - Accent: `#F99FC9` (Pink accent)

### Component Guidelines

- Use TypeScript for all components
- Follow React functional component patterns
- Implement proper accessibility (ARIA labels, semantic HTML)
- Use descriptive component and prop names

## 🎨 Design System

### Colors

- **Primary Blue**: `#002F6C` - Main brand color
- **Light Blue**: `#69B3E7` - Secondary highlights
- **White**: `#FFFFFF` - Background and text
- **Black**: `#000000` - Text and overlays

### Typography

- **Headers**: Serif fonts for formal/traditional feel
- **Body**: Sans-serif fonts for readability
- **Branding**: Greek letters (ΒΘΠ) prominently displayed

### Interactive Elements

- Hover effects on navigation and images
- Smooth animations and transitions
- Interactive hero section with mouse tracking
- Responsive image scaling in navigation grid

## 📈 SEO & Performance

The website is optimized for:
- Search engine visibility
- Fast loading times
- Core Web Vitals
- Mobile performance
- Accessibility standards

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes following the coding guidelines
3. Test thoroughly on multiple devices/browsers
4. Submit a pull request with detailed description

### Content Updates

To update content:
- **Text content**: Edit the respective page components in `app/`
- **Images**: Add to `public/` directory and update references
- **Styling**: Modify Tailwind classes or add to `globals.css`

## 📞 Contact & Support

For questions about the website or technical issues:
- **Email**: [webmaster@betaupsilonbtp.org](mailto:webmaster@betaupsilonbtp.org)
- **Rush Inquiries**: [rush@betaupsilonbtp.org](mailto:rush@betaupsilonbtp.org)

## 📄 License

This project is private and confidential to the Beta Upsilon Chapter of Beta Theta Pi.

---

**Men of Principle. Leaders by Nature.**
*Beta Theta Pi - Beta Upsilon Chapter*
