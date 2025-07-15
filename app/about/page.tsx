"use client"

import { useState } from "react"
import Image from "next/image"
import { PageHeader } from "@/components/layout/PageHeader"
import { Section } from "@/components/layout/Section"
import { COMMON_CLASSES } from "@/lib/constants"
import { Shield, Heart, Users, Trophy, BookOpen } from "lucide-react"
import type { PageHeaderData, SectionData } from "@/lib/types"

export default function AboutPage() {
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0)

  const headerData: PageHeaderData = {
    title: "We are Men of Principle",
    subtitle: "",
    description: ""
  }

  const contentSection: SectionData = {
    title: "",
    description: ""
  }

  const historySection: SectionData = {
    title: "OUR HERITAGE",
    description: ""
  }

  const valuesSection: SectionData = {
    title: "OUR FIVE CORE VALUES",
    description: ""
  }

  const timelineData = [
    {
      year: "1839",
      title: "The Founding of Beta Theta Pi",
      description: "Beta Theta Pi, commonly known as Beta, was founded on August 8, 1839, at Miami University in Oxford, Ohio. Eight students, seeking a new kind of fraternal organization, established Beta Theta Pi with a vision of unity, energy, and selfless devotion. The fraternity quickly became the oldest of the three Miami Triad fraternities, alongside Phi Delta Theta and Sigma Chi. The founders—John Reily Knox, Samuel Taylor Marshall, David Linton, James George Smith, Charles Henry Hardin, John Holt Duncan, Michael Clarkson Ryan, and Thomas Boston Gordon—set forth ideals that would guide generations of Betas.",
      image: "/about/btp-flag.jpg"
    },
    {
      year: "1850-1900",
      title: "Pioneering Spirit and Fraternal Firsts",
      description: "During this period, Beta Theta Pi became known for its entrepreneurial and leadership spirit, earning the titles \"Pioneering Fraternity\" and \"Leadership Fraternity.\" By 1850, Beta had already achieved several fraternal firsts, such as founding the first college fraternity west of the Allegheny Mountains and hosting the first General Convention in 1848. Many of Beta's enduring symbols and traditions, including its badge, coat of arms, and the adoption of \"delicate shades of pink blue\" as its colors, took shape during these years. Despite facing hostility from college authorities and being required to operate in secrecy, Beta Theta Pi worked to instill confidence in its noble ambitions. In 1879, Beta became the first fraternity to publish an open constitution, proclaiming its objects of moral and social culture, unity, and the cultivation of intellect and friendship.",
      image: "/about/btp-1850-to-1900.jpg"
    },
    {
      year: "1900-1950",
      title: "The Beta Spirit and National Growth",
      description: "This era is best defined by the \"Beta Spirit\"—a unique sense of warmth, strength, and enduring fraternity. Beta Theta Pi celebrated major milestones, such as having four members serve on the U.S. Supreme Court and hosting a centennial celebration. The Founders Fund, which would evolve into the Beta Theta Pi Foundation, was established to provide scholarships and leadership programming. The period was also marked by challenges, including two World Wars that threatened the existence of many chapters. The Toronto Chapter Fund, created in 1916, became a model for supporting chapters in crisis. In 1913, the Beta Upsilon Chapter was established at MIT, initially meeting in various locations before acquiring its first dedicated house.",
      image: "/about/btp-1900-to-1950.jpg"
    },
    {
      year: "1950-2000",
      title: "Modernization and New Traditions",
      description: "Beta Theta Pi continued to expand and modernize, with notable events such as the initiation of the fraternity's first Black member, Bill Lowry, and the construction of the national Administrative Office in Oxford, Ohio. The Beta Leadership Fund was established, beginning a tradition of funding leadership programs for members. During this time, Beta Upsilon experienced significant changes, moving between several houses to accommodate its growing membership and eventually acquiring an annex property. The chapter adapted to the evolving culture of fraternity life, balancing tradition with the need for renewal and excellence.",
      image: "/about/btp-1950-to-2000.jpg"
    },
    {
      year: "2000-Present",
      title: "A Legacy of Brotherhood",
      description: "Today, Beta Upsilon stands as a proud chapter of Beta Theta Pi, upholding nearly two centuries of tradition while embracing the challenges and opportunities of modern campus life. The chapter's history is reflected in its homes, its members, and its ongoing commitment to the values set forth in 1839. Beta Upsilon continues to be a place where brotherhood, leadership, and service thrive, leading by example through community service and academic achievement.",
      image: "/about/house.jpg"
    }
  ]

  const values = [
    {
      icon: Users,
      title: "Mutual Assistance",
      description: "Supporting each other through challenges and celebrating successes together as brothers."
    },
    {
      icon: BookOpen,
      title: "Intellectual Growth",
      description: "Pursuing knowledge and academic excellence while fostering critical thinking and innovation."
    },
    {
      icon: Heart,
      title: "Trust",
      description: "Building deep, reliable relationships founded on honesty and dependability."
    },
    {
      icon: Shield,
      title: "Responsible Conduct",
      description: "Acting with integrity and accountability in all aspects of life, on and off campus."
    },
    {
      icon: Trophy,
      title: "Integrity",
      description: "Upholding the highest moral and ethical standards in every decision and action."
    }
  ]

  return (
    <div className={COMMON_CLASSES.pageContainer}>
      {/* Section 1: Mission and Principle */}
      <div className="relative">
        <PageHeader {...headerData} />
        <Section {...contentSection}>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 -mt-32">
            <p className="text-lg leading-relaxed">
              Here at the MIT Chapter of Beta Theta Pi, we pride ourselves on offering an alternative experience to what is commonly thought of fraternity culture. Our Mission Statement reinforces this fundamental aim of our organization:
            </p>

            <blockquote className="text-xl md:text-2xl leading-relaxed italic text-center py-8 text-gray-800 font-serif border-l-4 border-blue-600 pl-6 bg-blue-50 rounded-r-lg">
              Reinvent fraternity life; lead by example through brotherhood, community service, and academic achievement.
            </blockquote>

            <p className="text-lg leading-relaxed">
              In everything we do, on-campus and off, we strive to hold ourselves to this mission and to the five values that provide the backbone for this purpose: cultivation of the intellect, responsible conduct, mutual assistance, integrity, and trust.
            </p>

            <p className="text-lg leading-relaxed">
              The bonds that tie our brothers together run deeper than any typical friendship. Each of our brothers is committed to helping one another to grow as persons, to build up each other into principled leaders and men as iron sharpens iron. Such friendships, Aristotle writes, last "as long as they are good-and goodness is an enduring thing."
            </p>

            <p className="text-lg leading-relaxed">
              In the halls of MIT Beta, I assure you that you will find a lively and decent community, whose treasures are imperceptible to the eye but yet radiate in the singing hearts of its members.
            </p>
          </div>
        </Section>
      </div>

      {/* Section 2: History Timeline */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-wider uppercase mb-4">{historySection.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Timeline Navigation */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 p-6 rounded-lg border-l-4 ${
                    currentTimelineIndex === index
                      ? 'border-blue-400 bg-blue-900/50 transform scale-105'
                      : 'border-gray-600 bg-gray-800/30 hover:bg-gray-700/50'
                  }`}
                  onClick={() => setCurrentTimelineIndex(index)}
                >
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-400 mr-4">{item.year}</span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Image and Description Display */}
            <div className="relative space-y-6">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={timelineData[currentTimelineIndex].image}
                  alt={timelineData[currentTimelineIndex].title}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
              </div>
              <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                  {timelineData[currentTimelineIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Values Cards */}
      <div className="relative bg-gradient-to-br from-red-50 via-yellow-50 to-gray-50 overflow-hidden">
        {/* Ambient Background Glow Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-2/7 left-1/10 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse"
               style={{ backgroundColor: '#998542', opacity: 0.35 }}></div>
          <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse delay-1000"
               style={{ backgroundColor: '#AB2328', opacity: 0.35 }}></div>
          <div className="absolute top-1/4 right-1/10 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse delay-2000"
               style={{ backgroundColor: '#8A8D8F', opacity: 0.7 }}></div>
        </div>

        <Section {...valuesSection}>
          <div className="relative min-h-[600px] max-w-6xl mx-auto">
            {/* Overlapping Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              {values.map((value, index) => {
                const Icon = value.icon
                const positions = [
                  { top: '10%', left: '-7%', rotate: '-5deg' },
                  { top: '-8%', left: '19%', rotate: '3deg' },
                  { top: '30%', left: '35%', rotate: '-2deg' },
                  { top: '0%', left: '60%', rotate: '7deg' },
                  { top: '20%', left: '85%', rotate: '1deg' }
                ]

                return (
                  <div
                    key={value.title}
                    className="absolute w-72 h-80 group cursor-pointer"
                    style={{
                      ...positions[index],
                      transform: `rotate(${positions[index].rotate}) translateZ(0)`,
                      zIndex: 5 - index
                    }}
                  >
                    <div className="w-full h-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:z-10">
                      <div className="flex flex-col items-center text-center h-full">
                        <div className="mb-6 p-4 bg-white/20 rounded-full">
                          <Icon className="w-8 h-8 text-gray-900" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {value.title}
                        </h3>
                        <p className="text-gray-800 leading-relaxed flex-1 flex items-center">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
