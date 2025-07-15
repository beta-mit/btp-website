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
