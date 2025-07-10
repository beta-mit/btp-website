"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Enhanced smooth scrolling for programmatic scrolls
    const smoothScrollTo = (element: Element) => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }

    // Add smooth scrolling to all anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          smoothScrollTo(element)
        }
      }
    }

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick)
    })

    // Cleanup
    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick)
      })
    }
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} momentum-scroll`}>
        <Header />
        <main className="bg-white min-h-screen smooth-transition">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
