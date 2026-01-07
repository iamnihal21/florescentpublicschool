'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { Job, CareerPage as CareerData } from '@/payload/payload-types'

/* ------------------ Motion Variants ------------------ */

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 24 },
}

/* ------------------ Component ------------------ */

export default function CareerView({
  staticData,
  jobs,
}: {
  staticData: CareerData
  jobs: Job[]
}) {
  const [filter, setFilter] = useState<'all' | 'academic' | 'admin'>('all')

  const filteredJobs =
    filter === 'all' ? jobs : jobs.filter((job) => job.department === filter)

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-16 sm:pt-20"
    >
      {/* ---------------- Hero ---------------- */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="py-16 sm:py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            {staticData.hero?.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {staticData.hero?.description}
          </p>
        </div>
      </motion.section>

      {/* ---------------- Divider ---------------- */}
      <div className="relative my-16">
        <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="relative flex justify-center">
          <div className="bg-background px-6 py-2 border rounded-full shadow-sm">
            <span className="text-sm sm:text-base font-medium flex items-center gap-2">
              ✦ Building Careers With Purpose ✦
            </span>
          </div>
        </div>
      </div>

      {/* ---------------- Benefits ---------------- */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticData.benefits?.map((benefit, i) => {
            const Icon =
              (LucideIcons as any)[benefit.iconName || 'Heart'] ||
              LucideIcons.Heart

            return (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-card border"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.section>

      {/* ---------------- Jobs ---------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Open Positions</h2>

            <div className="flex flex-wrap gap-2">
              {['all', 'academic', 'admin'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition ${
                    filter === cat
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-muted/70'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            layout
            className="space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="p-6 sm:p-8 rounded-3xl border bg-card hover:shadow-xl transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase">
                            {job.department}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <LucideIcons.MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold">
                          {job.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {job.requirements?.map((req, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <LucideIcons.CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                          {req.point}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed"
                >
                  <LucideIcons.Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium text-muted-foreground">
                    No open positions found.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}