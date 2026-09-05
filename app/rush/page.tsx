"use client"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface RushEvent {
  emoji: string
  name: string
  secondaryEmoji: string
  description: string
  dates: string[]
}

export default function RushPage() {
  const [rushEvents, setRushEvents] = useState<RushEvent[]>([])

  useEffect(() => {
    // Load events data
    fetch('/rush/fall-rush-events.json')
      .then(response => response.json())
      .then(data => setRushEvents(data))
      .catch(error => console.error('Error loading rush events:', error))
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-6 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-normal mb-6 text-beta-blue-294 tracking-wider font-serif"
          >
            RUSH BETA
          </h1>
        </div>
      </section>

      {/* Rush Process */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/rush/2020-american.jpg"
                alt="Beta Theta Pi brothers"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <h2
                className="text-3xl md:text-4xl font-normal mb-6 text-beta-blue-294 tracking-wider font-serif"
              >
                THE RUSH PROCESS
              </h2>
              <p className="text-lg text-gray-700 font-body leading-relaxed">
                You, an unaffiliated male student at MIT (probably a freshman), come to one of our events. If you like us and the opportunity that the fraternity presents, you come back for more events to get to know the fraternity better. Brothers will notice you coming to events. If brothers like your character, we'll extend a bid for you to join our fraternity by the end of rush. You be yourself. We'll be ourselves. If we click, great. If not, we hope you enjoyed the events and met some cool people.
              </p>
              <p className="text-lg text-gray-700 font-body leading-relaxed mt-4">
                Why even think about joining? Check out <a href="/benefits" className="text-beta-blue-294 hover:text-beta-blue-293 underline font-semibold">the benefits page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fall Rush */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-normal mb-6 text-beta-blue-294 tracking-wider font-serif"
            >
              FALL RUSH
            </h2>
          </div>

          {/* Google Calendar Embed */}
          <div className="w-full max-w-4xl mx-auto">
            <iframe
              src="              https://calendar.google.com/calendar/embed?src=21cf3deb06aed0a8033a7b9305a08e0c454d6287e6062d6187bb323a773d1528%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
              className="w-full h-96 md:h-[600px] border border-gray-300 rounded-lg shadow-lg"
              frameBorder="0"
              scrolling="no"
              title="Fall Rush Calendar"
            ></iframe>
          </div>

          {/* Fall Rush Events */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="space-y-8">
              {rushEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-beta-blue-294 flex items-center gap-2 font-sans uppercase tracking-wider">
                    <span className="text-3xl">{event.emoji}</span>
                    {event.name}
                    <span className="text-3xl">{event.secondaryEmoji}</span>
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4 font-body">
                    {event.description}
                  </p>

                  <div className="mt-4">
                    <h4 className="font-bold text-beta-blue-294 mb-2 font-sans uppercase tracking-wide">Dates and Times:</h4>
                    <ul className="space-y-1">
                      {event.dates.map((date, dateIndex) => (
                        <li key={dateIndex} className="text-gray-700 font-body">
                          {date}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spring Rush */}
      <section className="pt-10 pb-5 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-normal mb-6 text-beta-blue-294 tracking-wider font-serif"
            >
              SPRING RUSH
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-body leading-relaxed">
              Currently unavailable for 2026 Spring. Check back soon. :)
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-normal mb-2 text-[#002F6C] tracking-wider font-serif"
          >
            INTERESTED IN RUSH?
          </h2>
          <p
            className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto font-body"
          >
            Reach out.
            <br/><br/>Co-VPs of Recruitment: Amir Alsad and Jeanpaul Sanchez-Moreno
            <br/>Email: beta-rush@mit.edu
          </p>
        </div>
      </section>
    </div>
  )
}
