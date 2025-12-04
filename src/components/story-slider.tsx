"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/student-performing-on-stage-dramatic-lighting-thea.jpg",
    subtitle: "DISCOVER",
    title: "PASSION",
    description: "Students explore their creative talents through world-class arts programs.",
    ctaName: "MAYA'S",
    ctaText: "STORY",
  },
  {
    id: 2,
    image: "/students-studying-together-classroom-world-map-col.jpg",
    subtitle: "DISCOVER",
    title: "CURIOSITY",
    description: "What sets Florescent is its abundance of opportunities.",
    ctaName: "SHIMON'S",
    ctaText: "STORY",
  },
  {
    id: 3,
    image: "/student-athletes-playing-sports-field-teamwork.jpg",
    subtitle: "DISCOVER",
    title: "EXCELLENCE",
    description: "Our athletic programs build character, teamwork, and competitive spirit.",
    ctaName: "JORDAN'S",
    ctaText: "STORY",
  },
  {
    id: 4,
    image: "/students-in-science-lab-experiment-research.jpg",
    subtitle: "DISCOVER",
    title: "INNOVATION",
    description: "Cutting-edge facilities empower students to push boundaries in STEM.",
    ctaName: "ALEX'S",
    ctaText: "STORY",
  },
]

export function StorySlider() {
  const [currentIndex, setCurrentIndex] = useState(1)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const getSlideIndex = (offset: number) => {
    let index = currentIndex + offset
    if (index < 0) index = slides.length + index
    if (index >= slides.length) index = index - slides.length
    return index
  }

  const currentSlide = slides[currentIndex]

  return (
    <section className="relative z-20 bg-[#E8E4DE] py-16 md:py-24 overflow-hidden">
      <div className="relative">
        {/* Slider Container */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">
          {/* Previous Slide (Peek) */}
          <div className="absolute left-0 w-[15%] h-[400px] md:h-[500px] z-0 opacity-60">
            <div className="relative w-full h-full">
              <Image
                src={slides[getSlideIndex(-1)].image || "/placeholder.svg"}
                alt="Previous slide"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-[18%] md:left-[20%] z-20 p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
          </button>

          {/* Main Slide */}
          <div className="relative w-[65%] md:w-[55%] h-[400px] md:h-[500px] z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentSlide.image || "/placeholder.svg"}
                  alt={currentSlide.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Caption Overlay */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 px-6 text-center text-white"
                  >
                    <span className="text-sm md:text-base tracking-[0.3em] mb-2">{currentSlide.subtitle}</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4">
                      {currentSlide.title}
                    </h2>
                    <p className="text-sm md:text-base max-w-md leading-relaxed">{currentSlide.description}</p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-[18%] md:right-[20%] z-20 p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1} />
          </button>

          {/* Next Slide (Peek) */}
          <div className="absolute right-0 w-[15%] h-[400px] md:h-[500px] z-0 opacity-60">
            <div className="relative w-full h-full">
              <Image
                src={slides[getSlideIndex(1)].image || "/placeholder.svg"}
                alt="Next slide"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Below Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`cta-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center mt-8 md:mt-12"
          >
            <button className="flex items-center gap-1 text-sm md:text-base font-semibold tracking-wide group">
              <span className="text-[#2D2D2D]">DISCOVER</span>
              <span className="bg-[#9E1B32] text-white px-2 py-1 mx-1">{currentSlide.ctaName}</span>
              <span className="text-[#2D2D2D]">{currentSlide.ctaText}</span>
              <Plus className="w-4 h-4 ml-1 text-[#2D2D2D] group-hover:rotate-90 transition-transform" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
