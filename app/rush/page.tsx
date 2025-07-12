"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Coffee, Gamepad2, Utensils, MessageCircle } from "lucide-react"

export default function RushPage() {
  const rushEvents = [
    {
      title: "Meet the Brothers",
      date: "September 5, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Chapter House",
      description: "Casual meet and greet with current brothers. Come as you are and get to know us!",
      icon: Users,
      type: "Open Event",
    },
    {
      title: "Coffee & Conversation",
      date: "September 8, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Campus Coffee Shop",
      description: "Informal coffee meetup to discuss what Beta Theta Pi is all about.",
      icon: Coffee,
      type: "Casual",
    },
    {
      title: "Game Night",
      date: "September 12, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Chapter House",
      description: "Join us for video games, board games, and pizza. Show us your competitive side!",
      icon: Gamepad2,
      type: "Social",
    },
    {
      title: "Brotherhood Dinner",
      date: "September 15, 2024",
      time: "6:30 PM - 8:30 PM",
      location: "Chapter House",
      description: "Formal dinner with the brotherhood. Dress code: Business casual.",
      icon: Utensils,
      type: "Formal",
    },
    {
      title: "Q&A Session",
      date: "September 18, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Chapter House",
      description: "Ask any questions about membership, expectations, and what it means to be a Beta.",
      icon: MessageCircle,
      type: "Informational",
    },
  ]

  const rushTips = [
    "Be yourself - authenticity is what we value most",
    "Ask questions - we want you to make an informed decision",
    "Attend multiple events to get a full picture of our brotherhood",
    "Dress appropriately for each event (we'll let you know the dress code)",
    "Bring friends who might be interested - rush is more fun together",
    "Follow up with brothers you connect with",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-beta-blue-294 tracking-wider font-serif"
          >
            JOIN OUR BROTHERHOOD
          </h1>
          <p
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 font-body"
          >
            Rush is your opportunity to discover what Beta Theta Pi is all about and see if our brotherhood is the right
            fit for you. We're excited to meet you!
          </p>
          <Button
            className="bg-beta-blue-294 hover:bg-beta-blue-293 text-white font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 font-sans"
          >
            REGISTER FOR RUSH
          </Button>
        </div>
      </section>

      {/* Rush Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-beta-blue-294 tracking-wider font-serif"
            >
              THE RUSH PROCESS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-body">
              Our rush process is designed to be welcoming, informative, and fun. Here's what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-white border-2 border-beta-blue-292 hover:shadow-beta-lg transition-all duration-300">
              <div className="w-16 h-16 bg-beta-blue-294 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-beta-blue-294 tracking-wider font-sans">
                ATTEND EVENTS
              </h3>
              <p className="text-gray-700 leading-relaxed font-body">
                Come to our rush events to meet brothers, learn about our values, and experience our brotherhood
                firsthand.
              </p>
            </Card>

            <Card className="p-8 text-center bg-white border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#002F6C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                GET TO KNOW US
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                Build relationships with current brothers and learn about our chapter's culture, traditions, and
                expectations.
              </p>
            </Card>

            <Card className="p-8 text-center bg-white border-2 border-[#69B3E7] hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#002F6C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002F6C] tracking-wider" style={{ fontFamily: "sans-serif" }}>
                RECEIVE A BID
              </h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                If we're a mutual fit, you'll receive an invitation to join our brotherhood and begin your journey as a
                Beta.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Rush Events */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              UPCOMING RUSH EVENTS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Mark your calendar and join us for these exciting events during rush week.
            </p>
          </div>

          <div className="space-y-6">
            {rushEvents.map((event, index) => {
              const Icon = event.icon
              return (
                <Card
                  key={event.title}
                  className={`
                    overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-[#69B3E7]
                    hover:shadow-xl transition-all duration-300 group
                    ${index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}
                    hover:rotate-0
                  `}
                >
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-[#002F6C] text-white p-6 flex flex-col justify-center items-center">
                      <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <Badge className="bg-[#69B3E7] text-[#002F6C] font-semibold">{event.type}</Badge>
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
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                            {event.time}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rush Tips */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              RUSH TIPS
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
              Make the most of your rush experience with these helpful tips from our brothers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rushTips.map((tip, index) => (
              <Card
                key={index}
                className={`
                  p-6 bg-white border-2 border-[#69B3E7] hover:shadow-lg transition-all duration-300
                  ${index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"}
                  hover:rotate-0
                `}
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#002F6C] text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                    {tip}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            QUESTIONS ABOUT RUSH?
          </h2>
          <p
            className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Don't hesitate to reach out if you have any questions about rush, our brotherhood, or what it means to be a
            Beta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#69B3E7] hover:bg-[#9BCBeb] text-[#002F6C] font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "sans-serif" }}
            >
              CONTACT RUSH CHAIR
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#69B3E7] text-[#69B3E7] hover:bg-[#69B3E7] hover:text-[#002F6C] font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
              style={{ fontFamily: "sans-serif" }}
            >
              EMAIL US
            </Button>
          </div>
          <div className="mt-8 text-gray-600" style={{ fontFamily: "Arial, sans-serif" }}>
            <p>Rush Chair: Tyler Johnson</p>
            <p>Email: rush@betaupsilonbtp.org</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  )
}
