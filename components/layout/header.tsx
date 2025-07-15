"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAVIGATION_ITEMS } from "@/lib/constants"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationColumns = [
    [
      NAVIGATION_ITEMS[0], // About
      NAVIGATION_ITEMS[4], // Housing
    ],
    [
      NAVIGATION_ITEMS[1], // Brothers
      NAVIGATION_ITEMS[5], // Alumni
    ],
    [
      NAVIGATION_ITEMS[2], // Benefits
      NAVIGATION_ITEMS[3], // Rush
    ],
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative hover:scale-110 transition-transform duration-300">
                              <Image
                src="/btp-logo.png"
                alt="Beta Theta Pi Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-beta-blue-294"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-beta-blue-292/20 to-beta-blue-294/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-3">
              <div className="text-beta-blue-294 font-bold text-lg tracking-wider font-serif">
                ΒΘΠ
              </div>
              <div className="text-beta-blue-294 text-xs tracking-widest font-sans">
                BETA UPSILON
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-12">
              {navigationColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col space-y-2">
                  {column.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-beta-blue-294 font-semibold text-sm tracking-wide hover:text-beta-blue-293 transition-colors duration-200 hover:scale-105 transform transition-transform duration-200 font-sans"
                    >
                      {item.title.toUpperCase()}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden bg-beta-blue-294 text-white hover:bg-beta-blue-293"
            size="sm"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 mt-4">
              {navigationColumns.flat().map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-beta-blue-294 font-semibold tracking-wide hover:text-beta-blue-293 py-2 px-4 rounded transition-colors duration-200 font-sans"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
