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

// Benefit/Value interface
export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  color?: string
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
