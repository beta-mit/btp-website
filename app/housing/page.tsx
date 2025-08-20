"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Users, Wifi, Car, Utensils, Gamepad2, Book, Dumbbell, MapPin } from "lucide-react"

export default function HousingPage() {
  const houseImages = [
    'housing/a.jpg', 'housing/b.jpg', 'housing/c.jpg', 'housing/d.jpg', 'housing/e.jpg', 'housing/f.jpg', 'housing/g.jpg', 'housing/h.jpg', 'housing/i.jpg', 'housing/j.jpg',
    'housing/k.jpg', 'housing/l.jpg', 'housing/m.jpg', 'housing/n.jpg', 'housing/o.jpg', 'housing/p.jpg', 'housing/q.jpg', 'housing/r.jpg', 'housing/s.jpg', 'housing/t.jpg'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-normal mb-6 text-[#002F6C] tracking-wider font-serif"
          >
            CHAPTER HOUSE
          </h1>
        </div>
      </section>

      {/* House Overview */}
      <section className="pt-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-normal mb-6 text-[#002F6C] tracking-wider font-serif"
              >
                OUR HOME
              </h2>
              <div className="space-y-4 text-gray-700" style={{ fontFamily: "Arial, sans-serif" }}>
                <p className="leading-relaxed">
                  Our chapter house is more than just a residence—it's the center of brotherhood life. Located just
                  minutes from campus (7 minutes by bike to be exact), it's located in Boston University territory.
                  Nevertheless, the surrounding region is very cool! Just behind the house is the Charles River and it's
                  esplanade. Outings are easy being right next to Kenmore Square, with multiple Bluebike stations and the Green Line (train) nearby.
                </p>
                <p className="leading-relaxed">
                  Built sometime in the 1900's and recently renovated in 2013, our house (and annex) features modern amenities
                  while maintaining its classic charm. A bar, party room, makerspace, gym, you name it! We have it all. From endless PSETs
                  to gaming, the house serves as the backdrop for countless memories and lifelong friendships.
                </p>
              </div>
              <div className="mt-6 flex items-center text-[#002F6C]">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-semibold font-sans uppercase">
                  119 Bay State Rd, Boston, MA, 02215
                </span>
              </div>
            </div>
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4286486507996!2d-71.10226778456274!3d42.3496766791857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a6f5a6e2b4f%3A0x2d2e1b8d7c8f6d5c!2s119%20Bay%20State%20Rd%2C%20Boston%2C%20MA%2002215!5e0!3m2!1sen!2sus!4v1647875678901!5m2!1sen!2sus"
                width="600"
                height="500"
                className="rounded-lg shadow-xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-[#002F6C]/10 to-transparent rounded-lg pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="text-3xl md:text-4xl font-normal mb-6 text-[#002F6C] tracking-wider font-serif"
            >
              HOUSE AMENITIES
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
              <li>• a twin-size bed, desk, dresser, and additional closet space</li>
              <li>• a full bathroom on each floor -- two showers, two sinks, a full mirror, and a stall. 2nd floor and 4th floor have another stall in addition to the first one, while the 3rd floor and 4th floor include one urinal each.</li>
              <li>• an industrial-size kitchen in the basement with two large fridges and freezers, a stove top, and a pantry</li>
              <li>• a secure bike room in the basement</li>
              <li>• two washers / dryers combo in the basement</li>
              <li>• a common space on the first floor with a pool/ping-pong table, foosball table, and a large 70" 4K TV with 3D audio</li>
              <li>• a party room in the basement, fully decorated and with a fully equipped standing bar</li>
              <li>• a kitchenette on the first floor with a dining room adjacent</li>
              <li>• a fully equipped gym with workout cage, half rack, olympic plate sets, barbells, and cable machines</li>
              <li>• high-speed WiFi</li>
            </ul>
          </div>

          {/* Photo Collage */}
          <div className="text-center mt-20">
            <h3
              className="text-3xl md:text-4xl font-normal mb-8 text-[#002F6C] tracking-wider font-serif"
            >
              HAVE A LOOK FOR YOURSELF
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {houseImages.map((image, index) => (
                <div key={image} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src={`/${image}`}
                    alt={`House photo ${image.split('.')[0].toUpperCase()}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-normal mb-2 text-[#002F6C] tracking-wider font-serif"
          >
            INTERESTED IN SUMMER HOUSING?
          </h2>
          <p
            className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto font-body"
          >
            Reach out.
            <br/><br/>Housing Manager: Raul Campos
            <br/>Email: beta-housemanager@mit.edu
          </p>
        </div>
      </section>
    </div>
  )
}
