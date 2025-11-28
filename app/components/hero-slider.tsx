"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const heroRef = useRef<HTMLDivElement>(null)

  const slides = [
    {
      image: "https://c1.wallpaperflare.com/preview/968/730/441/building-cheyenne-photos-high-school.jpg",
      title: "DISCOVER YOUR POWER",
      highlightWord: "YOUR",
    },
    {
      image: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg",
      title: "PURSUE YOUR PASSION",
      highlightWord: "YOUR",
    },
    {
      image: "https://c4.wallpaperflare.com/wallpaper/611/708/941/star-wars-emperor-palpatine-stormtrooper-school-wallpaper-preview.jpg",
      title: "EXPRESS YOUR CREATIVITY",
      highlightWord: "YOUR",
    },
    {
      image: "https://wallpaper.forfun.com/fetch/e4/e4ed827f7070b0b921e0d100201e95a9.jpeg",
      title: "ACHIEVE YOUR GOALS",
      highlightWord: "YOUR",
    },
  ]

  /** Scroll fade-out effect */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.9], [1, 0.94])

  /** Auto slide change */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length
        setDirection(next > prev ? 1 : -1)
        return next
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  /** Slide movement animation */
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.8,
    }),
  }

  /** Text movement animation */
  const contentVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 80 : -80,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -80 : 80,
    }),
  }

  const handleSlideChange = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1)
    setActiveSlide(index)
  }

  return (
    <section className="relative h-[200vh] bg-black">
      {/* Sticky wrapper MUST be inside a tall container */}
      <motion.div
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Background Slides */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 1.1,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Text */}
        <div className="relative h-full flex flex-col items-center justify-center text-white px-6 z-10">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`text-${activeSlide}`}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="text-center"
            >
              {/** Split Title */}
              {(() => {
                const words = slides[activeSlide].title.split(" ")
                return (
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                    <span className="block">{words[0]}</span>
                    <span className="inline-block bg-[#374151] px-6 py-2 mx-2">
                      {slides[activeSlide].highlightWord}
                    </span>
                    <span className="block mt-2">{words.slice(2).join(" ")}</span>
                  </h1>
                )
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-12 h-12 text-white" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-8 left-8 text-white z-20">
          <p className="text-sm leading-relaxed mb-3">
            An independent, co-educational college<br />
            preparatory day school for grades 7–12
          </p>

          <div className="flex gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full border-2 transition-all ${
                  index === activeSlide
                    ? "bg-[#FFD700] border-[#FFD700]"
                    : "border-[#FFD700]"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="border-b-4 border-[#FFD700] pb-1">
            <span className="text-lg font-bold tracking-wider text-white">
              #HWDISCOVER
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

