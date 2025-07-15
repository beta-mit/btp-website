import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beta Theta Pi - MIT",
  description: "Beta Theta Pi at MIT",
  icons: {
    icon: "/favicon/btp-seal.jpg"
  }
}

import AppRootLayout from "./RootLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppRootLayout>{children}</AppRootLayout>
}
