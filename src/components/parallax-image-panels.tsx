"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const panels = [
  {
    id: 1,
    image: "/students-collaborating-in-modern-library-with-natu.jpg",
    title: "MAKE NEW FRIENDS",
    cta: "MEET OUR COMMUNITY",
    href: "/community",
  },
  {
    id: 2,
    image: "/students-performing-arts-theater-stage-dramatic-li.jpg",
    title: "EXPRESS YOURSELF",
    cta: "EXPLORE THE ARTS",
    href: "/arts",
  },
  {
    id: 3,
    image: "/athletes-playing-sports-on-green-field-sunny-day.jpg",
    title: "PUSH YOUR LIMITS",
    cta: "VIEW ATHLETICS",
    href: "/athletics",
  },
]

export function ParallaxImagePanels() {
  const containerRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(containerRef, { margin: "-10% 0px -10% 0px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform scroll progress to height percentage
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative bg-[#E8E4DE]">
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 h-[200px] w-[2px] bg-[#D4CFC7] z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full bg-[#9E1B34] origin-top"
          style={{ height: progressHeight }}
        />
      </motion.div>

      {/* Wolverine watermark on right side */}
      <div className="fixed right-12 top-0 h-full w-[200px] pointer-events-none z-0 opacity-30">
        <svg
          viewBox="0 0 200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M100 50 C120 80, 150 100, 160 150 C170 200, 150 250, 140 280 C130 310, 150 340, 160 380 C170 420, 150 460, 130 500 C110 540, 90 560, 100 580"
            stroke="#C4B5A3"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M80 100 C60 130, 40 160, 50 200 C60 240, 80 270, 70 310 C60 350, 40 390, 50 430 C60 470, 80 500, 70 540"
            stroke="#C4B5A3"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="100" cy="200" r="40" stroke="#C4B5A3" strokeWidth="2" fill="none" />
          <circle cx="100" cy="400" r="50" stroke="#C4B5A3" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {panels.map((panel, index) => (
        <ParallaxPanel key={panel.id} panel={panel} index={index} isLast={index === panels.length - 1} />
      ))}
    </div>
  )
}

function ParallaxPanel({
  panel,
  index,
  isLast,
}: {
  panel: (typeof panels)[0]
  index: number
  isLast: boolean
}) {
  const panelRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"])

  return (
    <div
      ref={panelRef}
      className="h-screen w-full"
      style={{
        position: isLast ? "relative" : "sticky",
        top: 0,
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden px-6 md:px-16 lg:px-24 py-8"
        style={{ y: index === 0 ? 0 : y }}
      >
        {/* Constrained image container */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={panel.image || "/placeholder.svg"}
            alt={panel.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-center px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {panel.title}
            </motion.h2>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                className="relative bg-[#8B1538] hover:bg-[#6d1029] text-white px-8 py-6 text-lg font-semibold tracking-wider rounded-none overflow-hidden group"
              >
                <a href={panel.href}>
                  {/* Yellow accent stripe */}
                  <span className="absolute right-0 top-0 bottom-0 w-12 bg-[#D4A853] flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </span>
                  <span className="pr-8">{panel.cta}</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
