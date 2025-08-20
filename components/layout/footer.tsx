"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, MapPin } from "lucide-react"
import { FRATERNITY_INFO } from "@/lib/constants"

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: FRATERNITY_INFO.contact.social.facebook,
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: FRATERNITY_INFO.contact.social.instagram,
      color: "#E4405F",
    },
    {
      name: "Location",
      icon: MapPin,
      href: FRATERNITY_INFO.contact.social.maps,
      color: "#4285F4",
    },
  ]

  return (
    <footer className="py-6 px-6 border-t bg-beta-blue-294 text-white border-beta-blue-292">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Column */}
          <Link href="/" className="flex items-center group">
            <div className="relative mr-3 hover:scale-110 transition-transform duration-300">
              <Image
                src="/shared/btp-logo.png"
                alt="Beta Theta Pi Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-beta-blue-292"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-beta-blue-292 font-normal text-lg tracking-wider font-serif group-hover:text-white transition-colors duration-300">
                ΒΘΠ
              </div>
              <div className="text-beta-blue-292 text-xs tracking-widest font-sans uppercase group-hover:text-white transition-colors duration-300">
                BETA UPSILON
              </div>
            </div>
          </Link>

          {/* Separator */}
          <div className="w-px h-12 bg-beta-blue-292/30"></div>

          {/* Address Column */}
          <div className="text-center">
            <p className="text-sm font-body">
              {FRATERNITY_INFO.address.street}
              <br />
              {FRATERNITY_INFO.address.city}, {FRATERNITY_INFO.address.state} {FRATERNITY_INFO.address.zip}
            </p>
          </div>

          {/* Separator */}
          <div className="w-px h-12 bg-beta-blue-292/30"></div>

          {/* Contact Column */}
          <div className="text-center">
            <p className="text-sm font-body">
              {FRATERNITY_INFO.contact.email}
            </p>
          </div>

          {/* Separator */}
          <div className="w-px h-12 bg-beta-blue-292/30"></div>

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
