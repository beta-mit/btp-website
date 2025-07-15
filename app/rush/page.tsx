"use client"
import { Card } from "@/components/ui/card"

export default function RushPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-6 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 text-beta-blue-294 tracking-wider font-serif"
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
                src="/2020-american.jpg"
                alt="Beta Theta Pi brothers"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-beta-blue-294 tracking-wider font-serif"
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
              className="text-3xl md:text-4xl font-bold mb-6 text-beta-blue-294 tracking-wider font-serif"
            >
              FALL RUSH
            </h2>
          </div>

          {/* Google Calendar Embed */}
          <div className="w-full max-w-4xl mx-auto">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=687b664eda793ae1e6bd3c19a84b42da4d00bed862c98ad1e37ed28eafe9b175%40group.calendar.google.com&ctz=America%2FNew_York&mode=AGENDA"
              className="w-full h-96 md:h-[600px] border border-gray-300 rounded-lg shadow-lg"
              frameBorder="0"
              scrolling="no"
              title="Fall Rush Calendar"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Spring Rush */}
      <section className="pt-10 pb-5 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-beta-blue-294 tracking-wider font-serif"
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
            className="text-3xl md:text-4xl font-bold mb-2 text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            INTERESTED IN RUSH?
          </h2>
          <p
            className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: "Arial, sans-serif" }}
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
