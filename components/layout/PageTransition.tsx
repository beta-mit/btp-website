"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // Start transition when pathname changes
    setIsTransitioning(true)

    // Small delay to allow exit animation
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsTransitioning(false)
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        isTransitioning
          ? "opacity-0 transform translate-y-4"
          : "opacity-100 transform translate-y-0",
        className
      )}
    >
      {displayChildren}
    </div>
  )
}
