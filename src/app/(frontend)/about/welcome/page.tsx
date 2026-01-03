// "use client"

// import { motion } from "framer-motion"
// import { useEffect } from "react"

// export default function AboutPage() {
//   // Static data for the page
//   const school = {
//     founding_year: 1995,
//     description: 'Florescent Public School stands as a beacon of academic excellence and holistic development in our community. For over two decades, we have been committed to providing an educational experience that transcends conventional learning.',
//     philosophy: 'Our philosophy centers on creating a nurturing environment where every student discovers their potential, cultivates curiosity, and develops essential skills to thrive in an evolving world.',
//     vision: 'To be a premier educational institution that transforms young minds into visionary leaders, innovative thinkers, and compassionate global citizens.',
//     mission: 'To provide a dynamic learning environment that nurtures intellectual curiosity, fosters creativity, and instills strong ethical values.',
//     core_values: [
//       "Innovative Teaching Methodologies",
//       "Holistic Student Development",
//       "Community Engagement and Service",
//       "Excellence in Education",
//       "Character Building"
//     ]
//   }

//   const coreValues = [
//     {
//       id: 1,
//       title: "Excellence",
//       description: "Striving for the highest standards in academics, character, and overall development through continuous improvement and dedication.",
//       icon: "⭐",
//       color: "from-amber-500 to-yellow-500"
//     },
//     {
//       id: 2,
//       title: "Integrity",
//       description: "Upholding honesty, ethics, and moral principles in all our actions and decisions, building trust within our community.",
//       icon: "⚖️",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       id: 3,
//       title: "Innovation",
//       description: "Embracing creativity and cutting-edge approaches to education that prepare students for the challenges of tomorrow.",
//       icon: "💡",
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       id: 4,
//       title: "Community",
//       description: "Fostering collaboration, respect, and a sense of belonging among students, staff, parents, and the wider community.",
//       icon: "🤝",
//       color: "from-green-500 to-emerald-500"
//     }
//   ]

//   const statistics = [
//     {
//       id: 1,
//       icon: "📅",
//       number: "25+",
//       label: "Years of Excellence"
//     },
//     {
//       id: 2,
//       icon: "🎓",
//       number: "5,000+",
//       label: "Alumni Network"
//     },
//     {
//       id: 3,
//       icon: "👩‍🏫",
//       number: "200+",
//       label: "Dedicated Faculty"
//     },
//     {
//       id: 4,
//       icon: "🏆",
//       number: "50+",
//       label: "National Awards"
//     }
//   ]

//   useEffect(() => {
//     const navbar = document.querySelector('header')
//     if (navbar) {
//       navbar.classList.add('text-foreground')
//       navbar.classList.remove('text-white')
//     }
    
//     return () => {
//       if (navbar) {
//         navbar.classList.remove('text-foreground')
//       }
//     }
//   }, [])

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5"></div>
        
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//           className="absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//           className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 bg-secondary/10 rounded-full blur-3xl"
//         />

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
//               About Our Institution
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Welcome to <span className="text-primary">Florescent</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//               Where excellence meets innovation in education. A legacy of nurturing future leaders since our inception.
//             </p>
//             <div className="w-24 h-1 bg-primary mx-auto"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Introduction Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="order-2 lg:order-1"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
//                 Shaping <span className="text-primary">Future Leaders</span> Since {school.founding_year}
//               </h2>
//               <div className="space-y-4">
//                 <p className="text-muted-foreground text-lg leading-relaxed">
//                   {school.description}
//                 </p>
//                 <p className="text-muted-foreground text-lg leading-relaxed">
//                   {school.philosophy}
//                 </p>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="order-1 lg:order-2 relative"
//             >
//               <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="aspect-[4/3] bg-gradient-to-br from-card to-muted relative">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center p-8">
//                       <div className="text-6xl md:text-7xl mb-4">🏫</div>
//                       <p className="text-muted-foreground">Florescent Campus</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-xl"></div>
//                 <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-full blur-xl"></div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission Section */}
//       <section className="py-16 md:py-24 bg-card/50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Our Guiding <span className="text-primary">Principles</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//               The foundation upon which we build excellence in education
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Vision Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="group"
//             >
//               <div className="h-full bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
//                 <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl mb-6">
//                   <span className="text-2xl md:text-3xl">👁️</span>
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
//                   Our Vision
//                 </h3>
//                 <div className="space-y-4">
//                   <p className="text-muted-foreground leading-relaxed">
//                     {school.vision}
//                   </p>
//                   <div className="bg-primary/5 p-4 md:p-6 rounded-xl border-l-4 border-primary">
//                     <h4 className="font-bold text-primary mb-2 text-sm md:text-base">Core Aspirations</h4>
//                     <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
//                       {school.core_values.slice(0, 3).map((value, index) => (
//                         <li key={index} className="flex items-start">
//                           <span className="text-primary mr-2">•</span>
//                           {value}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Mission Card */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="group"
//             >
//               <div className="h-full bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
//                 <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-xl mb-6">
//                   <span className="text-2xl md:text-3xl">🎯</span>
//                 </div>
//                 <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
//                   Our Mission
//                 </h3>
//                 <div className="space-y-4">
//                   <p className="text-muted-foreground leading-relaxed">
//                     {school.mission}
//                   </p>
//                   <div className="bg-secondary/5 p-4 md:p-6 rounded-xl border-l-4 border-secondary">
//                     <h4 className="font-bold text-secondary mb-2 text-sm md:text-base">Key Commitments</h4>
//                     <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
//                       <li className="flex items-start">
//                         <span className="text-secondary mr-2">•</span>
//                         Academic excellence through innovative curriculum
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-secondary mr-2">•</span>
//                         Character building and value-based education
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-secondary mr-2">•</span>
//                         Inclusive community that celebrates diversity
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-secondary mr-2">•</span>
//                         Partnership with parents and community
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Our <span className="text-chart-1">Core Values</span>
//             </h2>
//             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//               The fundamental principles that guide every aspect of our educational philosophy
//             </p>
//           </motion.div>

