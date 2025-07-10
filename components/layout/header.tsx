"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationColumns = [
    [
      { title: "About", href: "/about" },
      { title: "Housing", href: "/housing" },
    ],
    [
      { title: "Brothers", href: "/brothers" },
      { title: "Alumni", href: "/alumni" },
    ],
    [
      { title: "Benefits", href: "/benefits" },
      { title: "Rush", href: "/rush" },
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
                src="/placeholder.svg?height=60&width=60"
                alt="Beta Theta Pi Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-[#002F6C]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#69B3E7]/20 to-[#002F6C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-3">
              <div className="text-[#002F6C] font-bold text-lg tracking-wider" style={{ fontFamily: "serif" }}>
                ΒΘΠ
              </div>
              <div className="text-[#002F6C] text-xs tracking-widest" style={{ fontFamily: "sans-serif" }}>
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
                      className="text-[#002F6C] font-semibold text-sm tracking-wide hover:text-[#003DA5] transition-colors duration-200 hover:scale-105 transform transition-transform duration-200"
                      style={{ fontFamily: "sans-serif" }}
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
            className="lg:hidden bg-[#002F6C] text-white hover:bg-[#003DA5]"
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
                  className="text-[#002F6C] font-semibold tracking-wide hover:text-[#003DA5] py-2 px-4 rounded transition-colors duration-200"
                  style={{ fontFamily: "sans-serif" }}
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
