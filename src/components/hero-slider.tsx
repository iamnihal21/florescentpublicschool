"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  const slides = [
    {
      image: "/images/hero-gym.jpg",
      word1: "DISCOVER",
      highlightWord: "YOUR",
      word2: "POWER",
    },
    {
      image: "/students-in-classroom-studying.jpg",
      word1: "PURSUE",
      highlightWord: "YOUR",
      word2: "PASSION",
    },
    {
      image: "/students-performing-arts-on-stage.jpg",
      word1: "EXPRESS",
      highlightWord: "YOUR",
      word2: "CREATIVITY",
    },
    {
      image: "/students-outdoor-sports-field.jpg",
      word1: "ACHIEVE",
      highlightWord: "YOUR",
      word2: "GOALS",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => {
        const next = (prev + 1) % slides.length;
        (prev === slides.length - 1 && next === 0) ? setDirection(-1) : setDirection(1);
        return next
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  }

  const contentVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
    }),
  }

  const handleSlideChange = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1)
    setActiveSlide(index)
  }

  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden z-0">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={activeSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 1.2, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.6 },
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex flex-col justify-center text-white pl-12 md:pl-20 lg:pl-28 pr-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`content-${activeSlide}`}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 1.0,
              delay: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="text-left -mt-16"
          >
            <h1 className="font-bold tracking-tight leading-none">
              <span className="block text-5xl md:text-6xl lg:text-7xl tracking-tight">{slides[activeSlide].word1}</span>
              <span className="inline-block bg-[#C8102E] px-5 py-1.5 mt-1 text-5xl md:text-6xl lg:text-7xl">
                {slides[activeSlide].highlightWord}
              </span>
              <span className="block text-7xl md:text-8xl lg:text-[10rem] mt-1 leading-none">
                {slides[activeSlide].word2}
              </span>
            </h1>
          </motion.div>
        </AnimatePresence>

        <motion.button
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          aria-label="Scroll down"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 14L12 20L18 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>

      <div className="absolute bottom-16 left-12 md:left-20 lg:left-28 text-white">
        <p className="text-sm max-w-[340px] leading-relaxed mb-5 text-white/95">
          An independent, co-educational college
          <br />
          preparatory day school for grades 7-12
        </p>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                index === activeSlide ? "bg-[#F4A000] border-[#F4A000]" : "bg-transparent border-white/80"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-16 right-12 md:right-20">
        <div className="border-b-2 border-[#F4A000] pb-1">
          <span className="text-white font-bold text-sm tracking-widest uppercase">#HWDISCOVER</span>
        </div>
      </div>
    </section>
  )
}
