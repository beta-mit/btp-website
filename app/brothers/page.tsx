"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

export default function BrothersPage() {
  const executiveBoard = [
    {
      name: "John Smith",
      position: "President",
      major: "Business Administration",
      year: "Senior",
      bio: "Leading our chapter with vision and dedication to excellence.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mike Johnson",
      position: "Vice President",
      major: "Engineering",
      year: "Junior",
      bio: "Supporting our president and managing internal operations.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Wilson",
      position: "Treasurer",
      major: "Finance",
      year: "Junior",
      bio: "Managing our chapter's financial health and planning.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Chris Brown",
      position: "Secretary",
      major: "Communications",
      year: "Sophomore",
      bio: "Keeping our records and facilitating communication.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const brothers = [
    {
      name: "Alex Thompson",
      major: "Computer Science",
      year: "Senior",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Ryan Davis",
      major: "Psychology",
      year: "Junior",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Kevin Martinez",
      major: "Pre-Med",
      year: "Sophomore",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Tyler Anderson",
      major: "Marketing",
      year: "Junior",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Brandon Lee",
      major: "Political Science",
      year: "Senior",
      image: "/placeholder.svg?height=250&width=250",
    },
    {
      name: "Jordan Taylor",
      major: "Economics",
      year: "Sophomore",
      image: "/placeholder.svg?height=250&width=250",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            MEET THE BROTHERS
          </h1>
          <p
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Our brotherhood is made up of diverse, talented individuals united by shared values and lifelong bonds.
          </p>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              EXECUTIVE BOARD
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Meet the leaders who guide our chapter and uphold our traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveBoard.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden bg-white border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002F6C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-[#002F6C] text-white">{member.position}</Badge>
                  <h3
                    className="text-xl font-bold mb-2 text-[#002F6C] tracking-wide"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {member.name.toUpperCase()}
                  </h3>
                  <div className="flex items-center mb-2 text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                      {member.major} • {member.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Brothers */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              OUR BROTHERHOOD
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Each brother brings unique talents, perspectives, and experiences that strengthen our chapter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brothers.map((brother, index) => (
              <Card
                key={brother.name}
                className={`
                  overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7] 
                  hover:shadow-xl transition-all duration-300 group
                  ${index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}
                  hover:rotate-0
                `}
              >
                <div className="relative">
                  <Image
                    src={brother.image || "/placeholder.svg"}
                    alt={brother.name}
                    width={250}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002F6C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-2 text-[#002F6C] tracking-wide"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {brother.name.toUpperCase()}
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                      {brother.major} • {brother.year}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brotherhood Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              BROTHERHOOD BY THE NUMBERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#002F6C] mb-2" style={{ fontFamily: "serif" }}>
                45
              </div>
              <div className="text-lg text-gray-700" style={{ fontFamily: "sans-serif" }}>
                ACTIVE BROTHERS
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#002F6C] mb-2" style={{ fontFamily: "serif" }}>
                3.4
              </div>
              <div className="text-lg text-gray-700" style={{ fontFamily: "sans-serif" }}>
                AVERAGE GPA
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#002F6C] mb-2" style={{ fontFamily: "serif" }}>
                15
              </div>
              <div className="text-lg text-gray-700" style={{ fontFamily: "sans-serif" }}>
                MAJORS REPRESENTED
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#002F6C] mb-2" style={{ fontFamily: "serif" }}>
                500+
              </div>
              <div className="text-lg text-gray-700" style={{ fontFamily: "sans-serif" }}>
                SERVICE HOURS
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
