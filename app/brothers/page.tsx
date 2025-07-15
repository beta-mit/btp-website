"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function BrothersPage() {
  // Brothers Database - Single source of truth
  const brothersDatabase = {
    "Alex Meier": {
      name: "Alex Meier",
      major: "Aeronautics and Astronautics (Engineering); Physics (Flexible)",
      classYear: "2026",
      image: "/shared/placeholder.svg",
      position: "President"
    },
    "Michael Serrano": {
      name: "Michael Serrano",
      major: "Physics; Computer Science, Economics, and Data Science",
      classYear: "2026",
      image: "/shared/placeholder.svg",
      position: "VP External"
    },
    "William Nolan": {
      name: "William Nolan",
      major: "Physics",
      classYear: "Graduate Student",
      image: "/shared/placeholder.svg",
      position: "VP Internal"
    },
    "Johnny Peng": {
      name: "Johnny Peng",
      major: "Mechanical Engineering",
      classYear: "2028",
      image: "/shared/placeholder.svg",
      position: "VP Finance"
    },
    "Raul Campos": {
      name: "Raul Campos",
      major: "Artificial Intelligence and Decision Making; Electrical Engineering and Computer Science",
      classYear: "2027",
      image: "/shared/placeholder.svg",
      position: "VP House Management"
    },
    "Carlos Lopez": {
      name: "Carlos Lopez",
      major: "Mechanical Engineering with Concentration in Controls, Instrumentation, and Robotics",
      classYear: "2028",
      image: "/shared/placeholder.svg",
      position: "VP Brotherhood"
    },
    "Enrique Hernandez": {
      name: "Enrique Hernandez",
      major: "Aeronautics and Astronautics",
      classYear: "2027",
      image: "/shared/placeholder.svg",
      position: "VP Communications"
    },
    "Matvey Borodin": {
      name: "Matvey Borodin",
      major: "Electrical Engineering and Computer Science; Mathematics",
      classYear: "2028",
      image: "/shared/placeholder.svg",
      position: "VP Member Education"
    },
    "Alberto Mora Trinidad": {
      name: "Alberto Mora Trinidad",
      major: "Chemistry and Biology",
      classYear: "2027",
      image: "/shared/placeholder.svg",
      position: "VP Programming"
    },
        "Amir Alsad": {
       name: "Amir Alsad",
       major: "Physics (Flexible)",
       classYear: "2028",
       image: "/brothers/amir.JPEG",
       position: "Co-VP Recruitment"
     },
    "Jeanpaul Sanchez-Moreno": {
      name: "Jeanpaul Sanchez-Moreno",
      major: "Mechanical Engineering",
      classYear: "2028",
      image: "/shared/placeholder.svg",
      position: "Co-VP Recruitment"
    },
         // Non-executive brothers
     "Xander Backus": {
       name: "Xander Backus",
       major: "Artificial Intelligence and Decision Making; Mathematics",
       classYear: "2026",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Luis Turino Zellek": {
       name: "Luis Turino Zellek",
       major: "Electrical Engineering and Computer Science; Mathematics",
       classYear: "2026",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Vishruth Konakanchi": {
       name: "Vishruth Konakanchi",
       major: "Computer Science and Engineering",
       classYear: "2026",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Colin Clark": {
       name: "Colin Clark",
       major: "Electrical Science and Engineering; Physics (Flexible)",
       classYear: "2026",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Tom Nguyen": {
       name: "Tom Nguyen",
       major: "Mechanical Engineering with Concentration in Controls, Instrumentation, and Robotics",
       classYear: "2026",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Ryan Duarte": {
       name: "Ryan Duarte",
       major: "Mechanical Engineering",
       classYear: "2027",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Max Misterka": {
       name: "Max Misterka",
       major: "Mathematics with Computer Science; Chemistry or Physics",
       classYear: "2027",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Michael Georgievski": {
       name: "Michael Georgievski",
       major: "Physics; Computer Science and Engineering; Mathematics",
       classYear: "2027",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Asa Paparo": {
       name: "Asa Paparo",
       major: "Computer Science and Engineering",
       classYear: "2028",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Angelo Farfan": {
       name: "Angelo Farfan",
       major: "Mathematics; Artificial Intelligence and Decision Making",
       classYear: "2028",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Guy Gong": {
       name: "Guy Gong",
       major: "Mechanical Engineering",
       classYear: "2028",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Yrwin Batan": {
       name: "Yrwin Batan",
       major: "Computer Science, Economics, and Data Science",
       classYear: "2028",
       image: "/shared/placeholder.svg",
       position: undefined
     },
     "Jasper Lee": {
       name: "Jasper Lee",
       major: "Mechanical Engineering; Physics",
       classYear: "2028",
       image: "/shared/placeholder.svg",
       position: undefined
     }
  }

  // Executive Board in order
  const executiveBoardOrder = [
    "Alex Meier",
    "Michael Serrano",
    "William Nolan",
    "Johnny Peng",
    "Raul Campos",
    "Carlos Lopez",
    "Enrique Hernandez",
    "Matvey Borodin",
    "Alberto Mora Trinidad",
    "Amir Alsad",
    "Jeanpaul Sanchez-Moreno"
  ]

  const executiveBoard = executiveBoardOrder.map(name => brothersDatabase[name as keyof typeof brothersDatabase])

  // Brothers by class year
  const brothersByClass = {
    2026: Object.values(brothersDatabase).filter(brother => brother.classYear === "2026"),
    2027: Object.values(brothersDatabase).filter(brother => brother.classYear === "2027"),
    2028: Object.values(brothersDatabase).filter(brother => brother.classYear === "2028"),
    2029: []
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-[#002F6C] tracking-wider"
            style={{ fontFamily: "serif" }}
          >
            MEET THE BROTHERS
          </h1>
        </div>
      </section>

      {/* Executive Board */}
      <section className="pt-8 pb-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#002F6C] tracking-wider"
              style={{ fontFamily: "serif" }}
            >
              2025 EXECUTIVE BOARD
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {executiveBoard.map((member) => (
              <div
                key={member.name}
                className="w-48"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={member.image || "/shared/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="h-6 mb-2">
                    {member.position && <Badge className="bg-[#002F6C] text-white text-xs">{member.position}</Badge>}
                  </div>
                  <h3
                    className="text-xs font-bold mb-1 text-[#002F6C] tracking-wide text-left"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {member.name.toUpperCase()}
                  </h3>
                  <span className="text-xs text-gray-600 italic text-left" style={{ fontFamily: "Arial, sans-serif" }}>
                    {member.classYear}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brothers by Class Year */}
      {Object.entries(brothersByClass).map(([classYear, brothers]) => (
        <section key={classYear} className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#002F6C] tracking-wider"
                style={{ fontFamily: "serif" }}
              >
                CLASS OF {classYear}
              </h2>
            </div>

            {brothers.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-6">
                {brothers.map((brother) => (
                  <div
                    key={brother.name}
                    className="w-48"
                  >
                    <div className="relative h-48 mb-4">
                      <Image
                        src={brother.image}
                        alt={brother.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3
                        className="text-xs font-bold mb-2 text-[#002F6C] tracking-wide text-left"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        {brother.name.toUpperCase()}
                      </h3>
                      <span className="text-xs leading-relaxed text-gray-600 italic text-left" style={{ fontFamily: "Arial, sans-serif" }}>
                        {brother.major}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p className="text-lg" style={{ fontFamily: "Arial, sans-serif" }}>
                  <a
                    href="/rush"
                    className="text-[#002F6C] hover:text-[#69B3E7] underline transition-colors duration-200"
                  >
                    Interested? Rush us.
                  </a>
                </p>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
