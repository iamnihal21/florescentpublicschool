"use client"

import Image from 'next/image'
import * as motion from 'framer-motion/client'
import { Media } from '@/payload/payload-types'

export default function AboutUI({ data }: { data: any }) {
  const { hero, leadership, establishedYear } = data

  return (
    <section className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
          >
            {hero?.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {hero?.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            {hero?.description}
          </motion.p>
        </div>
        <div className="relative mt-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              Guiding Florescent Since {establishedYear}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="space-y-12 px-4 md:px-8 lg:px-16 pb-20">
        {leadership?.map((leader: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="w-full bg-background border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="flex-shrink-0">
              <div className={`relative w-48 h-48 rounded-full overflow-hidden border-4 bg-linear-to-br ${leader.gradient}`}>
                {leader.image && typeof leader.image !== 'string' && (
                  <Image src={(leader.image as Media).url || ''} alt={leader.name} fill className="object-cover" />
                )}
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-6 text-left">
              <div>
                <h3 className="text-3xl font-bold">{leader.name}</h3>
                <p className="text-primary font-semibold">{leader.role}</p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{leader.introduction}</p>
              <blockquote className="italic text-lg border-l-4 border-primary pl-4 text-muted-foreground">
                “{leader.message}”
              </blockquote>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  )
}