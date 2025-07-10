"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Users, Wifi, Car, Utensils, Gamepad2, Book, Dumbbell, MapPin } from "lucide-react"

export default function HousingPage() {
  const amenities = [
    {
      icon: Users,
      title: "Brotherhood Living",
      description: "Live alongside your brothers in a supportive, fun environment",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Reliable WiFi throughout the house for studying and entertainment",
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "Dedicated parking spaces for residents",
    },
    {
      icon: Utensils,
      title: "Full Kitchen",
      description: "Modern kitchen facilities for cooking and chapter meals",
    },
    {
      icon: Gamepad2,
      title: "Recreation Room",
      description: "Gaming area with pool table, TV, and entertainment systems",
    },
    {
      icon: Book,
      title: "Study Spaces",
      description: "Quiet areas dedicated to academic work and group study",
    },
    {
      icon: Dumbbell,
      title: "Fitness Area",
      description: "Basic workout equipment for staying in shape",
    },
    {
      icon: Home,
      title: "Common Areas",
      description: "Spacious living areas for socializing and chapter events",
    },
  ]

  const roomTypes = [
    {
      type: "Single Room",
      price: "$800/month",
      description: "Private bedroom with shared bathroom facilities",
      features: ["Private bedroom", "Shared bathroom", "Desk and storage", "All utilities included"],
    },
    {
      type: "Double Room",
      price: "$600/month",
      description: "Shared bedroom with roommate and bathroom facilities",
      features: ["Shared bedroom", "Shared bathroom", "Individual desk space", "All utilities included"],
    },
    {
      type: "Suite Style",
      price: "$900/month",
      description: "Private bedroom with shared living area and bathroom",
      features: ["Private bedroom", "Shared living area", "Private bathroom", "Mini-fridge included"],
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
            CHAPTER HOUSE
          </h1>
          <p
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Experience the full brotherhood lifestyle by living in our chapter house. More than just a place to sleep,
            it's the heart of our community where lifelong memories are made.
          </p>
        </div>
      </section>

      {/* House Overview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
                style={{ fontFamily: "serif" }}
              >
                OUR HOME
              </h2>
              <div className="space-y-4 text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
                <p className="leading-relaxed">
                  Our chapter house is more than just a residence—it's the center of brotherhood life. Located just
                  minutes from campus, the house provides a unique living experience that combines the convenience of
                  on-campus housing with the camaraderie of fraternity life.
                </p>
                <p className="leading-relaxed">
                  Built in 1965 and recently renovated, our house accommodates 24 brothers and features modern amenities
                  while maintaining its classic charm. From study sessions to social events, the house serves as the
                  backdrop for countless memories and lifelong friendships.
                </p>
                <p className="leading-relaxed">
                  Living in the house offers unparalleled opportunities for leadership development, as residents take on
                  responsibilities for house management, event planning, and maintaining our high standards of
                  brotherhood.
                </p>
              </div>
              <div className="mt-6 flex items-center text-[#002F6C]">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold" style={{ fontFamily: "sans-serif" }}>
                  123 Greek Row, University City, ST 12345
                </span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Beta Theta Pi Chapter House"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002F6C]/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              HOUSE AMENITIES
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Our chapter house is equipped with everything you need for comfortable living and brotherhood activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <Card
                  key={amenity.title}
                  className={`
                    p-6 text-center bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7] 
                    hover:shadow-xl transition-all duration-300 group
                    ${index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}
                    hover:rotate-0 hover:scale-105
                  `}
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-[#002F6C] group-hover:text-[#003DA5] group-hover:scale-110 transition-all duration-300" />
                  <h3
                    className="text-lg font-bold mb-2 text-[#002F6C] tracking-wider"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {amenity.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                    {amenity.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Room Types & Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              ROOM OPTIONS & PRICING
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Choose from several room configurations to fit your preferences and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <Card
                key={room.type}
                className={`
                  overflow-hidden bg-white border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300
                  ${index === 1 ? "transform scale-105 border-[#002F6C]" : ""}
                `}
              >
                {index === 1 && (
                  <div className="bg-[#002F6C] text-white text-center py-2">
                    <Badge className="bg-[#69B3E7] text-[#002F6C] font-bold">MOST POPULAR</Badge>
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3
                      className="text-2xl font-bold mb-2 text-[#002F6C] tracking-wider"
                      style={{ fontFamily: "serif" }}
                    >
                      {room.type.toUpperCase()}
                    </h3>
                    <div className="text-3xl font-bold text-[#003DA5] mb-2" style={{ fontFamily: "serif" }}>
                      {room.price}
                    </div>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                      {room.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {room.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        <div className="w-2 h-2 bg-[#69B3E7] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
              All room rates include utilities, internet, and access to all house amenities.
            </p>
            <p className="text-sm text-gray-500" style={{ fontFamily: "Arial, sans-serif" }}>
              Room assignments are made based on seniority and house leadership positions.
            </p>
          </div>
        </div>
      </section>

      {/* House Rules & Expectations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              LIVING EXPECTATIONS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Living in the chapter house comes with responsibilities that help maintain our high standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7]">
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                ACADEMIC STANDARDS
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
                <li>• Maintain minimum 2.5 GPA</li>
                <li>• Participate in mandatory study hours</li>
                <li>• Attend academic workshops</li>
                <li>• Utilize tutoring resources</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7]">
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                HOUSE RESPONSIBILITIES
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
                <li>• Weekly house cleaning duties</li>
                <li>• Respect quiet hours (10 PM - 8 AM)</li>
                <li>• Participate in house meetings</li>
                <li>• Maintain common areas</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7]">
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                BROTHERHOOD INVOLVEMENT
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
                <li>• Attend weekly chapter meetings</li>
                <li>• Participate in social events</li>
                <li>• Support philanthropy efforts</li>
                <li>• Mentor new members</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7]">
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                GUEST POLICIES
              </h3>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
                <li>• Register overnight guests</li>
                <li>• Escort guests at all times</li>
                <li>• Respect other residents</li>
                <li>• Follow university policies</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            INTERESTED IN LIVING IN-HOUSE?
          </h2>
          <p
            className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Housing applications are typically due in early spring for the following academic year. Priority is given to
            active brothers in good standing.
          </p>
          <div className="space-y-4 text-gray-600 mb-8" style={{ fontFamily: "Arial, sans-serif" }}>
            <p>Housing Manager: Alex Thompson</p>
            <p>Email: housing@betaupsilonbtp.org</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-[#69B3E7] hover:bg-[#9BCBeb] text-[#002F6C] font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 rounded"
              style={{ fontFamily: "sans-serif" }}
            >
              APPLY FOR HOUSING
            </button>
            <button
              className="border-2 border-[#69B3E7] text-[#69B3E7] hover:bg-[#69B3E7] hover:text-[#002F6C] font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 rounded"
              style={{ fontFamily: "sans-serif" }}
            >
              SCHEDULE TOUR
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
