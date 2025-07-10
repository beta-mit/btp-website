"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Heart, Calendar, MapPin, Users, Trophy, DollarSign } from "lucide-react"

export default function AlumniPage() {
  const featuredAlumni = [
    {
      name: "Robert Johnson",
      class: "Class of 1995",
      position: "CEO, Tech Innovations Inc.",
      location: "San Francisco, CA",
      achievement: "Built a $500M technology company",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Michael Chen",
      class: "Class of 2001",
      position: "Chief of Surgery, Metro Hospital",
      location: "Chicago, IL",
      achievement: "Leading cardiac surgeon and medical researcher",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "James Rodriguez",
      class: "Class of 1988",
      position: "Partner, Rodriguez & Associates Law",
      location: "New York, NY",
      achievement: "Prominent civil rights attorney",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const alumniStats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Living Alumni",
      description: "Brothers across the globe",
    },
    {
      icon: MapPin,
      number: "50",
      label: "States & Countries",
      description: "Where our alumni live and work",
    },
    {
      icon: Briefcase,
      number: "85%",
      label: "Career Success Rate",
      description: "In leadership positions",
    },
    {
      icon: DollarSign,
      number: "$2.5M",
      label: "Annual Giving",
      description: "Supporting current brothers",
    },
  ]

  const upcomingEvents = [
    {
      title: "Annual Alumni Banquet",
      date: "October 15, 2024",
      location: "Grand Ballroom, Downtown Hotel",
      description: "Join us for our biggest alumni gathering of the year with dinner, awards, and networking.",
    },
    {
      title: "Homecoming Weekend",
      date: "November 2-3, 2024",
      location: "Chapter House & Campus",
      description: "Return to campus for football, house tours, and brotherhood reunions.",
    },
    {
      title: "Regional Alumni Mixer - NYC",
      date: "December 8, 2024",
      location: "Manhattan Business Club",
      description: "Network with fellow alumni in the New York metropolitan area.",
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
            ALUMNI NETWORK
          </h1>
          <p
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Our alumni are leaders in every field, united by the bonds of brotherhood and committed to supporting the
            next generation of Betas.
          </p>
        </div>
      </section>

      {/* Alumni Stats */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              ALUMNI IMPACT
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Our alumni network spans the globe and continues to grow stronger each year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumniStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={stat.label}
                  className={`
                    p-8 text-center bg-white border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300 group
                    ${index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}
                    hover:rotate-0 hover:scale-105
                  `}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#002F6C] group-hover:text-[#003DA5] group-hover:scale-110 transition-all duration-300" />
                  <div className="text-3xl font-bold text-[#002F6C] mb-2" style={{ fontFamily: "serif" }}>
                    {stat.number}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2 text-[#002F6C] tracking-wider"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {stat.label.toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
                    {stat.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              DISTINGUISHED ALUMNI
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Meet some of our most accomplished brothers who continue to make their mark on the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAlumni.map((alumnus, index) => (
              <Card
                key={alumnus.name}
                className={`
                  overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7] 
                  hover:shadow-xl transition-all duration-300 group
                  ${index === 1 ? "transform -rotate-1" : index === 2 ? "transform rotate-1" : ""}
                  hover:rotate-0
                `}
              >
                <div className="relative">
                  <Image
                    src={alumnus.image || "/placeholder.svg"}
                    alt={alumnus.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002F6C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-[#002F6C] text-white">{alumnus.class}</Badge>
                  <h3
                    className="text-xl font-bold mb-2 text-[#002F6C] tracking-wide"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {alumnus.name.toUpperCase()}
                  </h3>
                  <p className="text-[#003DA5] font-semibold mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                    {alumnus.position}
                  </p>
                  <div className="flex items-center mb-3 text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                      {alumnus.location}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                    {alumnus.achievement}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              UPCOMING ALUMNI EVENTS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Stay connected with your brothers through our regular alumni gatherings and special events.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.title}
                className={`
                  overflow-hidden bg-white border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300 group
                  ${index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}
                  hover:rotate-0
                `}
              >
                <div className="md:flex">
                  <div className="md:w-1/4 bg-[#002F6C] text-white p-6 flex flex-col justify-center items-center">
                    <Calendar className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <Badge className="bg-[#69B3E7] text-[#002F6C] font-semibold">ALUMNI EVENT</Badge>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <h3
                      className="text-2xl font-bold mb-3 text-[#002F6C] tracking-wider"
                      style={{ fontFamily: "serif" }}
                    >
                      {event.title.toUpperCase()}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
                      {event.description}
                    </p>
                    <Button
                      className="bg-[#002F6C] hover:bg-[#003DA5] text-white transform hover:scale-105 transition-all duration-300"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      REGISTER NOW
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Resources */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              ALUMNI RESOURCES
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Stay connected and engaged with resources designed specifically for our alumni network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300">
              <Trophy className="w-12 h-12 mb-4 text-[#002F6C]" />
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                MENTORSHIP PROGRAM
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
                Connect with current brothers as a mentor, sharing your professional experience and guidance to help
                them succeed in their careers.
              </p>
              <Button className="bg-[#002F6C] hover:bg-[#003DA5] text-white" style={{ fontFamily: "sans-serif" }}>
                BECOME A MENTOR
              </Button>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300">
              <Heart className="w-12 h-12 mb-4 text-[#AB2328]" />
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                GIVING OPPORTUNITIES
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
                Support current brothers through scholarships, house improvements, and program funding. Every
                contribution makes a difference in their Beta experience.
              </p>
              <Button className="bg-[#AB2328] hover:bg-[#8B1E23] text-white" style={{ fontFamily: "sans-serif" }}>
                MAKE A GIFT
              </Button>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 mb-4 text-[#003DA5]" />
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                ALUMNI DIRECTORY
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
                Access our comprehensive alumni directory to reconnect with old friends and expand your professional
                network across industries and locations.
              </p>
              <Button className="bg-[#003DA5] hover:bg-[#002F6C] text-white" style={{ fontFamily: "sans-serif" }}>
                ACCESS DIRECTORY
              </Button>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300">
              <GraduationCap className="w-12 h-12 mb-4 text-[#69B3E7]" />
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                CAREER SERVICES
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
                Leverage our alumni network for career opportunities, job postings, and professional development
                resources throughout your career journey.
              </p>
              <Button className="bg-[#69B3E7] hover:bg-[#003DA5] text-white" style={{ fontFamily: "sans-serif" }}>
                EXPLORE CAREERS
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Alumni Relations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            STAY CONNECTED
          </h2>
          <p
            className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Whether you're a recent graduate or a seasoned professional, we want to hear from you. Stay involved and
            help shape the future of our brotherhood.
          </p>
          <div className="space-y-4 text-gray-600 mb-8" style={{ fontFamily: "Arial, sans-serif" }}>
            <p>Alumni Relations Chair: David Wilson</p>
            <p>Email: alumni@betaupsilonbtp.org</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#69B3E7] hover:bg-[#9BCBeb] text-[#002F6C] font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "sans-serif" }}
            >
              UPDATE YOUR INFO
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#69B3E7] text-[#69B3E7] hover:bg-[#69B3E7] hover:text-[#002F6C] font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
              style={{ fontFamily: "sans-serif" }}
            >
              VOLUNTEER
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