//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//               {coreValues.map((value, index) => (
//                 <motion.div
//                   key={value.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="group"
//                 >
//                   <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
//                     <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
//                     <div className="relative mb-6">
//                       <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 group-hover:shadow-lg transition-all duration-300">
//                         <span className="text-3xl">{value.icon}</span>
//                       </div>
//                       <div className={`absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r ${value.color} rounded-full`}></div>
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
//                     <p className="text-gray-600 leading-relaxed">{value.description}</p>
//                     <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <div className="flex items-center text-sm font-medium text-gray-500">
//                         <span className="mr-2">Our Commitment</span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto"
//           >
//             <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
//               <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
//                 Shared <span className="text-primary">Educational Philosophy</span>
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <h4 className="font-bold text-foreground mb-4">Our Core Beliefs</h4>
//                   <ul className="space-y-3">
//                     {school.core_values.map((belief, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="text-primary mr-3 mt-1">•</span>
//                         <span className="text-muted-foreground">{belief}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div>
//                   <h4 className="font-bold text-foreground mb-4">Our Commitments</h4>
//                   <ul className="space-y-3">
//                     {[
//                       "Safe and inclusive learning environment",
//                       "Innovative teaching methodologies",
//                       "Holistic student development",
//                       "Continuous teacher training",
//                       "Community engagement and service"
//                     ].map((commitment, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="text-secondary mr-3 mt-1">•</span>
//                         <span className="text-muted-foreground">{commitment}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       {/* <section className="py-16 bg-card/30">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {statistics.map((stat, index) => (
//               <motion.div
//                 key={stat.id}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-background rounded-xl shadow-sm mb-4">
//                   <span className="text-xl md:text-2xl">{stat.icon}</span>
//                 </div>
//                 <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
//                 <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Call to Action */}
//       {/* <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
//               <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
//                 Become Part of Our Legacy
//               </h3>
//               <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//                 Join the Florescent family and experience an education that shapes character, builds competence, and prepares leaders for tomorrow.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
//                   Schedule a Visit
//                 </button>
//                 <button className="px-8 py-3 bg-background text-foreground border border-border rounded-lg font-semibold hover:bg-card transition-colors">
//                   Download Brochure
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section> */}
//     </div>
//   )
// }

import { motion } from "framer-motion"
import { payloadClient } from "@/app/(frontend)/lib/payload-client"

