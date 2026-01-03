'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface TestimonialProps {
  testimonials?: {
    quote: string
    author: string
    role?: string | null
    image: any // Keeps your dynamic DB logic
  }[] | null
}

export function TestimonialsSlider({ testimonials = [] }: TestimonialProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  // Auto-play effect from the first code block
  useEffect(() => {
    if (!testimonials || testimonials.length <= 1) return
    const timer = setInterval(() => {
      setDirection(1)
      setActiveSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials])

  const handleNext = () => {
    setDirection(1)
    setActiveSlide((prev) => (prev + 1) % (testimonials?.length || 1))
  }

  const handlePrevious = () => {
    setDirection(-1)
    setActiveSlide((prev) => (prev - 1 + (testimonials?.length || 1)) % (testimonials?.length || 1))
  }

  if (!testimonials || testimonials.length === 0) return null

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  }

  return (
    <section className="relative bg-linear-to-br from-primary/5 to-accent/5 py-20 md:py-32 overflow-hidden">
      {/* --- DECORATIVE BACKGROUND ICONS --- */}
      <img
        src="/UI/pencil.png"
        alt=""
        className="absolute top-20 left-10 w-24 h-24 opacity-10 rotate-25 pointer-events-none"
      />
      <img
        src="/UI/book.png"
        alt=""
        className="absolute top-32 right-16 w-32 h-32 opacity-10 rotate-18 pointer-events-none"
      />
      <img
        src="/UI/pencil.png"
        alt=""
        className="absolute bottom-24 right-24 w-20 h-20 opacity-10 rotate-35 pointer-events-none"
      />
      <img
        src="/UI/book.png"
        alt=""
        className="absolute bottom-32 left-20 w-28 h-28 opacity-10 rotate-15 pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about their experiences and achievements
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon Background */}
          <Quote className="absolute -top-8 left-0 w-16 h-16 text-primary/20" />

          {/* Testimonial Content Area */}
          <div className="relative min-h-[350px] md:min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="text-center px-8 w-full"
              >
                <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
                  {testimonials[activeSlide].quote}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <Image
                      src={testimonials[activeSlide].image?.url || "/placeholder.svg"}
                      alt={testimonials[activeSlide].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-lg text-foreground">
                      {testimonials[activeSlide].author}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonials[activeSlide].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- NAVIGATION CONTROLS --- */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-lg active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeSlide ? 1 : -1)
                    setActiveSlide(index)
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeSlide ? "bg-primary w-8" : "bg-primary/30 w-3 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-lg active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}