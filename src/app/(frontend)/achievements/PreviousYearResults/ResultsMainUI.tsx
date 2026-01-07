'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Award, Trophy } from 'lucide-react'
import { AchievementsPage, Media } from '@/payload/payload-types'
import Image from 'next/image'

type ResultsData = AchievementsPage['resultsSection']

const statColors = [
  'from-primary/20 to-primary/10',
  'from-secondary/20 to-secondary/10',
  'from-accent/20 to-accent/10',
  'from-orange-500/20 to-orange-500/10',
]

export default function ResultsView({ data }: { data: ResultsData }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const results = data?.results || []

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % results.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)

  if (!results || results.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-bold">No results available</h3>
        </div>
      </div>
    )
  }

  const currentResult = results[currentIndex]
  const imageData = currentResult?.image as Media

  // Calculations for Performance Section

  return (
    <div className="min-h-screen from-background via-background to-primary/5">
      {/* REDESIGNED HERO SECTION */}
      <section className="relative overflow-hidden md:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-[150px]"></div>
          <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
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
                {data?.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                {data?.description}
              </motion.p>
            </div>

            {/* DYNAMIC STATS FROM DB */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
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
            <div className="relative md:mt-20">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
              <div className="relative flex justify-center">
                <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
                  <span className="text-base font-medium text-foreground flex items-center gap-2">
                    <span className="text-primary">✦</span>
                    Proven Results Over the Years
                    <span className="text-primary">✦</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT */}
      <div className="container mx-auto px-4 relative z-10 md:mt-10">
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

      {/* GALLERY & DATA SECTION */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Image Slider */}
          <div className="relative rounded-3xl overflow-hidden bg-muted aspect-[16/9] mb-8 shadow-2xl">
            {imageData?.url && (
              <Image
                src={imageData.url}
                alt="IMAGE"
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {results.length > 1 && (
              <div className="absolute right-8 bottom-8 flex gap-2">
                <button
                  onClick={prevImage}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-primary text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-primary text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
