"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LoadingProps {
  className?: string
}

export function Loading({ className }: LoadingProps) {
  return (
    <div className={cn(
      "fixed inset-0 bg-white z-50 flex flex-col items-center justify-center",
      className
    )}>
      {/* Logo with animation */}
      <div className="relative mb-8">
        <div className="animate-pulse">
          <Image
            src="/shared/btp-logo.png"
            alt="Beta Theta Pi Logo"
            width={120}
            height={120}
            className="rounded-full border-4 border-beta-blue-294"
            priority
          />
        </div>
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-beta-blue-292 animate-spin"></div>
      </div>

      {/* Beta Theta Pi text */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-beta-blue-294 tracking-wider font-serif">
          ΒΘΠ
        </h1>
        <p className="text-beta-blue-294 text-sm tracking-widest font-sans">
          BETA UPSILON CHAPTER
        </p>
      </div>

      {/* Loading dots */}
      <div className="flex space-x-2 mt-8">
        <div className="w-3 h-3 bg-beta-blue-294 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-beta-blue-293 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-beta-blue-292 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  )
}
