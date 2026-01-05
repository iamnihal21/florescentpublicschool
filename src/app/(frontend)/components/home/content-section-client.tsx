
'use client'

import Image from 'next/image'
import { Button } from '../../../../../public/UI/button'
import { motion, MotionValue, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { HomePage, Media } from '@/payload/payload-types'

type Card = NonNullable<HomePage['scrollCards']>[number]

interface Props {
  card: Card
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}

export function ContentCard({ card, index, total, scrollYProgress }: Props) {
  const start = index / total
  const end = (index + 1) / total

  const contentOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [index === 0 ? 1 : 0, 1, 1, 0]
  )

  const contentY = useTransform(scrollYProgress, [start, start + 0.15], [30, 0])
  const contentScale = useTransform(scrollYProgress, [start, start + 0.1], [0.95, 1])

  const imageOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [index === 0 ? 1 : 0, 1, 1, 0]
  )

  const imageScale = useTransform(scrollYProgress, [start, start + 0.15], [0.85, 1])
  const imageRotate = useTransform(scrollYProgress, [start, start + 0.2], [-5, 0])

  const imageData = card.image as Media

  return (
    <div
      className="
        inset-0
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
        md:gap-8
        p-6
        md:p-10
        lg:p-12
        relative
        lg:absolute
      "
    >
      {/* LEFT CONTENT */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        className="
          flex
          flex-col
          justify-center
          space-y-4
          md:space-y-6
          z-10
          order-2
          lg:order-1
        "
      >
        <h2 className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
        ">
          {card.title}
        </h2>

        <p className="
          text-base
          sm:text-lg
          md:text-xl
          text-muted-foreground
          leading-relaxed
        ">
          {card.description}
        </p>

        {card.buttonText && (
          <Button size="lg" className="w-fit">
            {card.buttonText}
          </Button>
        )}
      </motion.div>

      {/* RIGHT IMAGE */}
      <div className="flex items-center justify-center order-1 lg:order-2">
        <motion.div
          style={{ opacity: imageOpacity, scale: imageScale, rotate: imageRotate }}
          className="
            w-full
            h-[240px]
            sm:h-[320px]
            md:h-[420px]
            lg:h-full
            max-h-[500px]
            relative
          "
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border">
            {imageData?.url && (
              <Image
                src={imageData.url}
                alt={imageData.alt || card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>

          {/* Decorative elements — desktop only */}
          <motion.div
            className="hidden lg:block absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          />
          <motion.div
            className="hidden lg:block absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export function ContentSectionClient({ cards }: { cards: Card[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen px-4 md:px-6 flex items-center justify-center">
        <div className="w-full max-w-7xl h-[90vh] md:h-[85vh] rounded-3xl border border-border bg-card relative overflow-hidden shadow-2xl shadow-black/10">

          <div className="relative h-full w-full">
            {cards.map((card, index) => (
              <ContentCard
                key={index}
                card={card}
                index={index}
                total={cards.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Progress dots — responsive */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {cards.map((_, index) => {
              const start = index / cards.length
              const end = (index + 1) / cards.length

              const opacity = useTransform(scrollYProgress, [start, end], [0.4, 1])
              const scale = useTransform(scrollYProgress, [start, end], [0.8, 1.2])

              return (
                <motion.div
                  key={index}
                  style={{ opacity, scale }}
                  className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full"
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
