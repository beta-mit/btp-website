"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, GraduationCap, Briefcase, Heart, Trophy, Network, BookOpen, Handshake } from "lucide-react"

export default function BenefitsPage() {
  const benefits = [
    {
      icon: Users,
      title: "Lifelong Brotherhood",
      description:
        "Form deep, lasting friendships with men who share your values and will support you throughout your life.",
      color: "#002F6C",
    },
    {
      icon: Network,
      title: "Professional Network",
      description:
        "Connect with successful alumni across industries who can provide mentorship and career opportunities.",
      color: "#003DA5",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Access study groups, tutoring, and academic resources to help you achieve your educational goals.",
      color: "#69B3E7",
    },
    {
      icon: Briefcase,
      title: "Leadership Development",
      description: "Gain hands-on leadership experience through chapter positions and organizational responsibilities.",
      color: "#002F6C",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Make a positive impact through organized service projects and philanthropic initiatives.",
      color: "#AB2328",
    },
    {
      icon: Trophy,
      title: "Personal Growth",
      description:
        "Develop confidence, communication skills, and character through diverse experiences and challenges.",
      color: "#003DA5",
    },
    {
      icon: BookOpen,
      title: "Educational Programs",
      description: "Participate in workshops, seminars, and training programs designed to enhance your skills.",
      color: "#69B3E7",
    },
    {
      icon: Handshake,
      title: "Alumni Connections",
      description: "Join a network of over 200,000 Beta Theta Pi alumni worldwide across all industries.",
      color: "#002F6C",
    },
  ]

  const testimonials = [
    {
      name: "Michael Chen",
      year: "Class of 2020",
      quote:
        "Beta Theta Pi gave me the confidence and connections that launched my career. The brotherhood extends far beyond college.",
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
      quote:
        "My brothers supported me through challenging times and celebrated my successes. That's what true brotherhood means.",
      position: "Medical Student",
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
            WHY JOIN BETA THETA PI?
          </h1>
          <p
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Discover the lifelong benefits of brotherhood, leadership, and personal development that come with being a
            member of Beta Theta Pi.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              MEMBERSHIP BENEFITS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Beta Theta Pi membership offers unique opportunities for growth, connection, and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={benefit.title}
                  className={`
                    p-6 text-center bg-white border-2 border-[#69B3E7] 
                    hover:shadow-xl transition-all duration-300 group
                    ${index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}
                    hover:rotate-0 hover:scale-105
                  `}
                >
                  <div className="mb-4">
                    <Icon
                      className="w-12 h-12 mx-auto group-hover:scale-110 transition-transform duration-300"
                      style={{ color: benefit.color }}
                    />
                  </div>
                  <h3
                    className="text-lg font-bold mb-3 text-[#002F6C] tracking-wider"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {benefit.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                    {benefit.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              BROTHER TESTIMONIALS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Hear from our alumni about how Beta Theta Pi shaped their lives and careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`
                  p-8 bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7] 
                  hover:shadow-xl transition-all duration-300
                  ${index === 1 ? "transform -rotate-1" : index === 2 ? "transform rotate-1" : ""}
                  hover:rotate-0
                `}
              >
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed" style={{ fontFamily: "serif" }}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-[#69B3E7] pt-4">
                  <div className="font-bold text-[#002F6C] tracking-wide" style={{ fontFamily: "sans-serif" }}>
                    {testimonial.name.toUpperCase()}
                  </div>
                  <div className="text-sm text-gray-600 mt-1" style={{ fontFamily: "Arial, sans-serif" }}>
                    {testimonial.year}
                  </div>
                  <div
                    className="text-sm text-[#003DA5] font-semibold mt-1"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    {testimonial.position}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            READY TO JOIN THE BROTHERHOOD?
          </h2>
          <p
            className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Take the first step toward lifelong brotherhood, personal growth, and endless opportunities. Learn more
            about our rush process and how you can become a Beta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#69B3E7] hover:bg-[#9BCBeb] text-[#002F6C] font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "sans-serif" }}
            >
              LEARN ABOUT RUSH
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#69B3E7] text-[#69B3E7] hover:bg-[#69B3E7] hover:text-[#002F6C] font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
              style={{ fontFamily: "sans-serif" }}
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
