import { cn } from "@/lib/utils"

// Brand Colors - Centralizing all color values
export const colors = {
  // Beta Theta Pi Brand Colors
  beta: {
    blue: {
      primary: "#002F6C",      // beta-blue-294
      secondary: "#003DA5",     // beta-blue-293
      light: "#69B3E7",        // beta-blue-292
    },
    red: "#AB2328",            // PANTONE 7621
    gold: "#998542",           // PANTONE 4505
    silver: "#8A8D8F",         // PANTONE 877
    redLight: "#C73E42",
    goldLight: "#B8A456",
    silverLight: "#A1A4A6",
    pink: "#F8BBD9",           // delicate-pink
  },
  // Semantic Colors
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
  },
  white: "#FFFFFF",
} as const

// Typography Classes - Consistent font application
export const typography = {
  // Font Families
  fonts: {
    serif: "font-serif",
    sans: "font-sans",
    body: "font-body", // Will fallback to sans if not defined
  },

  // Heading Styles
  headings: {
    hero: "text-4xl md:text-6xl font-bold tracking-wider font-serif",
    section: "text-3xl md:text-4xl font-bold tracking-wider font-serif",
    card: "text-xl font-bold tracking-wider font-sans",
    subheading: "text-lg font-bold tracking-wide font-sans",
  },

  // Body Text Styles
  body: {
    large: "text-xl leading-relaxed font-body",
    base: "text-base leading-relaxed font-body",
    small: "text-sm leading-relaxed font-body",
  },
} as const

// Layout and Spacing
export const layout = {
  containers: {
    page: "max-w-4xl mx-auto",
    section: "max-w-6xl mx-auto",
    content: "max-w-7xl mx-auto px-6",
  },

  sections: {
    hero: "py-20 px-6",
    content: "py-20 px-6 bg-white",
  },

  grids: {
    cards2: "grid grid-cols-1 md:grid-cols-2 gap-8",
    cards3: "grid grid-cols-1 md:grid-cols-3 gap-8",
    cards4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
  },
} as const

// Animation and Effects
export const effects = {
  // Card Rotations
  cardRotation: {
    left: "transform rotate-1",
    right: "transform -rotate-1",
    hover: "hover:rotate-0",
    none: "",
  },

  // Common Transitions
  transitions: {
    base: "transition-all duration-300",
    fast: "transition-all duration-200",
    slow: "transition-all duration-500",
  },

  // Hover Effects
  hover: {
    scale: "hover:scale-105 transform transition-transform duration-300",
    scaleSmall: "hover:scale-110 transition-transform duration-300",
    shadow: "hover:shadow-xl transition-all duration-300",
    lift: "hover:shadow-beta-lg transition-all duration-300",
  },

  // Image Overlays
  overlays: {
    gradient: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent",
    betaGradient: `absolute inset-0 bg-gradient-to-t from-[${colors.beta.blue.primary}]/50 to-transparent`,
    hoverFade: "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  },
} as const

// Utility Functions for Dynamic Styling
export function getCardRotation(index: number): string {
  const rotations = [effects.cardRotation.none, effects.cardRotation.left, effects.cardRotation.right]
  return rotations[index % 3] || effects.cardRotation.none
}

export function getBetaColor(variant: 'primary' | 'secondary' | 'light' = 'primary'): string {
  return colors.beta.blue[variant]
}

// Common Component Styles
export const componentStyles = {
  // Card Variants
  cards: {
    base: cn(
      "bg-white border-2 border-beta-blue-292",
      effects.hover.shadow,
      effects.transitions.base
    ),

    rotated: (index: number) => cn(
      componentStyles.cards.base,
      getCardRotation(index),
      effects.cardRotation.hover
    ),

    featured: cn(
      "bg-white/90 backdrop-blur-sm border-2 border-beta-blue-292",
      effects.hover.shadow,
      effects.transitions.base
    ),
  },

  // Button Variants
  buttons: {
    primary: cn(
      "bg-beta-blue-294 hover:bg-beta-blue-293 text-white font-bold",
      effects.hover.scale,
      effects.transitions.base,
      typography.fonts.sans
    ),

    cta: cn(
      "bg-beta-blue-294 hover:bg-beta-blue-293 text-white font-bold px-8 py-3 text-lg",
      effects.hover.scale,
      effects.transitions.base,
      typography.fonts.sans
    ),
  },

  // Icon Styles
  icons: {
    large: "w-12 h-12",
    medium: "w-8 h-8",
    small: "w-4 h-4",
    betaColor: `text-[${colors.beta.blue.primary}]`,
    withHover: cn(
      `text-[${colors.beta.blue.primary}] group-hover:text-[${colors.beta.blue.secondary}]`,
      effects.hover.scaleSmall,
      effects.transitions.base
    ),
  },

  // Badge Styles
  badges: {
    beta: `bg-[${colors.beta.blue.primary}] text-white`,
    secondary: `bg-[${colors.beta.blue.light}] text-[${colors.beta.blue.primary}]`,
  },
} as const

// Text Color Utilities
export const textColors = {
  beta: {
    primary: `text-[${colors.beta.blue.primary}]`,
    secondary: `text-[${colors.beta.blue.secondary}]`,
    light: `text-[${colors.beta.blue.light}]`,
  },
  gray: {
    600: "text-gray-600",
    700: "text-gray-700",
    800: "text-gray-800",
  },
} as const

// Helper function to create consistent page headers
export function createPageHeaderClasses(centered: boolean = true) {
  return cn(
    layout.sections.hero,
    centered && "text-center",
    layout.containers.page
  )
}

// Helper function for section layouts
export function createSectionClasses(background: 'white' | 'gray' = 'white') {
  return cn(
    layout.sections.content,
    background === 'gray' && "bg-gray-50"
  )
}
