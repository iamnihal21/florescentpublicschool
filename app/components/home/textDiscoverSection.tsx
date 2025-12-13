"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax effect - text moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  // Background color transition from light (#E8E4DE) to darker (#D4CFC7)
  const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#E8E4DE", "#DDD8D0", "#D4CFC7"])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor }}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="text-center px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[48px] md:text-[56px] font-semibold leading-[1.15] text-[#C8102E] tracking-wide"
        >
          Discover a community of
          <br />
          <span className="relative inline-block">
            unlimited possibility.
            {/* Yellow underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="absolute bottom-1 left-0 w-full h-[5px] bg-[#F2B632] origin-left"
            />
          </span>
        </motion.h2>
      </motion.div>
    </motion.section>
  )
}
