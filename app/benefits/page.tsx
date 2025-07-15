"use client"

import { PageHeader } from "@/components/layout/PageHeader"
import { Section } from "@/components/layout/Section"
import { FRATERNITY_INFO, COMMON_CLASSES } from "@/lib/constants"
import type { PageHeaderData, SectionData } from "@/lib/types"

export default function BenefitsPage() {
  const headerData: PageHeaderData = {
    title: "Why Join?",
    subtitle: "",
    description: ""
  }



  const notableAlumniSection: SectionData = {
    title: "Notable Alumni",
    description: ""
  }

  return (
    <div className={COMMON_CLASSES.pageContainer}>
      <PageHeader {...headerData} />

      {/* Two-column section: Member Benefits and Why Beta Over Others */}
      <section className="pb-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
            {/* Member Benefits - Left Side */}
            <div className="text-center lg:border-r lg:border-gray-300 lg:pr-6">
              <h2
                className="text-3xl md:text-4xl font-bold mb-8 text-[#002F6C] tracking-wider"
                style={{ fontFamily: "serif" }}
              >
                MEMBER BENEFITS
              </h2>
              <div className="max-w-lg mx-auto">
                <ul className="space-y-4 text-gray-700 leading-relaxed text-left" style={{ fontFamily: "Arial, sans-serif" }}>
                  <li>• leadership development + scholarship opportunities</li>
                  <li>• a brotherhood that will last a lifetime</li>
                  <li>• access to chapter resources (makerspace, gym, free laundry, textbooks, study spaces, etc.)</li>
                  <li>• a network of brothers who can assist in academic, professional or personal development</li>
                  <li>• a network of experienced alumni for guidance</li>
                  <li>• in-house brothers receive room in Boston for much cheaper than campus pricing</li>
                  <li>• proximity to a number of dining, entertainment, and shopping locations</li>
                  <li>• free summer storage</li>
                  <li>• many brotherhood/social events a semester</li>
                  <li>• hundreds of $ in savings for summer rent</li>
                  <li>• a home away from home</li>
                </ul>
              </div>
            </div>

            {/* Why Beta Over Others - Right Side */}
            <div className="text-center lg:pl-6">
              <h2
                className="text-3xl md:text-4xl font-bold mb-8 text-[#002F6C] tracking-wider"
                style={{ fontFamily: "serif" }}
              >
                WHY BETA OVER OTHERS?
              </h2>
              <div className="max-w-lg mx-auto text-left text-gray-700 leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>
                <p className="mb-6">
                  You may be wondering about this question. It's best to ask a brother, but here's a few key points to satisfy your curiosity:
                </p>
                <div className="space-y-4">
                  <p>
                    <strong>1.</strong> The Beta Upsilon chapter's dues for both in-house and out-of-house brothers are generally cheaper than those of other fraternities. For a costly university like MIT, every bit counts.
                  </p>
                  <p>
                    <strong>2.</strong> Beta has a substance-free policy. While each brother may do as he please (without endangering themselves), alcohol and other substances are not sponsored by the fraternity or permitted in fraternity events. So, instead of your money going to drinks and huge parties, your dues go back into the brotherhood with a focus on building meaningful relationships.
                  </p>
                  <p>
                    <strong>3.</strong> Men of Principle. That's who we continually strive to be. Regardless of our differences in interest as makers, gamers, bakers, etc., we constantly uphold our 5 core values: Mutual Assistance, Intellectual Growth, Trust, Responsible Conduct, and Integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <Section {...notableAlumniSection}>
        <div className="space-y-10 -mt-8">
          {/* Beta Upsilon Sub-section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Beta Upsilon</h3>
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
                MIT produces many successful people every year. Obviously. But the Beta Upsilon chapter of Beta Theta Pi have produced some of the most notorious. Ignoring the many, many brothers that end up working for top companies or even founding their own, we present an astronaut (not a noobie, but a Commander) and the Koch brothers (yes, the one's with an MIT building and MIT cancer research institute named after them).
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Charles Koch */}
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 relative overflow-hidden rounded-lg">
                  <img
                    src="/other-images/charles-koch.jpg"
                    alt="Charles Koch"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="font-semibold text-lg text-[#002F6C] mb-2">Charles Koch</h4>
                <p className="text-gray-600 text-sm mb-1">MIT '57</p>
                <p className="text-gray-700 font-medium">Chairman/CEO of Koch Industries</p>
              </div>

              {/* David Koch */}
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 relative overflow-hidden rounded-lg">
                  <img
                    src="/other-images/david-koch.jpg"
                    alt="David Koch"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="font-semibold text-lg text-[#002F6C] mb-2">David Koch</h4>
                <p className="text-gray-600 text-sm mb-1">MIT '62</p>
                <p className="text-gray-700 font-medium">Executive VP of Koch Industries</p>
              </div>

              {/* Kenneth D. Cameron */}
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 relative overflow-hidden rounded-lg">
                  <img
                    src="/other-images/kenneth-cameron.jpg"
                    alt="Kenneth D. Cameron"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg text-[#002F6C] mb-2">Kenneth D. Cameron</h4>
                <p className="text-gray-600 text-sm mb-1">MIT '71</p>
                <p className="text-gray-700 font-medium">Former Space Shuttle Commander</p>
              </div>
            </div>
          </div>

          {/* National Sub-section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">National</h3>
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
                The Fraternity is proud to claim among its members the 17th Vice President of the United States, the 17th Prime Minister of Canada, nearly 200 members of the U.S. Senate and House of Representatives – including two Speakers of the House, eight U.S. Supreme Court Justices, a Justice of the Supreme Court of Canada, 32 ambassadors, 52 governors to 30 states, two Canadian Premiers, six Congressional Medal of Honor recipients and seven Presidential Medal of Freedom honorees, 34 Olympic gold medalists, three Nobel Prize winners, 85 Rhodes Scholars, 12 Pulitzer Prize winners and many more.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* John Warnock */}
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 relative overflow-hidden rounded-lg">
                  <img
                    src="/other-images/john-warnock.jpg"
                    alt="John Warnock"
                    className="w-full h-full object-cover object-right"
                  />
                </div>
                <h4 className="font-semibold text-lg text-[#002F6C] mb-2">John Warnock</h4>
                <p className="text-gray-600 text-sm mb-1">Utah '61</p>
                <p className="text-gray-700 font-medium">Co-founder, Adobe Systems, Inc.</p>
              </div>

              {/* Bill Bowerman */}
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 relative overflow-hidden rounded-lg">
                  <img
                    src="/other-images/bill-bowerman.jpg"
                    alt="Bill Bowerman"
                    className="w-full h-full object-cover object-right"
                  />
                </div>
                <h4 className="font-semibold text-lg text-[#002F6C] mb-2">Bill Bowerman</h4>
                <p className="text-gray-600 text-sm mb-1">Oregon '65</p>
                <p className="text-gray-700 font-medium">Co-founder, Nike</p>
              </div>

              {/* Sam Walton */}
              <div className="text-center">
                <div className="mb-4 mx-auto w-48 h-48 relative overflow-hidden rounded-lg">
                  <img
                    src="/other-images/sam-walton.jpg"
                    alt="Sam Walton"
                    className="w-full h-full object-cover object-right"
                  />
                </div>
                <h4 className="font-semibold text-lg text-[#002F6C] mb-2">Sam Walton</h4>
                <p className="text-gray-600 text-sm mb-1">Missouri '40</p>
                <p className="text-gray-700 font-medium">Founder and Chairman, Walmart</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
