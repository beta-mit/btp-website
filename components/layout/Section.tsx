"use client"

import React from "react"
import {
  typography,
  textColors,
  layout,
  createSectionClasses
} from "@/lib/design-system"
import { cn } from "@/lib/utils"
import type { SectionData } from "@/lib/types"

interface SectionProps extends SectionData {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  headerClassName?: string
  centered?: boolean
}

export function Section({
  title,
  subtitle,
  description,
  background = 'white',
  children,
  className,
  containerClassName,
  headerClassName,
  centered = true
}: SectionProps) {
  return (
    <section className={cn(createSectionClasses(background), className)}>
      <div className={cn(layout.containers.section, containerClassName)}>
        {(title || subtitle || description) && (
          <div className={cn(
            "mb-16",
            centered && "text-center",
            headerClassName
          )}>
            {title && (
              <h2 className={cn(
                typography.headings.section,
                textColors.beta.primary,
                "mb-6"
              )}>
                {title.toUpperCase()}
              </h2>
            )}

            {subtitle && (
              <h3 className={cn(
                typography.headings.subheading,
                textColors.beta.secondary,
                "mb-4"
              )}>
                {subtitle.toUpperCase()}
              </h3>
            )}

            {description && (
              <p className={cn(
                typography.body.base,
                textColors.gray[700],
                "max-w-3xl",
                centered ? "mx-auto" : ""
              )}>
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
