"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const navigationSections = [
    {
      title: "About",
      href: "/about",
      image: "/placeholder.svg",
    },
    {
      title: "Brothers",
      href: "/brothers",
      image: "/placeholder.svg",
    },
    {
      title: "Benefits",
      href: "/benefits",
      image: "/placeholder.svg",
    },
    {
      title: "Rush",
      href: "/rush",
      image: "/placeholder.svg",
    },
    {
      title: "Housing",
      href: "/housing",
      image: "/placeholder.svg",
    },
    {
      title: "Alumni",
      href: "/alumni",
      image: "/placeholder.svg",
    },
  ]

  const getImageScale = (currentIndex: number, hoveredIndex: number | null) => {
    if (hoveredIndex === null) return "scale-100"
    if (currentIndex === hoveredIndex) return "scale-110 z-10"

    // Only shrink adjacent/surrounding images
    const isAdjacent = Math.abs(currentIndex - hoveredIndex) === 1
    const isVerticallyAdjacent = Math.abs(currentIndex - hoveredIndex) === 3 // For 3-column grid

    if (isAdjacent || isVerticallyAdjacent) {
      return "scale-90"
    }

    return "scale-100"
  }

  // Add intersection observer for smooth animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-white">
        <div
          ref={heroRef}
          className="relative w-full h-full cursor-none"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Hero Image */}
          <Image
            src="/hero-placeholder.svg"
            alt="Beta Theta Pi Brothers"
            fill
            className="object-cover"
            priority
          />

          {/* Animated Overlay Image (visible through magnifying glass) */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300"
            style={{
              clipPath: isHovering
                ? `circle(100px at ${mousePosition.x}px ${mousePosition.y}px)`
                : "circle(0px at 50% 50%)",
              transition: "clip-path 0.1s ease-out",
            }}
          >
            <Image
              src="/hero-placeholder.svg"
              alt="Animated Beta Theta Pi Brothers"
              fill
              className="object-cover opacity-100 saturate-150 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-delicate-pink/20 to-beta-blue-292/20"></div>
          </div>

          {/* Magnifying Glass Cursor */}
          {isHovering && (
            <div
              className="absolute pointer-events-none z-10 w-8 h-8 border-4 border-beta-blue-294 rounded-full bg-white/20 backdrop-blur-sm animate-shake shadow-beta"
              style={{
                left: mousePosition.x - 16,
                top: mousePosition.y - 16,
                transform: "scale(1.2)",
              }}
            >
              <div className="absolute inset-2 border border-beta-blue-294 rounded-full"></div>
            </div>
          )}

          {/* Hero Text Overlay */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider animate-bounce-crazy font-serif"
              >
                BETA UPSILON CHAPTER
              </h1>
              <h2
                className="text-2xl md:text-4xl font-semibold tracking-widest text-beta-blue-292 animate-wiggle font-sans"
              >
                BETA THETA PI
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto">
          {navigationSections.map((section, index) => (
            <Link
              key={section.title}
              href={section.href}
              className="relative group cursor-pointer overflow-hidden block"
              onMouseEnter={() => setHoveredSection(section.title)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div
                className={`
                  relative h-64 md:h-80 lg:h-96 overflow-hidden transition-all duration-500 ease-out
                  ${getImageScale(index, hoveredSection ? navigationSections.findIndex((s) => s.title === hoveredSection) : null)}
                `}
              >
                <Image src={section.image || "/placeholder.svg"} alt={section.title} fill className="object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h3
                      className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider font-serif"
                    >
                      {section.title.toUpperCase()}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
