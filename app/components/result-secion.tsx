"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/public/UI/button"

const results = [
  {
    year: "2023-2024",
    title: "Outstanding Academic Excellence",
    stats: [
      { label: "College Acceptance Rate", value: "100%" },
      { label: "Average SAT Score", value: "1480" },
      { label: "AP Exam Pass Rate", value: "95%" },
      { label: "National Merit Scholars", value: "42" },
    ],
    image: "/UI/students-celebrating-graduation-ceremony.png",
  },
  {
    year: "2022-2023",
    title: "Record-Breaking Achievements",
    stats: [
      { label: "Ivy League Admits", value: "68" },
      { label: "Perfect SAT Scores", value: "15" },
      { label: "AP Scholar Awards", value: "156" },
      { label: "College Scholarships", value: "$12M" },
    ],
    image: "/UI/academic-awards-and-trophies-display.png",
  },
]

function ResultCard({ result, index }: { result: (typeof results)[0]; index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [200, 0, 0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.95])

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.3, 1, 1, 1.1])
  const imageRotate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, -3])
  const imageX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [index % 2 === 0 ? -50 : 50, 0, 0, index % 2 === 0 ? 30 : -30],
  )

  const isEven = index % 2 === 0

  const statOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const statY = useTransform(scrollYProgress, [0.2, 0.5], [60, 0])
  const statScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1])

  const buttonY = useTransform(scrollYProgress, [0.4, 0.6], [40, 0])
  const buttonOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])

  const yearX = useTransform(scrollYProgress, [0.1, 0.4], [isEven ? -100 : 100, 0])
  const yearOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])

  const titleY = useTransform(scrollYProgress, [0.15, 0.45], [40, 0])
  const titleOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center mb-24 lg:mb-32`}
    >
      <motion.div
        className="w-full lg:w-1/2"
        style={{
          scale: imageScale,
          rotate: imageRotate,
          x: imageX,
        }}
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image src={result.image || "/placeholder.svg"} alt={result.title} fill className="object-cover" />
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <motion.p style={{ x: yearX, opacity: yearOpacity }} className="text-sm font-semibold text-blue-600 mb-2">
            {result.year}
          </motion.p>
          <motion.h3
            style={{ y: titleY, opacity: titleOpacity }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            {result.title}
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {result.stats.map((stat, statIndex) => (
            <motion.div
              key={stat.label}
              style={{
                opacity: statOpacity,
                y: statY,
                scale: statScale,
              }}
              transition={{ delay: statIndex * 0.1 }}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <p className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div style={{ opacity: buttonOpacity, y: buttonY }}>
          <Button className="mt-4" size="lg">
            View Detailed Results
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function ResultsSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const headerY = useTransform(scrollYProgress, [0, 0.15], [80, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.15], [0.9, 1])

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Previous Year Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our students' exceptional achievements and continued excellence in academics, college
            admissions, and beyond.
          </p>
        </motion.div>

        <div>
          {results.map((result, index) => (
            <ResultCard key={result.year} result={result} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
