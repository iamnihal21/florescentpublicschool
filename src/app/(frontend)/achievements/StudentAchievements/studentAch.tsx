// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { Media } from '@/payload/payload-types'
// import { Award, Trophy, Star, Target, Zap, TrendingUp } from 'lucide-react'

// interface StudentAchievement {
//   id?: string | null
//   name: string
//   achievementTitle: string
//   description: string
//   image: string | Media
// }

// export default function StudentView({ students }: { students: StudentAchievement[] }) {
//   const achievementIcons = [Trophy, Star, Target, Zap, TrendingUp]

//   return (
//     <section className="py-24 bg-gradient-to-b from-background via-background/95 to-primary/5 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-[150px]" />
//         <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-accent/5 to-secondary/5 blur-[150px]" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/3 via-transparent to-accent/3 blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center max-w-4xl mx-auto mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 border border-primary/20 text-primary font-bold mb-6 text-sm"
//           >
//             <Star className="w-4 h-4 fill-primary animate-pulse" />
//             <span className="tracking-[0.2em]">EXCELLENCE REDEFINED</span>
//             <Star className="w-4 h-4 fill-primary animate-pulse" />
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
//           >
//             Our <span className="text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">Star</span> Performers
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
//           >
//             Celebrating exceptional achievements across academics, sports, and arts
//           </motion.p>
//         </motion.div>

//         {/* Student Cards Grid - Responsive Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
//           {students?.map((student, index) => {
//             const Icon = achievementIcons[index % achievementIcons.length]

//             return (
//               <motion.div
//                 key={student.id || index}
//                 initial={{ opacity: 0, y: 40, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.1,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 className="group relative h-full"
//               >
//                 <div className="relative h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">

//                   {/* SECTION 1: IMAGE - Full Width Hero Image */}
//                   <div className="relative w-full h-56 md:h-64 overflow-hidden">
//                     <Image
//                       src={(student.image as Media)?.url || ''}
//                       alt={student.name}
//                       fill
//                       className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                     />

//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

//                     {/* Achievement Icon Badge */}
//                     <div className="absolute top-4 right-4 z-20">
//                       <div className="relative">
//                         <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
//                           <Icon className="w-6 h-6 text-primary" />
//                         </div>
//                         <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* SECTION 2: SHORT ACHIEVEMENT - Prominently Displayed */}
//                   <div className="p-6 pb-0">
//                     <div className="flex flex-col items-start gap-3 mb-4">
//                       <div className="w-full">
//                         <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
//                           {student.name}
//                         </h3>
//                         <div className="flex items-center gap-2 mt-2">
//                           <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
//                           <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
//                             Achievement
//                           </span>
//                         </div>
//                       </div>

//                       <div className="w-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
//                         <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">
//                           {student.achievementTitle}
//                         </h4>
//                         <div className="flex items-center gap-2">
//                           <Award className="w-4 h-4 text-primary flex-shrink-0" />
//                           <span className="text-sm text-muted-foreground">Outstanding Performance</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* SECTION 3: DETAILED ACHIEVEMENT - With Read More */}
//                   <div className="p-6 pt-4">
//                     <div className="relative">
//                       {/* Decorative Quote Marks */}
//                       <div className="absolute -top-4 -left-2 text-4xl text-primary/10 font-serif">"</div>

//                       {/* Description with Gradient Mask */}
//                       <div className="relative max-h-32 overflow-hidden">
//                         <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent z-10" />
//                         <p className="text-muted-foreground leading-relaxed text-base pr-4">
//                           {student.description}
//                         </p>
//                       </div>

//                       {/* "Read More" Indicator */}

//                     </div>

//                     {/* Achievement Stats Footer */}
//                     <div className="flex items-center justify-between pt-6 mt-6 border-t border-border/50">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
//                           <span className="text-xs font-bold text-primary">#{index + 1}</span>
//                         </div>
//                         <div>
//                           <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Rank</div>
//                           <div className="text-sm font-semibold text-foreground">Top Performer</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hover Effects */}
//                   <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>

//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Media } from '@/payload/payload-types'
import { Award, Trophy, Star, Target, Zap, TrendingUp } from 'lucide-react'

interface StudentAchievement {
  id?: string | null
  name: string
  achievementTitle: string
  description: string
  image: string | Media
}

export default function StudentView({ students }: { students: StudentAchievement[] }) {
  const achievementIcons = [Trophy, Star, Target, Zap, TrendingUp]

  return (
    <div className="relative from-background via-background to-primary/5">
      {/* ================= HEADER SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-[160px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 border border-primary/20 text-primary font-bold mb-6 text-sm"
            >
              <span className="tracking-[0.1em]">Excellence Redefined</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
            >
              Our{' '}
              <span className="text-primary">
                Star
              </span>{' '}
              Performers
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Celebrating exceptional achievements across academics, sports, and arts
            </motion.p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative md:mt-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Guiding Florescent Since
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="relative bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {students?.map((student, index) => {
              const Icon = achievementIcons[index % achievementIcons.length]

              return (
                <motion.div
                  key={student.id || index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="group relative h-full"
                >
                  <div className="relative h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative w-full h-56 md:h-64 overflow-hidden">
                      <Image
                        src={(student.image as Media)?.url || ''}
                        alt={student.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                      <div className="absolute top-4 right-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{student.name}</h3>

                      <div className="mb-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                        <h4 className="text-lg font-bold mb-1">{student.achievementTitle}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 text-primary" />
                          Outstanding Performance
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed line-clamp-4">
                        {student.description}
                      </p>

                      <div className="flex items-center gap-3 pt-6 mt-6 border-t border-border/50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">#{index + 1}</span>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Rank
                          </div>
                          <div className="text-sm font-semibold">Top Performer</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />
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
