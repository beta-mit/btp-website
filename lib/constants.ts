// Beta Theta Pi constants and static data

export const FRATERNITY_INFO = {
  name: "Beta Theta Pi",
  chapter: "Beta Upsilon Chapter",
  founded: 1839,
  foundedAt: "Miami University in Oxford, Ohio",
  motto: "Men of Principle for a Principled Life",
  address: {
    street: "119 Bay State Road",
    city: "Boston",
    state: "MA",
    zip: "02215"
  },
  contact: {
    email: "beta-contact@mit.edu",
    social: {
      facebook: "https://www.facebook.com/betamit/",
      instagram: "https://www.instagram.com/beta_mit/",
      maps: "https://www.google.com/maps/place/Beta+Theta+Pi/@42.350442,-71.09872,17z/data=!3m1!4b1!4m6!3m5!1s0x89e379f817c9ab5d:0x54de239b314da47d!8m2!3d42.350442!4d-71.09872!16s%2Fg%2F11fy99xbs4?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    }
  }
} as const

export const NAVIGATION_ITEMS = [
  { title: "About", href: "/about" },
  { title: "Brothers", href: "/brothers" },
  { title: "Benefits", href: "/benefits" },
  { title: "Rush", href: "/rush" },
  { title: "Housing", href: "/housing" },
  { title: "Alumni", href: "https://beta-mit.org/" },
] as const

export const RUSH_TIPS = [
  "Be yourself - authenticity is what we value most",
  "Ask questions - we want you to make an informed decision",
  "Attend multiple events to get a full picture of our brotherhood",
  "Dress appropriately for each event (we'll let you know the dress code)",
  "Bring friends who might be interested - rush is more fun together",
  "Follow up with brothers you connect with",
] as const

export const ROOM_PRICING = {
  single: {
    type: "Single Room",
    price: "$800/month",
    description: "Private bedroom with shared bathroom facilities",
    features: ["Private bedroom", "Shared bathroom", "Desk and storage", "All utilities included"],
  },
  double: {
    type: "Double Room",
    price: "$600/month",
    description: "Shared bedroom with roommate and bathroom facilities",
    features: ["Shared bedroom", "Shared bathroom", "Individual desk space", "All utilities included"],
  },
  suite: {
    type: "Suite Style",
    price: "$900/month",
    description: "Private bedroom with shared living area and bathroom",
    features: ["Private bedroom", "Shared living area", "Private bathroom", "Mini-fridge included"],
  },
} as const

export const ALUMNI_STATS = {
  livingAlumni: "2,500+",
  states: "50",
  careerSuccess: "85%",
  annualGiving: "$2.5M",
} as const

// Default placeholder image
export const DEFAULT_IMAGE = "/placeholder.svg"

// Common CSS class combinations
export const COMMON_CLASSES = {
  pageContainer: "min-h-screen",
  sectionSpacing: "py-20 px-6",
  centerText: "text-center",
  maxWidth: {
    narrow: "max-w-4xl mx-auto",
    wide: "max-w-6xl mx-auto",
    full: "max-w-7xl mx-auto",
  },
} as const
