"use client"

import { motion } from "framer-motion"
import { ParallaxSection } from "./overlay-effect"


export function MissionSection({ text }: { text: string}) {
  return (
    <ParallaxSection>
      {(isInView: boolean) => (
        <>
          <motion.div className="relative z-10 max-w-5xl mx-auto px-8 text-center" >
            <p
              className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight font-serif italic text-[#C8102E] tracking-wide"
              style={{ lineHeight: "1.3" }}>
              { text }
            </p>
          </motion.div>
        </>
      )}
    </ParallaxSection>
  )
}
