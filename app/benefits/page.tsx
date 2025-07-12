"use client"

import { Users, GraduationCap, Briefcase, Heart, Trophy, Network, BookOpen, Handshake } from "lucide-react"
import { PageHeader } from "@/components/layout/PageHeader"
import { Section } from "@/components/layout/Section"
import { IconCard } from "@/components/ui/BetaCard"
import { TestimonialCard } from "@/components/ui/TestimonialCard"
import { layout } from "@/lib/design-system"
import { FRATERNITY_INFO, COMMON_CLASSES } from "@/lib/constants"
import type { Benefit, PageHeaderData, SectionData, Testimonial } from "@/lib/types"

export default function BenefitsPage() {
  const headerData: PageHeaderData = {
    title: "Why Join Beta Theta Pi?",
    subtitle: "",
    description: `Discover the lifelong benefits of brotherhood, leadership, and personal development that come with being a member of ${FRATERNITY_INFO.name}.`
  }

  const benefitsSection: SectionData = {
    title: "Membership Benefits",
    description: `${FRATERNITY_INFO.name} membership offers unique opportunities for growth, connection, and success.`
  }

  const testimonialsSection: SectionData = {
    title: "Brother Testimonials",
    description: "Hear from our alumni about how Beta Theta Pi shaped their lives and careers."
  }

  const benefits: Benefit[] = [
    {
      icon: Users,
      title: "Lifelong Brotherhood",
      description: "Form deep, lasting friendships with men who share your values and will support you throughout your life.",
    },
    {
      icon: Network,
      title: "Professional Network",
      description: "Connect with successful alumni across industries who can provide mentorship and career opportunities.",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Access study groups, tutoring, and academic resources to help you achieve your educational goals.",
    },
    {
      icon: Briefcase,
      title: "Leadership Development",
      description: "Gain hands-on leadership experience through chapter positions and organizational responsibilities.",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Make a positive impact through organized service projects and philanthropic initiatives.",
    },
    {
      icon: Trophy,
      title: "Personal Growth",
      description: "Develop confidence, communication skills, and character through diverse experiences and challenges.",
    },
    {
      icon: BookOpen,
      title: "Educational Programs",
      description: "Participate in workshops, seminars, and training programs designed to enhance your skills.",
    },
    {
      icon: Handshake,
      title: "Alumni Connections",
      description: "Join a network of over 200,000 Beta Theta Pi alumni worldwide across all industries.",
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: "Michael Chen",
      year: "Class of 2020",
      quote: "Beta Theta Pi gave me the confidence and connections that launched my career. The brotherhood extends far beyond college.",
      position: "Software Engineer at Google",
    },
    {
      name: "James Rodriguez",
      year: "Class of 2018",
      quote: "The leadership skills I developed as chapter president have been invaluable in my professional life.",
      position: "Marketing Director",
    },
    {
      name: "Andrew Kim",
      year: "Class of 2019",
      quote: "My brothers supported me through challenging times and celebrated my successes. That's what true brotherhood means.",
      position: "Medical Student",
    },
  ]

  return (
    <div className={COMMON_CLASSES.pageContainer}>
      <PageHeader {...headerData} />

      {/* Benefits Grid */}
      <Section {...benefitsSection}>
        <div className={layout.grids.cards4}>
          {benefits.map((benefit, index) => (
            <IconCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section {...testimonialsSection}>
        <div className={layout.grids.cards3}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </Section>
    </div>
  )
}
