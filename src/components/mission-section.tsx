"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function MissionSection() {
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#E8E4DE" }}
    >
      {/* Decorative wolverine illustration */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Stylized wolverine/mascot outline */}
          <g fill="none" stroke="#8B1538" strokeWidth="1">
            {/* Head outline */}
            <path d="M200 80 Q240 60 280 80 Q320 100 340 140 Q360 180 350 220 Q340 260 300 280" />
            <path d="M200 80 Q160 60 120 80 Q80 100 60 140 Q40 180 50 220 Q60 260 100 280" />
            {/* Ears */}
            <path d="M140 60 Q130 30 150 20 Q170 30 160 60" />
            <path d="M260 60 Q270 30 250 20 Q230 30 240 60" />
            {/* Face details */}
            <circle cx="160" cy="140" r="15" />
            <circle cx="240" cy="140" r="15" />
            <path d="M180 180 Q200 200 220 180" />
            <path d="M200 180 L200 210 Q190 220 200 230 Q210 220 200 210" />
            {/* Mane/fur lines */}
            <path d="M100 280 Q80 320 100 360 Q120 400 160 420" />
            <path d="M300 280 Q320 320 300 360 Q280 400 240 420" />
            <path d="M120 300 Q140 340 160 380" />
            <path d="M280 300 Q260 340 240 380" />
            <path d="M140 320 Q160 360 180 400" />
            <path d="M260 320 Q240 360 220 400" />
            {/* Body outline */}
            <path d="M160 420 Q180 440 200 450 Q220 440 240 420" />
          </g>
        </svg>
      </div>

      {/* Mission statement text */}
      <motion.div className="relative z-10 max-w-5xl mx-auto px-8 text-center" style={{ opacity, y }}>
        <p
          className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-serif italic text-[#C8102E] tracking-wide"
          style={{ lineHeight: "1.3" }}
        >
          Florescent Public School strives to be a diverse and inclusive community united by the joyful pursuit of educational
          excellence, living and learning with integrity, and purpose beyond ourselves.
        </p>
      </motion.div>
    </section>
  )
}
