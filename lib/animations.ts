import { cn } from "@/lib/utils"

// Animation keyframes and utilities for consistent motion design

export const animations = {
  // Entrance animations
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  bounce: "animate-bounce-crazy",
  wiggle: "animate-wiggle",
  shake: "animate-shake",

  // Hover animations
  scaleHover: "hover:scale-105 transform transition-transform duration-300",
  scaleSmallHover: "hover:scale-110 transition-transform duration-300",
  rotateHover: "hover:rotate-3 transition-transform duration-300",
  liftHover: "hover:-translate-y-2 transition-transform duration-300",

  // Image effects
  imageScale: "group-hover:scale-105 transition-transform duration-300",
  imageZoom: "group-hover:scale-110 transition-transform duration-300",

  // Overlay effects
  fadeOverlay: "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  slideOverlay: "transform translate-y-full group-hover:translate-y-0 transition-transform duration-300",

  // Loading states
  pulse: "animate-pulse",
  spin: "animate-spin",

  // Text effects
  textGlow: "hover:text-shadow-glow transition-all duration-300",
  textFloat: "hover:-translate-y-1 transition-transform duration-200",
} as const

// Transition utilities
export const transitions = {
  // Duration variants
  fast: "transition-all duration-150",
  normal: "transition-all duration-300",
  slow: "transition-all duration-500",

  // Easing variants
  easeOut: "transition-all duration-300 ease-out",
  easeIn: "transition-all duration-300 ease-in",
  easeBounce: "transition-all duration-500 ease-bounce",

  // Property-specific transitions
  transform: "transition-transform duration-300",
  opacity: "transition-opacity duration-300",
  colors: "transition-colors duration-300",
  shadow: "transition-shadow duration-300",
} as const

// Hover effect combinations
export const hoverEffects = {
  // Card hover effects
  cardLift: cn(
    "hover:shadow-xl hover:-translate-y-2",
    transitions.normal
  ),

  cardScale: cn(
    "hover:scale-105",
    transitions.transform
  ),

  cardGlow: cn(
    "hover:shadow-beta-lg hover:shadow-beta-blue-292/20",
    transitions.shadow
  ),

  // Button hover effects
  buttonPress: cn(
    "hover:scale-95 active:scale-90",
    transitions.transform
  ),

  buttonGlow: cn(
    "hover:shadow-lg hover:shadow-beta-blue-294/30",
    transitions.normal
  ),

  // Image hover effects
  imageReveal: cn(
    "overflow-hidden group-hover:brightness-110",
    transitions.normal
  ),

  imageParallax: cn(
    "group-hover:scale-105 group-hover:rotate-1",
    transitions.slow
  ),

  // Icon hover effects
  iconBounce: cn(
    "hover:scale-110 hover:-translate-y-1",
    transitions.transform
  ),

  iconSpin: cn(
    "hover:rotate-12",
    transitions.transform
  ),

  // Text hover effects
  textHighlight: cn(
    "hover:text-beta-blue-293 hover:font-semibold",
    transitions.colors
  ),

  linkUnderline: cn(
    "relative hover:after:scale-x-100 after:scale-x-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-beta-blue-294 after:origin-left",
    "after:transition-transform after:duration-300"
  ),
} as const

// Stagger animations for lists/grids
export const staggerAnimations = {
  // Stagger delays for entrance animations
  stagger1: "animation-delay-100",
  stagger2: "animation-delay-200",
  stagger3: "animation-delay-300",
  stagger4: "animation-delay-400",

  // Utility to get stagger class
  getStagger: (index: number, delay: number = 100) => {
    return `animation-delay-${index * delay}`
  },
} as const

// Intersection Observer animation utilities
export const observerAnimations = {
  // Classes to apply when element enters viewport
  slideInLeft: "opacity-0 -translate-x-12 data-[in-view]:opacity-100 data-[in-view]:translate-x-0",
  slideInRight: "opacity-0 translate-x-12 data-[in-view]:opacity-100 data-[in-view]:translate-x-0",
  slideInUp: "opacity-0 translate-y-12 data-[in-view]:opacity-100 data-[in-view]:translate-y-0",
  slideInDown: "opacity-0 -translate-y-12 data-[in-view]:opacity-100 data-[in-view]:translate-y-0",
  fadeIn: "opacity-0 data-[in-view]:opacity-100",
  scaleIn: "opacity-0 scale-95 data-[in-view]:opacity-100 data-[in-view]:scale-100",
} as const

// Card rotation utilities (extracted from repetitive patterns)
export const cardRotations = {
  // Rotation patterns
  left: "transform rotate-1",
  right: "transform -rotate-1",
  none: "",

  // Get rotation based on index
  getRotation: (index: number) => {
    const rotations = [cardRotations.none, cardRotations.left, cardRotations.right]
    return rotations[index % 3]
  },

  // Hover reset
  hoverReset: "hover:rotate-0",

  // Combined rotation with hover
  rotatedCard: (index: number) => cn(
    cardRotations.getRotation(index),
    cardRotations.hoverReset,
    transitions.transform
  ),
} as const

// Utility function to combine multiple animation classes
export function combineAnimations(...classes: string[]): string {
  return cn(...classes)
}

// Preset animation combinations for common components
export const presets = {
  // Interactive card
  interactiveCard: cn(
    hoverEffects.cardLift,
    cardRotations.hoverReset,
    "group cursor-pointer"
  ),

  // Animated button
  animatedButton: cn(
    hoverEffects.buttonGlow,
    animations.scaleHover,
    "transform-gpu" // Better performance
  ),

  // Hero image with parallax
  heroImage: cn(
    hoverEffects.imageParallax,
    "transform-gpu"
  ),

  // Floating icon
  floatingIcon: cn(
    hoverEffects.iconBounce,
    animations.pulse,
    "transform-gpu"
  ),

  // Smooth link
  smoothLink: cn(
    hoverEffects.textHighlight,
    hoverEffects.linkUnderline
  ),
} as const
