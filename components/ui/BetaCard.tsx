"use client"

import React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  componentStyles,
  textColors,
  typography,
  effects,
  getCardRotation
} from "@/lib/design-system"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

// Base card props
interface BaseCardProps {
  className?: string
  children?: React.ReactNode
  index?: number
  rotated?: boolean
  featured?: boolean
}

// Icon card for benefits, values, etc.
interface IconCardProps extends BaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  color?: string
}

// Person card for brothers, alumni, etc.
interface PersonCardProps extends BaseCardProps {
  name: string
  image: string
  badge?: string
  metadata?: string[]
  description?: string
}

// Event card for rush events, alumni events, etc.
interface EventCardProps extends BaseCardProps {
  title: string
  icon?: LucideIcon
  badge?: string
  metadata: Array<{ icon: LucideIcon; text: string }>
  description: string
}

// Base BetaCard component
export function BetaCard({
  className,
  children,
  index = 0,
  rotated = false,
  featured = false
}: BaseCardProps) {
  const cardStyle = featured
    ? componentStyles.cards.featured
    : rotated
      ? componentStyles.cards.rotated(index)
      : componentStyles.cards.base

  return (
    <Card className={cn(cardStyle, className)}>
      {children}
    </Card>
  )
}

// Icon Card for benefits, values, amenities
export function IconCard({
  icon: Icon,
  title,
  description,
  color,
  className,
  index = 0,
  rotated = true
}: IconCardProps) {
  return (
    <BetaCard
      className={cn("p-6 text-center group", className)}
      index={index}
      rotated={rotated}
    >
      <div className="mb-4">
        <Icon
          className={cn(
            componentStyles.icons.large,
            "mx-auto",
            effects.hover.scaleSmall,
            effects.transitions.base
          )}
          style={{ color: color || "#002F6C" }}
        />
      </div>
      <h3 className={cn(
        typography.headings.card,
        textColors.beta.primary,
        "mb-3"
      )}>
        {title.toUpperCase()}
      </h3>
      <p className={cn(typography.body.small, textColors.gray[700])}>
        {description}
      </p>
    </BetaCard>
  )
}

// Person Card for brothers, alumni, etc.
export function PersonCard({
  name,
  image,
  badge,
  metadata = [],
  description,
  className,
  index = 0,
  featured = false
}: PersonCardProps) {
  return (
    <BetaCard
      className={cn("overflow-hidden group", className)}
      index={index}
      featured={featured}
    >
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className={cn(
            "w-full h-64 object-cover",
            effects.hover.scaleSmall,
            effects.transitions.base
          )}
        />
        <div className={cn(
          effects.overlays.betaGradient,
          effects.overlays.hoverFade
        )} />
      </div>

      <div className="p-6">
        {badge && (
          <Badge className={cn(componentStyles.badges.beta, "mb-3")}>
            {badge}
          </Badge>
        )}

        <h3 className={cn(
          typography.headings.card,
          textColors.beta.primary,
          "mb-2"
        )}>
          {name.toUpperCase()}
        </h3>

        {metadata.map((item, idx) => (
          <div key={idx} className={cn(
            typography.body.small,
            textColors.gray[600],
            "mb-1"
          )}>
            {item}
          </div>
        ))}

        {description && (
          <p className={cn(
            typography.body.small,
            textColors.gray[700],
            "mt-3"
          )}>
            {description}
          </p>
        )}
      </div>
    </BetaCard>
  )
}

// Event Card for rush events, alumni events, etc.
export function EventCard({
  title,
  icon: Icon,
  badge,
  metadata,
  description,
  className,
  index = 0
}: EventCardProps) {
  return (
    <BetaCard
      className={cn("overflow-hidden group", className)}
      index={index}
      rotated={true}
    >
      <div className="md:flex">
        <div className={cn(
          "md:w-1/4 p-6 flex flex-col justify-center items-center",
          "bg-gradient-to-br from-beta-blue-294 to-beta-blue-293 text-white"
        )}>
          {Icon && (
            <Icon className={cn(
              componentStyles.icons.large,
              "mb-4",
              effects.hover.scaleSmall,
              effects.transitions.base
            )} />
          )}
          {badge && (
            <Badge className={componentStyles.badges.secondary}>
              {badge}
            </Badge>
          )}
        </div>

        <div className="md:w-3/4 p-6">
          <h3 className={cn(
            typography.headings.section,
            textColors.beta.primary,
            "mb-3"
          )}>
            {title.toUpperCase()}
          </h3>

          <div className="flex flex-wrap gap-4 mb-4">
            {metadata.map((item, idx) => {
              const MetaIcon = item.icon
              return (
                <div key={idx} className="flex items-center text-gray-600">
                  <MetaIcon className={cn(componentStyles.icons.small, "mr-2")} />
                  <span className={typography.body.small}>
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>

          <p className={cn(typography.body.small, textColors.gray[700])}>
            {description}
          </p>
        </div>
      </div>
    </BetaCard>
  )
}

// Statistic Card for alumni stats, etc.
interface StatisticCardProps extends BaseCardProps {
  icon: LucideIcon
  number: string
  label: string
  description: string
}

export function StatisticCard({
  icon: Icon,
  number,
  label,
  description,
  className,
  index = 0
}: StatisticCardProps) {
  return (
    <BetaCard
      className={cn("p-8 text-center group", className)}
      index={index}
      rotated={true}
    >
      <Icon className={cn(
        componentStyles.icons.large,
        "mx-auto mb-4",
        componentStyles.icons.withHover
      )} />

      <div className={cn(
        "text-3xl font-bold mb-2",
        textColors.beta.primary,
        typography.fonts.serif
      )}>
        {number}
      </div>

      <h3 className={cn(
        typography.headings.subheading,
        textColors.beta.primary,
        "mb-2"
      )}>
        {label.toUpperCase()}
      </h3>

      <p className={cn(typography.body.small, textColors.gray[700])}>
        {description}
      </p>
    </BetaCard>
  )
}
