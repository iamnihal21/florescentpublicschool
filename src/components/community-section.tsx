"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Fade in as section enters viewport, fade out as it leaves
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  // Subtle vertical movement for parallax feel
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-[#E8E4DE]"
    >
      {/* Community statement text */}
      <motion.div className="relative z-10 max-w-5xl mx-auto px-8 text-center" style={{ opacity, y }}>
        <p
          className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-serif italic text-[#C8102E] tracking-wide"
          style={{ lineHeight: "1.3" }}
        >
          Discover a community that's welcoming, supportive, and inspiring
        </p>
      </motion.div>
    </section>
  )
}
