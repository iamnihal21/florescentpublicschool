"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Pause, Play } from "lucide-react"

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Scale from small (0.6) to full (1) as user scrolls
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.6, 0.85, 1])

  // Border radius from rounded to none
  const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.5], [40, 20, 0])

  // Opacity for content
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1])

  return (
    <section ref={sectionRef} className="relative h-[200vh] z-10">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#D4CFC7]">
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="relative w-full h-full overflow-hidden"
        >
          {/* Video/Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/teacher-in-classroom-teaching-students-with-whiteb.jpg')`,
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <motion.div style={{ opacity: contentOpacity }} className="absolute inset-0 flex items-center justify-center">
            {/* Pause/Play Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center"
            >
              {/* Diamond shape */}
              <div className="absolute inset-0 border-2 border-[#F2B632] rotate-45" />
              <span className="relative z-10 text-white">
                {isPlaying ? (
                  <Pause className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Play className="w-6 h-6 ml-1" strokeWidth={1.5} />
                )}
              </span>
            </button>

            {/* Title */}
            <h2 className="text-white text-[72px] md:text-[96px] lg:text-[120px] font-bold tracking-tight">
              DISCOVER HW
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
