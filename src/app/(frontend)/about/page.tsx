import Image from 'next/image'
import * as motion from 'framer-motion/client'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import { Media } from '@/payload/payload-types'

export default async function AboutPage() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({
    slug: 'about-page',
  })

  const { hero, leadership, establishedYear } = data

  return (
    <section className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6"
          >
            {hero?.badge || 'About Our Institution'}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {hero?.title || 'Welcome to Florescent'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            {hero?.description}
          </motion.p>
        </div>

        <div className="relative mt-20">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
        <div className="relative flex justify-center">
          <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
            <span className="text-base font-medium flex items-center gap-2">
              <span className="text-primary">✦</span>
              Guiding Florescent Since {establishedYear || '1995'}
              <span className="text-primary">✦</span>
            </span>
          </div>
        </div>
      </div>

      </section>

      {/* LEADERSHIP – FULL WIDTH HORIZONTAL */}
      <section className="space-y-12 px-4 md:px-8 lg:px-16">
        {leadership?.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="w-full bg-background border border-border/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center hover:shadow-2xl transition-all"
          >
            {/* IMAGE */}
            <div className="flex-shrink-0">
              <div
                className={`relative w-48 h-48 rounded-full overflow-hidden border-4 bg-gradient-to-br ${leader.gradient}`}
              >
                {leader.image && typeof leader.image !== 'string' && (
                  <Image
                    src={(leader.image as Media).url || ''}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 h-full">
              <div className="mb-4">
                <h3 className="text-3xl font-bold">{leader.name}</h3>
                <p className="text-primary font-semibold">{leader.role}</p>
              </div>

              <p className="text-muted-foreground italic text-lg leading-relaxed mb-6 flex-grow">
                “{leader.message}”
              </p>

              <div className="pt-6 border-t border-border/50">
                <p className="text-sm font-semibold mb-4">Key Achievements</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {leader.achievements?.map((ach, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-muted-foreground">{ach.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* DIVIDER */}
      
      {/* CORE VALUES – unchanged */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="md:col-span-2 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground text-lg">
                Highest standards in academics and growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Honesty, ethics, and responsibility in every action.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">Embracing modern approaches to education.</p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground text-lg">
                Fostering respect, collaboration, and belonging.
              </p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Character Building</h3>
              <p className="text-muted-foreground text-lg">
                Developing responsible, empathetic, and confident individuals.
              </p>
            </div>
            {/* ... Other grid items ... */}
          </div>
        </div>
      </section>
    </section>
  )
}
