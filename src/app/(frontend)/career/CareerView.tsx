'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { Job, CareerPage as CareerData } from '@/payload/payload-types'

export default function CareerView({ staticData, jobs }: { staticData: CareerData; jobs: Job[] }) {
  const [filter, setFilter] = useState('all')

  const filteredJobs = filter === 'all' ? jobs : jobs.filter((job) => job.department === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-20 ">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        
        <div className="text-center container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {staticData.hero?.title}
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {staticData.hero?.description}
          </p>
        </div>
      </section>

      <div className="relative md:mt-20 mb-30">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
        <div className="relative flex justify-center">
          <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
            <span className="text-base font-medium text-foreground flex items-center gap-2">
              <span className="text-primary">✦</span>
              Building Careers With Purpose
              <span className="text-primary">✦</span>
            </span>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staticData.benefits?.map((benefit, i) => {
              const Icon = (LucideIcons as any)[benefit.iconName || 'Heart'] || LucideIcons.Heart
              return (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <div className="flex gap-2">
              {['all', 'academic', 'admin'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                    filter === cat ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  layout
                  key={job.id}
                  className="p-8 rounded-3xl border border-border bg-card hover:shadow-xl transition-all group"
                >
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase">
                          {job.department}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <LucideIcons.MapPin className="w-4 h-4" /> {job.location}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                    </div>
                    
                  </div>

                  <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-4">
                    {job.requirements?.map((req, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <LucideIcons.CheckCircle2 className="w-4 h-4 text-secondary" />
                        {req.point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed border-border">
                <LucideIcons.Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-xl font-medium text-muted-foreground">
                  No open positions found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
