import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beta Theta Pi - MIT",
  description: "Beta Theta Pi at MIT",
  icons: {
    icon: "/other-images/btp-seal.jpg"
  }
}

import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
