"use client"

import React from "react"
import { BetaCard } from "@/components/ui/BetaCard"
import {
  typography,
  textColors,
  componentStyles
} from "@/lib/design-system"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/lib/types"

interface TestimonialCardProps extends Testimonial {
  className?: string
  index?: number
}

export function TestimonialCard({
  name,
  year,
  quote,
  position,
  image,
  className,
  index = 0
}: TestimonialCardProps) {
  return (
    <BetaCard
      className={cn("p-8 group", className)}
      index={index}
      featured={true}
    >
      <blockquote className={cn(
        textColors.gray[700],
        "italic mb-6 leading-relaxed",
        typography.fonts.serif
      )}>
        &quot;{quote}&quot;
      </blockquote>

      <div className="border-t border-beta-blue-292 pt-4">
        <div className={cn(
          typography.headings.subheading,
          textColors.beta.primary
        )}>
          {name.toUpperCase()}
        </div>

        <div className={cn(
          typography.body.small,
          textColors.gray[600],
          "mt-1"
        )}>
          {year}
        </div>

        <div className={cn(
          typography.body.small,
          textColors.beta.secondary,
          "font-semibold mt-1"
        )}>
          {position}
        </div>
      </div>
    </BetaCard>
  )
}
