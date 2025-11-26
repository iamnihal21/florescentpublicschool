"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      image: "/images/hero-gym.jpg",
      title: "DISCOVER YOUR POWER",
      highlightWord: "YOUR",
    },
    {
      image: "/students-in-classroom-studying.jpg",
      title: "PURSUE YOUR PASSION",
      highlightWord: "YOUR",
    },
    {
      image: "/students-performing-arts-on-stage.jpg",
      title: "EXPRESS YOUR CREATIVITY",
      highlightWord: "YOUR",
    },
    {
      image: "/students-outdoor-sports-field.jpg",
      title: "ACHIEVE YOUR GOALS",
      highlightWord: "YOUR",
    },
  ];
  const slideCount = slides.length;
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slideCount;
        // When looping from last to first, go left to right
        setDirection ((prev === slideCount - 1 && next === 0) ? -1 : 1) 
        return next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [slideCount]);

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
  };

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
  };

  const handleSlideChange = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-6">
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
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              <span className="block">
                {slides[activeSlide].title.split(" ")[0]}
              </span>
              <span className="inline-block bg-[#C8102E] px-6 py-2 mx-2">
                {slides[activeSlide].highlightWord}
              </span>
              <span className="block mt-2">
                {slides[activeSlide].title.split(" ").slice(2).join(" ")}
              </span>
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Scroll Indicator */}
        <button type="button"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-12 h-12 text-white" strokeWidth={1.5} />
        </button>
      </div>

      {/* Bottom Left Info */}
      <div className="absolute bottom-8 left-8 text-white">
        <p className="text-sm max-w-md leading-relaxed mb-4">
          An independent, co-educational college
          <br />
          preparatory day school for grades 7-12
        </p>

        <div className="flex gap-3">
          {slides.map((_, index) => (
            <motion.button
              // biome-ignore lint/suspicious/noArrayIndexKey: Just for now
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                index === activeSlide
                  ? "bg-[#FFD700] border-[#FFD700]"
                  : "bg-transparent border-[#FFD700]"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === activeSlide && (
                <motion.div
                  layoutId="activeSlide"
                  className="w-full h-full rounded-full bg-[#FFD700]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bottom Right Hashtag */}
      <div className="absolute bottom-8 right-8">
        <div className="border-b-4 border-[#FFD700] pb-1">
          <span className="text-white font-bold text-lg tracking-wider">
            #HWDISCOVER
          </span>
        </div>
      </div>
    </section>
  );
}
