"use client"

import { motion } from "framer-motion"
import { ParallaxSection } from "./overlay-effect"
import { ParallaxTextProps } from "@/types/ui-types"
import { splitInHalf } from "@/lib/utils"
import { Activity } from "react"

export function ParallaxTextBlock({ text, progressBar = true }: ParallaxTextProps) {
  const messages = splitInHalf(text);
  return (
    <ParallaxSection fromY={100} toY={-100}>
      {(isInView: boolean) => (
        <>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="text-[48px] md:text-[56px] font-semibold leading-[1.15] text-[#C8102E] text-center px-8"
          >
            { messages[0] }
            <br/>
            <span className="relative inline-block">
              { messages[1] }
              <Activity mode={progressBar ? "visible" : "hidden"}>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="absolute mt-1 bottom-1 left-0 w-full h-[5px] bg-[#F2B632] origin-left"
                />
              </Activity>
            </span>
          </motion.h2>
        </>
      )}
    </ParallaxSection>
  )
}