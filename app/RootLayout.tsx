"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/BackToTop"
import { Loading } from "@/components/layout/Loading"
import { PageTransition } from "@/components/layout/PageTransition"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and wait for fonts/images to load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} momentum-scroll`}>
        {/* Skip to Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-beta-blue-294 text-white px-4 py-2 rounded-md font-semibold z-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-beta-blue-292"
        >
          Skip to main content
        </a>
        {isLoading && <Loading />}
        <Header />
        <main id="main-content" className="bg-white min-h-screen smooth-transition">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