export default async function WelcomePage() {
  // Fetch about page data from Payload CMS
  const pageData = await payloadClient().getAboutPage()
  // If no data found, use default structure  
  const heroSection = pageData?.heroSection || {
    badgeText: 'About Our Institution',
    title: 'Welcome to Florescent',
    highlightedWord: 'Florescent',
    description: 'Where excellence meets innovation in education. A legacy of nurturing future leaders since our inception.'
  }

  const introduction = pageData?.introduction || {
    title: 'Shaping Future Leaders Since',
    foundingYear: 1995,
    description: 'Florescent Public School stands as a beacon of academic excellence and holistic development in our community. For over two decades, we have been committed to providing an educational experience that transcends conventional learning.',
    philosophy: 'Our philosophy centers on creating a nurturing environment where every student discovers their potential, cultivates curiosity, and develops essential skills to thrive in an evolving world.'
  }

  const visionMission = pageData?.visionMission || {
    sectionTitle: 'Our Guiding Principles',
    sectionSubtitle: 'The foundation upon which we build excellence in education',
    vision: 'To be a premier educational institution that transforms young minds into visionary leaders, innovative thinkers, and compassionate global citizens.',
    mission: 'To provide a dynamic learning environment that nurtures intellectual curiosity, fosters creativity, and instills strong ethical values.',
    coreValues: [
      { value: 'Innovative Teaching Methodologies' },
      { value: 'Holistic Student Development' },
      { value: 'Community Engagement and Service' },
      { value: 'Excellence in Education' },
      { value: 'Character Building' }
    ]
  }

  const coreValuesSection = pageData?.coreValuesSection || {
    title: 'Our Core Values',
    subtitle: 'The fundamental principles that guide every aspect of our educational philosophy',
    values: [
      {
        title: 'Excellence',
        description: 'Striving for the highest standards in academics, character, and overall development through continuous improvement and dedication.',
        icon: '⭐',
        color: 'from-amber-500 to-yellow-500'
      },
      {
        title: 'Integrity',
        description: 'Upholding honesty, ethics, and moral principles in all our actions and decisions, building trust within our community.',
        icon: '⚖️',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        title: 'Innovation',
        description: 'Embracing creativity and cutting-edge approaches to education that prepare students for the challenges of tomorrow.',
        icon: '💡',
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'Community',
        description: 'Fostering collaboration, respect, and a sense of belonging among students, staff, parents, and the wider community.',
        icon: '🤝',
        color: 'from-green-500 to-emerald-500'
      }
    ]
  }

  const educationalPhilosophy = pageData?.educationalPhilosophy || {
    title: 'Shared Educational Philosophy',
    coreBeliefs: [
      { belief: 'Innovative Teaching Methodologies' },
      { belief: 'Holistic Student Development' },
      { belief: 'Community Engagement and Service' },
      { belief: 'Excellence in Education' },
      { belief: 'Character Building' }
    ],
    commitments: [
      { commitment: 'Safe and inclusive learning environment' },
      { commitment: 'Innovative teaching methodologies' },
      { commitment: 'Holistic student development' },
      { commitment: 'Continuous teacher training' },
      { commitment: 'Community engagement and service' }
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5"></div>
        
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 bg-secondary/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              {heroSection.badgeText}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">{heroSection.highlightedWord}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {heroSection.description}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {introduction.title} <span className="text-primary">{introduction.foundingYear}</span>
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {introduction.description}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {introduction.philosophy}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-card to-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl md:text-7xl mb-4">🏫</div>
                      <p className="text-muted-foreground">Florescent Campus</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {visionMission.sectionTitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {visionMission.sectionSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="h-full bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl mb-6">
                  <span className="text-2xl md:text-3xl">👁️</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {visionMission.vision}
                  </p>
                  <div className="bg-primary/5 p-4 md:p-6 rounded-xl border-l-4 border-primary">
                    <h4 className="font-bold text-primary mb-2 text-sm md:text-base">Core Aspirations</h4>
                    <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                      {visionMission.coreValues?.slice(0, 3).map((item: any, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="h-full bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-secondary/10 rounded-xl mb-6">
                  <span className="text-2xl md:text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {visionMission.mission}
                  </p>
                  <div className="bg-secondary/5 p-4 md:p-6 rounded-xl border-l-4 border-secondary">
                    <h4 className="font-bold text-secondary mb-2 text-sm md:text-base">Key Commitments</h4>
                    <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Academic excellence through innovative curriculum
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Character building and value-based education
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Inclusive community that celebrates diversity
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Partnership with parents and community
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {coreValuesSection.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {coreValuesSection.subtitle}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {coreValuesSection.values?.map((value: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <div className="relative mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 group-hover:shadow-lg transition-all duration-300">
                        <span className="text-3xl">{value.icon}</span>
                      </div>
                      <div className={`absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r ${value.color} rounded-full`}></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-sm font-medium text-gray-500">
                        <span className="mr-2">Our Commitment</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                {educationalPhilosophy.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4">Our Core Beliefs</h4>
                  <ul className="space-y-3">
                    {educationalPhilosophy.coreBeliefs?.map((belief: any, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span className="text-muted-foreground">{belief.belief}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-4">Our Commitments</h4>
                  <ul className="space-y-3">
                    {educationalPhilosophy.commitments?.map((commitment: any, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span className="text-muted-foreground">{commitment.commitment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}