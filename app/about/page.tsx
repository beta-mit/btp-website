"use client"

import Image from "next/image"
import { Shield, Heart, Users, Trophy } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { Section } from "@/components/layout/Section"
import { IconCard } from "@/components/ui/BetaCard"
import { layout } from "@/lib/design-system"
import { FRATERNITY_INFO, DEFAULT_IMAGE, COMMON_CLASSES } from "@/lib/constants"
import type { CoreValue, PageHeaderData, SectionData } from "@/lib/types"

export default function AboutPage() {
  const headerData: PageHeaderData = {
    title: "About Our Chapter",
    subtitle: "",
    description: `The ${FRATERNITY_INFO.chapter} of ${FRATERNITY_INFO.name} has been building better men for a better world since our founding. We are committed to developing leaders who make a positive impact in their communities.`
  }

  const historySection: SectionData = {
    title: "Our History",
    description: "Learn about our rich heritage and founding principles."
  }

  const valuesSection: SectionData = {
    title: "Our Core Values",
    description: "These fundamental principles guide every aspect of our brotherhood and shape the men we become."
  }

  const missionSection: SectionData = {
    title: "Our Mission",
    description: "This mission drives everything we do, from our recruitment and member development programs to our community service initiatives and alumni engagement efforts."
  }

  const values: CoreValue[] = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and moral character in all our actions.",
    },
    {
      icon: Heart,
      title: "Mutual Assistance",
      description: "Brothers support each other through challenges and celebrate successes together.",
    },
    {
      icon: Users,
      title: "Brotherhood",
      description: "Lifelong bonds forged through shared experiences and common values.",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Striving for greatness in academics, leadership, and personal development.",
    },
  ]

  return (
    <div className={COMMON_CLASSES.pageContainer}>
      <PageHeader {...headerData} />

      {/* History Section */}
      <Section {...historySection}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              {FRATERNITY_INFO.name} was founded in {FRATERNITY_INFO.founded} at {FRATERNITY_INFO.foundedAt}, making it one of the oldest
              fraternities in North America. Our founders established the organization on the principles of mutual
              assistance, intellectual growth, integrity, and responsible conduct.
            </p>
            <p className="leading-relaxed">
              The {FRATERNITY_INFO.chapter} was chartered in [Year] and has since become a cornerstone of Greek life on
              campus. Our chapter has produced leaders in business, politics, academia, and community service, all
              united by the bonds of brotherhood and shared values.
            </p>
            <p className="leading-relaxed">
              Today, we continue to uphold the traditions and values that have guided {FRATERNITY_INFO.name} for over 180
              years, while adapting to meet the challenges and opportunities of the modern world.
            </p>
          </div>
          <div className="relative">
            <Image
              src={DEFAULT_IMAGE}
              alt="Chapter History"
              width={600}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section {...valuesSection}>
        <div className={layout.grids.cards2}>
          {values.map((value, index) => (
            <IconCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section {...missionSection} centered>
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl leading-relaxed italic mb-8 text-gray-800 font-serif">
            &quot;{FRATERNITY_INFO.motto} through lifelong brotherhood, learning, and service to others.&quot;
          </blockquote>
        </div>
      </Section>
    </div>
  )
}
