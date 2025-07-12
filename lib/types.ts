import { LucideIcon } from "lucide-react"

// Base Person interface
export interface Person {
  name: string
  image: string
  year?: string
  major?: string
}

// Brother/Executive Board Member
export interface Brother extends Person {
  position?: string
  bio?: string
}

// Alumni
export interface Alumnus extends Person {
  class: string
  position: string
  location: string
  achievement: string
}

// Event interface for rush events, alumni events, etc.
export interface Event {
  title: string
  date: string
  time?: string
  location: string
  description: string
  icon?: LucideIcon
  type?: string
}

// Benefit/Value interface
export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

// Testimonial interface
export interface Testimonial {
  name: string
  year: string
  quote: string
  position: string
  image?: string
}

// Statistic interface for alumni stats, etc.
export interface Statistic {
  icon: LucideIcon
  number: string
  label: string
  description: string
}

// Amenity interface for housing features
export interface Amenity {
  icon: LucideIcon
  title: string
  description: string
}

// Room Type interface for housing
export interface RoomType {
  type: string
  price: string
  description: string
  features: string[]
}

// Social Media Link interface
export interface SocialLink {
  name: string
  icon: LucideIcon
  href: string
  color: string
}

// Navigation Item interface
export interface NavigationItem {
  title: string
  href: string
  image?: string
}

// Core Values interface
export interface CoreValue extends Benefit {
  // Inherits icon, title, description from Benefit
  // Can add additional properties if needed
}

// Rush Tips type
export type RushTip = string

// Generic Card Data interface for flexible card components
export interface CardData {
  title: string
  description?: string
  image?: string
  icon?: LucideIcon
  badge?: string
  metadata?: Record<string, string>
  action?: {
    text: string
    href: string
  }
}

// Page Header Data interface
export interface PageHeaderData {
  title: string
  subtitle: string
  description?: string
  cta?: {
    text: string
    href: string
    variant?: 'primary' | 'secondary'
  }
}

// Section Data interface
export interface SectionData {
  title: string
  subtitle?: string
  description?: string
  background?: 'white' | 'gray'
}

// Image Data interface
export interface ImageData {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}
