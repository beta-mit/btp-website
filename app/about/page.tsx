"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Shield, Heart, Users, Trophy } from "lucide-react"

export default function AboutPage() {
  const values = [
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            ABOUT OUR CHAPTER
          </h1>
          <p
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            The Beta Upsilon Chapter of Beta Theta Pi has been building better men for a better world since our
            founding. We are committed to developing leaders who make a positive impact in their communities.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
                style={{ fontFamily: "serif" }}
              >
                OUR HISTORY
              </h2>
              <div className="space-y-4 text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
                <p className="leading-relaxed">
                  Beta Theta Pi was founded in 1839 at Miami University in Oxford, Ohio, making it one of the oldest
                  fraternities in North America. Our founders established the organization on the principles of mutual
                  assistance, intellectual growth, integrity, and responsible conduct.
                </p>
                <p className="leading-relaxed">
                  The Beta Upsilon Chapter was chartered in [Year] and has since become a cornerstone of Greek life on
                  campus. Our chapter has produced leaders in business, politics, academia, and community service, all
                  united by the bonds of brotherhood and shared values.
                </p>
                <p className="leading-relaxed">
                  Today, we continue to uphold the traditions and values that have guided Beta Theta Pi for over 180
                  years, while adapting to meet the challenges and opportunities of the modern world.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Chapter History"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              OUR CORE VALUES
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              These fundamental principles guide every aspect of our brotherhood and shape the men we become.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={value.title}
                  className="p-8 bg-white border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-12 h-12 text-[#002F6C] group-hover:text-[#003DA5] transition-colors duration-300" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-3 text-[#002F6C] tracking-wider"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        {value.title.toUpperCase()}
                      </h3>
                      <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            OUR MISSION
          </h2>
          <blockquote
            className="text-xl md:text-2xl leading-relaxed italic mb-8 text-gray-800"
            style={{ fontFamily: "serif" }}
          >
            "To develop men of principle for a principled life through lifelong brotherhood, learning, and service to
            others."
          </blockquote>
          <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
            This mission drives everything we do, from our recruitment and member development programs to our community
            service initiatives and alumni engagement efforts.
          </p>
        </div>
      </section>
    </div>
  )
}
