"use client"

import Image from "next/image"
import { Button } from "@/public/UI/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface CardData {
  title: string
  description: string
  buttonText?: string
  imageUrl: string
  imageAlt: string
}

const cards: CardData[] = [
  {
    title: "Singing & Performance",
    description: "Experience the power of musical expression through our award-winning vocal programs and performance opportunities.",
    buttonText: "Explore Music",
    imageUrl: "/UI/trusteeImage.png",
    imageAlt: "Students performing",
  },
  {
    title: "Academic Excellence",
    description: "Discover rigorous academic programs that challenge and inspire students to reach their full potential.",
    buttonText: "Learn More",
    imageUrl: "/UI/musicIimage.png",
    imageAlt: "Students in classroom",
  },
  {
    title: "Athletic Programs",
    description: "Join our competitive sports teams and develop leadership, teamwork, and athletic skills.",
    buttonText: "View Athletics",
    imageUrl: "/UI/playImage.png",
    imageAlt: "Sports field",
  },
  {
    title: "Campus Life",
    description: "Be part of a vibrant community with state-of-the-art facilities and endless opportunities for growth.",
    buttonText: "Explore Campus",
    imageUrl: "/UI/classroomIimage.png",
    imageAlt: "Campus facilities",
  },
]

export function ContentSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      {/* Fixed Frame Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center p-6">
        {/* Main Frame - This stays fixed throughout */}
        <div className="w-full max-w-7xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl border-2 border-border/20 bg-card relative">
          
          {/* Background Frame that stays constant */}
          <div className="absolute inset-0 bg-linear-to-br from-background via-card to-muted/30" />
          
          {/* Grid Layout Frame */}
          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Side - Content Area */}
            <div className="flex flex-col justify-center space-y-6 z-10">
              {cards.map((card, index) => {
                const total = cards.length
                const start = index / total
                const end = (index + 1) / total

                const contentOpacity = useTransform(
                  scrollYProgress,
                  [start, start + 0.1, end - 0.1, end],
                  [0, 1, 1, 0]
                )

                const contentY = useTransform(
                  scrollYProgress,
                  [start, start + 0.15],
                  [30, 0]
                )

                const scale = useTransform(
                  scrollYProgress,
                  [start, start + 0.1],
                  [0.95, 1]
                )

                return (
                  <motion.div
                    key={`content-${index}`}
                    style={{ 
                      opacity: contentOpacity,
                      y: contentY,
                      scale,
                      position: 'absolute',
                    }}
                    className="w-full max-w-lg"
                  >
                    <motion.h2 
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      {card.title}
                    </motion.h2>
                    
                    <motion.p 
                      className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {card.description}
                    </motion.p>

                    {card.buttonText && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          {card.buttonText}
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Right Side - Image Area */}
            <div className="flex items-center justify-center relative">
              {cards.map((card, index) => {
                const total = cards.length
                const start = index / total
                const end = (index + 1) / total

                const imageOpacity = useTransform(
                  scrollYProgress,
                  [start, start + 0.1, end - 0.1, end],
                  [0, 1, 1, 0]
                )

                const imageScale = useTransform(
                  scrollYProgress,
                  [start, start + 0.15],
                  [0.8, 1]
                )

                const imageRotate = useTransform(
                  scrollYProgress,
                  [start, start + 0.2],
                  [-5, 0]
                )

                return (
                  <motion.div
                    key={`image-${index}`}
                    style={{ 
                      opacity: imageOpacity,
                      scale: imageScale,
                      rotate: imageRotate,
                      position: 'absolute',
                    }}
                    className="w-full h-full max-h-[500px] relative"
                  >
                    {/* Image Container with Frame-like styling */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                      <Image
                        src={card.imageUrl}
                        alt={card.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Floating decorative elements */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6 }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.8 }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {cards.map((_, index) => {
              const total = cards.length
              const start = index / total
              const end = (index + 1) / total
              
              const dotOpacity = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [0.3, 1, 1, 0.3]
              )

              const dotScale = useTransform(
                scrollYProgress,
                [start, start + 0.1],
                [0.8, 1.2]
              )

              return (
                <motion.div
                  key={`dot-${index}`}
                  style={{
                    opacity: dotOpacity,
                    scale: dotScale,
                  }}
                  className="w-3 h-3 bg-primary rounded-full transition-all duration-300"
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )

}
