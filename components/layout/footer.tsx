"use client"

import Link from "next/link"
import { Facebook, Instagram, MapPin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/betaupsilonbtp",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/betaupsilonbtp",
      color: "#E4405F",
    },
    {
      name: "Location",
      icon: MapPin,
      href: "https://maps.google.com/",
      color: "#4285F4",
    },
  ]

  return (
    <footer className="py-6 px-6 border-t bg-[#002F6C] text-white border-[#69B3E7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Column */}
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-2" style={{ fontFamily: "serif" }}>
              ΒΘΠ
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wider text-[#69B3E7]" style={{ fontFamily: "serif" }}>
                BETA UPSILON
              </h3>
              <p className="text-xs tracking-wide" style={{ fontFamily: "sans-serif" }}>
                BETA THETA PI
              </p>
            </div>
          </div>

          {/* Separator */}
          <div className="w-px h-12 bg-[#69B3E7]/30"></div>

          {/* Address Column */}
          <div className="text-center">
            <p className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
              123 Greek Row
              <br />
              University City, ST 12345
            </p>
          </div>

          {/* Separator */}
          <div className="w-px h-12 bg-[#69B3E7]/30"></div>

          {/* Contact Column */}
          <div className="text-center">
            <p className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
              rush@betaupsilonbtp.org
            </p>
          </div>

          {/* Separator */}
          <div className="w-px h-12 bg-[#69B3E7]/30"></div>

          {/* Social Icons Column */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 hover:scale-110 transform"
                  style={{
                    backgroundColor: `${social.color}20`,
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: social.color }} />
                  <span className="sr-only">{social.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
