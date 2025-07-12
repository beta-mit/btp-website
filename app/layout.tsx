import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beta Upsilon Chapter - Beta Theta Pi",
  description: "Official website of the Beta Upsilon Chapter of Beta Theta Pi fraternity. Learn about our brotherhood, rush process, benefits, housing, and alumni network.",
  keywords: ["Beta Theta Pi", "Beta Upsilon", "BTP", "fraternity", "brotherhood", "rush", "alumni", "university"],
  authors: [{ name: "Beta Upsilon Chapter" }],
  creator: "Beta Upsilon Chapter - Beta Theta Pi",
  publisher: "Beta Upsilon Chapter - Beta Theta Pi",
  openGraph: {
    title: "Beta Upsilon Chapter - Beta Theta Pi",
    description: "Official website of the Beta Upsilon Chapter of Beta Theta Pi fraternity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beta Upsilon Chapter - Beta Theta Pi",
    description: "Official website of the Beta Upsilon Chapter of Beta Theta Pi fraternity.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
