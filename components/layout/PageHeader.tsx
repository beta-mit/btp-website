"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
  typography,
  textColors,
  createPageHeaderClasses,
  componentStyles
} from "@/lib/design-system"
import { cn } from "@/lib/utils"
import type { PageHeaderData } from "@/lib/types"

interface PageHeaderProps extends PageHeaderData {
  className?: string
  centered?: boolean
}

export function PageHeader({
  title,
  subtitle,
  description,
  cta,
  className,
  centered = true
}: PageHeaderProps) {
  return (
    <section className={cn(createPageHeaderClasses(centered), "bg-white", className)}>
      <div className={centered ? "text-center" : ""}>
        <h1 className={cn(typography.headings.hero, textColors.beta.primary, "mb-6")}>
          {title.toUpperCase()}
        </h1>

        {subtitle && (
          <h2 className={cn(typography.headings.card, textColors.beta.secondary, "mb-4")}>
            {subtitle.toUpperCase()}
          </h2>
        )}

        {description && (
          <p className={cn(
            typography.body.large,
            textColors.gray[700],
            "max-w-3xl",
            centered ? "mx-auto" : "",
            cta ? "mb-8" : ""
          )}>
            {description}
          </p>
        )}

        {cta && (
          <Button
            className={cn(
              cta.variant === 'secondary'
                ? componentStyles.buttons.primary
                : componentStyles.buttons.cta
            )}
            asChild
          >
            <a href={cta.href}>
              {cta.text.toUpperCase()}
            </a>
          </Button>
        )}
      </div>
    </section>
  )
}
