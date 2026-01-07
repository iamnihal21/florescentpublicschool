'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AchievementsPage, Media } from '@/payload/payload-types'
import { Trophy, Award, Star, TrendingUp, Target, Zap } from 'lucide-react'

// Map colors for the stats cards based on index
const statColors = [
  'from-primary/20 to-primary/10',
  'from-secondary/20 to-secondary/10',
  'from-accent/20 to-accent/10',
  'from-primary/20 to-accent/20',
]

export default function SchoolView({ data }: { data: AchievementsPage['schoolAchievements'] }) {
  const achievementIcons = [Trophy, Award, Star, TrendingUp, Target, Zap]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-[150px]"></div>
          <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/20 mb-8"
              >
                <span className="text-primary font-bold tracking-[0.1em] text-sm">
                  Institutional Excellence
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                <span className="text-backround">{data?.title}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                {data?.subtitle ||
                  'Celebrating our journey of excellence and groundbreaking achievements'}
              </motion.p>
            </div>

            {/* Dynamic Stats from DB */}
          </div>
        </div>
        <div className="relative md:mt-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Celebrating Institutional Excellence
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 border border-border shadow-2xl"
          >
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-xl shadow-primary/20">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Legacy of Excellence
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our institution stands as a beacon of quality education, consistently setting
                  benchmarks in academic and holistic development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {data?.stats?.map((stat, index) => (
              <div
                key={stat.id}
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`inline-block p-3 rounded-xl bg-gradient-to-r ${statColors[index % statColors.length]} mb-4`}
                >
                  <span className="text-2xl">{stat.iconEmoji || '⭐'}</span>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Achievements Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Achievements Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {data?.items?.map((item, i) => {
              const Icon = achievementIcons[i % achievementIcons.length]
              const imageUrl = typeof item.image === 'object' ? (item.image as Media).url : ''

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-3xl border bg-card hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={imageUrl || ''}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <div className="w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
