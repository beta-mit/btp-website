"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function BrothersPage() {
  // Brothers Database - Single source of truth
  const brothersDatabase = {
    "Michael Serrano": {
      name: "Michael Serrano",
      major: "Physics; Computer Science, Economics, and Data Science",
      classYear: "2026",
      image: "/brothers/michael_grad.png",
      position: undefined,
      listed: false
    },
    "Jermy Scarpetta": {
      name: "Jermy Scarpetta",
      major: "Mechanical Engineering (Course 2)",
      classYear: "2028",
      image: "/brothers/jermy_junior.png",
      position: "VP Internal"
    },
    "Johnny Peng": {
      name: "Johnny Peng",
      major: "Mechanical Engineering",
      classYear: "2028",
      image: "/brothers/johnny_junior.png",
      position: undefined
    },
    "Jordan Tran": {
      name: "Jordan Tran",
      major: "Aeronautics and Astronautics (Course 16)",
      classYear: "2029",
      image: "/brothers/jordan_sophomore.png",
      position: "VP Finance"
    },
    "Raul Campos": {
      name: "Raul Campos",
      major: "Computer Science and Engineering (Course 6-3)",
      classYear: "2027",
      image: "/shared/placeholder.svg",
      position: undefined
    },
    "Carlos Lopez": {
      name: "Carlos Lopez",
      major: "Mechanical Engineering with Concentration in Controls, Instrumentation, and Robotics",
      classYear: "2028",
      image: "/brothers/carlos_junior.png",
      position: "Co-VP Recruitment"
    },
    "Carlos Shum": {
      name: "Carlos Shum",
      major: "Mathematics with Computer Science (Course 18C)",
      classYear: "2029",
      image: "/brothers/carlos_sophomore.png",
      position: "Brotherhood Chair"
    },
    "Enrique Hernandez": {
      name: "Enrique Hernandez",
      major: "Aeronautics and Astronautics (Course 16)",
      classYear: "2027",
      image: "/brothers/enrique_senior.png",
      position: undefined
    },
    "Matvey Borodin": {
      name: "Matvey Borodin",
      major: "Electrical Engineering and Computer Science; Mathematics",
      classYear: "2028",
      image: "/brothers/matvey_junior.png",
      position: "President"
    },
    "Isaiah Villarreal": {
      name: "Isaiah Villarreal",
      major: "Aeronautics and Astronautics (Course 16)",
      classYear: "2027",
      image: "/brothers/isaiah_senior.png",
      position: "VP Member Education"
    },
    "Jayden Lin": {
      name: "Jayden Lin",
      major: "Aeronautics and Astronautics (Course 16)",
      classYear: "2029",
      image: "/brothers/jayden_sophomore.png",
      position: "VP Programming"
    },
    "Felipe Shimamura": {
      name: "Felipe Shimamura",
      major: "Mathematics with Computer Science (Course 18C)",
      classYear: "2029",
      image: "/brothers/felipe_sophomore.png",
      position: undefined
    },
    "Henry Dang": {
      name: "Henry Dang",
      major: "Mechanical Engineering",
      classYear: "2029",
      image: "/brothers/henry_sophomore.png",
      position: undefined
    },
    "Ishan Nahian": {
      name: "Ishan Nahian",
      major: "Nuclear Science and Engineering",
      classYear: "2029",
      image: "/brothers/ishan_sophomore.png",
      position: undefined
    },
    "Rohan Dalal": {
      name: "Rohan Dalal",
      major: "Electrical Engineering and Computer Science (Course 6-2)",
      classYear: "2029",
      image: "/brothers/rohan_sophomore.png",
      position: undefined
    },
    "Alberto Mora Trinidad": {
      name: "Alberto Mora Trinidad",
      major: "Computation and Cognition (Course 6-9)",
      classYear: "2027",
      image: "/shared/placeholder.svg",
      position: undefined
    },
        "Amir Alsad": {
       name: "Amir Alsad",
       major: "Physics (Flexible)",
       classYear: "2028",
       image: "/brothers/amir_junior.png",
       position: undefined
     },
    "Isaac Sheard": {
      name: "Isaac Sheard",
      major: "Aeronautics and Astronautics (Course 16)",
      classYear: "2028",
      image: "/brothers/isaac_junior.png",
      position: "Co-VP Recruitment"
    },
    "Jeanpaul Sanchez-Moreno": {
      name: "Jeanpaul Sanchez-Moreno",
      major: "Mechanical Engineering (Course 2-A)",
      classYear: "2028",
      image: "/brothers/jp_junior.png",
      position: ["VP External", "VP Brotherhood"]
    },
         // Non-executive brothers
     "Luis Turino Zellek": {
       name: "Luis Turino Zellek",
       major: "Electrical Engineering and Computer Science; Mathematics",
       classYear: "2026",
       image: "/brothers/luis_grad.png",
       position: undefined,
       listed: false
     },
     "Colin Clark": {
       name: "Colin Clark",
       major: "Electrical Science and Engineering; Physics (Flexible)",
       classYear: "2026",
       image: "/brothers/colin_grad.png",
       position: undefined,
       listed: false
     },
     "Tom Nguyen": {
       name: "Tom Nguyen",
       major: "Mechanical Engineering with Concentration in Controls, Instrumentation, and Robotics",
       classYear: "2026",
       image: "/brothers/tom_grad.png",
       position: undefined,
       listed: false
     },
     "Ryan Duarte": {
       name: "Ryan Duarte",
       major: "Mechanical Engineering",
       classYear: "2027",
       image: "/brothers/ryan_senior.png",
       position: undefined
     },
     "Michael Georgievski": {
       name: "Michael Georgievski",
       major: "Physics; Computer Science and Engineering; Mathematics",
       classYear: "2027",
       image: "/brothers/mikeg_senior.png",
       position: undefined
     },
     "Angelo Farfan": {
       name: "Angelo Farfan",
       major: "Mathematics (Course 18); Artificial Intelligence and Decision Making (Course 6-4)",
       classYear: "2028",
       image: "/brothers/angelo_junior.png",
       position: ["Co-VP House Management", "VP Communications"]
     },
     "Matthew Estevez": {
       name: "Matthew Estevez",
       major: "Computer Science and Engineering (Course 6-3)",
       classYear: "2028",
       image: "/brothers/matthew_junior.png",
       position: "Co-VP House Management"
     },
     "Yrwin Batan": {
       name: "Yrwin Batan",
       major: "Computer Science, Economics, and Data Science",
       classYear: "2028",
       image: "/brothers/yrwin_junior.png",
       position: undefined
     },
  }

  // Executive Board in order
  const executiveBoardOrder = [
    "Matvey Borodin",
    "Jeanpaul Sanchez-Moreno",
    "Jermy Scarpetta",
    "Jordan Tran",
    "Angelo Farfan",
    "Matthew Estevez",
    "Carlos Shum",
    "Isaiah Villarreal",
    "Jayden Lin",
    "Carlos Lopez",
    "Isaac Sheard"
  ]

  const executiveBoard = executiveBoardOrder.map(name => brothersDatabase[name as keyof typeof brothersDatabase])

  // Brothers by class year. Grad students stay in the database with listed: false.
  // Set listed to true on a record to show that brother again.
  const isListed = (brother: { classYear: string; listed?: boolean }) => brother.listed !== false
  const brothersByClass = {
    2026: Object.values(brothersDatabase).filter(brother => brother.classYear === "2026" && isListed(brother)),
    2027: Object.values(brothersDatabase).filter(brother => brother.classYear === "2027" && isListed(brother)),
    2028: Object.values(brothersDatabase).filter(brother => brother.classYear === "2028" && isListed(brother)),
    2029: Object.values(brothersDatabase).filter(brother => brother.classYear === "2029" && isListed(brother))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-normal text-[#002F6C] tracking-wider font-serif"
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
              className="text-3xl md:text-4xl font-normal text-[#002F6C] tracking-wider font-serif"
            >
              2026 EXECUTIVE BOARD
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
                  <div className="min-h-6 mb-2 flex flex-col items-start gap-1">
                    {(Array.isArray(member.position) ? member.position : member.position ? [member.position] : []).map((title) => (
                      <Badge key={title} className="bg-[#002F6C] text-white text-xs whitespace-normal">{title}</Badge>
                    ))}
                  </div>
                  <h3
                    className="text-xs font-bold mb-1 text-[#002F6C] tracking-wide text-left font-sans uppercase"
                  >
                    {member.name.toUpperCase()}
                  </h3>
                  <span className="text-xs text-gray-600 italic text-left font-body">
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
        brothers.length > 0 ? (
        <section key={classYear} className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-normal text-[#002F6C] tracking-wider font-serif"
              >
                CLASS OF {classYear}
              </h2>
            </div>

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
                      className="text-xs font-bold mb-2 text-[#002F6C] tracking-wide text-left font-sans uppercase"
                    >
                      {brother.name.toUpperCase()}
                    </h3>
                    <span className="text-xs leading-relaxed text-gray-600 italic text-left font-body">
                      {brother.major}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        ) : null
      ))}
    </div>
  )
}
