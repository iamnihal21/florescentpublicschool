// "use client"

// import { motion, useInView } from "framer-motion"
// import { useState, useEffect, useRef } from "react"
// import { Bus, Home, BookOpen, Trophy, Users, Briefcase, CheckCircle, Award, Shield, Heart } from "lucide-react"

// const CountingNumber = ({ value, duration = 2, prefix = "", suffix = "" }) => {
//   const [count, setCount] = useState(0)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.3 })

//   useEffect(() => {
//     if (isInView) {
//       let start = 0
//       const end = parseInt(value.replace(/[^\d]/g, ''))
//       const increment = end / (duration * 60) // 60fps
      
//       const timer = setInterval(() => {
//         start += increment
//         if (start >= end) {
//           setCount(end)
//           clearInterval(timer)
//         } else {
//           setCount(Math.floor(start))
//         }
//       }, 1000 / 60)

//       return () => clearInterval(timer)
//     }
//   }, [isInView, value, duration])

//   const formatNumber = (num) => {
//     if (value.includes('K+')) return `${num.toLocaleString()}+`
//     if (value.includes('%')) return `${num}%`
//     return `${num.toLocaleString()}+`
//   }

//   return (
//     <div ref={ref} className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
//       {prefix}{formatNumber(count)}{suffix}
//     </div>
//   )
// }

// export default function WhyChooseUsPage() {
//   const [activeSection, setActiveSection] = useState("transport")

//   const sections = [
//     {
//       id: "transport",
//       title: "Transport Facilities",
//       icon: <Bus className="w-6 h-6" />,
//       color: "from-blue-500/20 to-blue-600/20",
//       content: {
//         description: "Safe, reliable, and comfortable transportation for students across the city",
//         features: [
//           "GPS-enabled buses with live tracking",
//           "Female attendants on all buses",
//           "Regular vehicle maintenance and safety checks",
//           "Designated pick-up/drop points across major areas",
//           "Emergency medical kits and communication systems",
//           "Trained and verified drivers with 5+ years experience"
//         ],
//         highlights: [
//           "100% accident-free record",
//           "Real-time parent notifications",
//           "Air-conditioned buses available",
//           "Separate buses for different age groups"
//         ]
//       }
//     },
//     {
//       id: "hostel",
//       title: "Hostel Facilities",
//       icon: <Home className="w-6 h-6" />,
//       color: "from-green-500/20 to-green-600/20",
//       content: {
//         description: "Home away from home with modern amenities and caring supervision",
//         features: [
//           "Separate hostel blocks for boys and girls",
//           "24/7 security with CCTV surveillance",
//           "Nutritious and hygienic mess facilities",
//           "Common study rooms with high-speed internet",
//           "Regular medical check-ups and doctor on call",
//           "Recreational facilities and indoor games"
//         ],
//         highlights: [
//           "Parent visiting lounge",
//           "Laundry and housekeeping services",
//           "Weekly cultural and recreational activities",
//           "Dedicated wardens and counselors"
//         ]
//       }
//     },
//     {
//       id: "library",
//       title: "Library & Learning Resources",
//       icon: <BookOpen className="w-6 h-6" />,
//       color: "from-purple-500/20 to-purple-600/20",
//       content: {
//         description: "State-of-the-art digital and physical learning resources",
//         features: [
//           "30,000+ books including rare collections",
//           "Digital library with 10,000+ e-books and journals",
//           "Quiet study zones and group discussion rooms",
//           "Computerized cataloging and borrowing system",
//           "Regular author visits and reading programs",
//           "Research assistance and reference services"
//         ],
//         highlights: [
//           "International journal subscriptions",
//           "Audio-visual learning resources",
//           "Newspaper and magazine section",
//           "Career guidance corner"
//         ]
//       }
//     },
//     {
//       id: "sports",
//       title: "Sports & Athletics",
//       icon: <Trophy className="w-6 h-6" />,
//       color: "from-red-500/20 to-red-600/20",
//       content: {
//         description: "World-class sports infrastructure and training programs",
//         features: [
//           "Olympic-size swimming pool",
//           "Indoor sports complex with basketball, badminton courts",
//           "Football and cricket grounds with floodlights",
//           "Gymnasium with modern equipment",
//           "Table tennis, chess, and carrom facilities",
//           "Yoga and meditation center"
//         ],
//         highlights: [
//           "National-level coaches",
//           "Annual inter-school sports meet",
//           "Sports scholarships for talented students",
//           "Sports medicine and physiotherapy"
//         ]
//       }
//     },
//     {
//       id: "alumni",
//       title: "Alumni Network",
//       icon: <Users className="w-6 h-6" />,
//       color: "from-orange-500/20 to-orange-600/20",
//       content: {
//         description: "Strong global network of successful alumni",
//         features: [
//           "15,000+ alumni across 40+ countries",
//           "Regular alumni meets and networking events",
//           "Mentorship programs for current students",
//           "Alumni scholarship funds",
//           "Career guidance and placement assistance",
//           "Annual alumni newsletter and directory"
//         ],
//         highlights: [
//           "Alumni success stories featured regularly",
//           "Industry connections and internships",
//           "Research collaborations",
//           "Entrepreneurship support"
//         ]
//       }
//     },
//     {
//       id: "careers",
//       title: "Career Development",
//       icon: <Briefcase className="w-6 h-6" />,
//       color: "from-indigo-500/20 to-indigo-600/20",
//       content: {
//         description: "Comprehensive career guidance and placement support",
//         features: [
//           "Career counseling from Grade 9 onwards",
//           "Psychometric testing and aptitude analysis",
//           "University and college application guidance",
//           "Resume building and interview preparation",
//           "Industry visits and corporate internships",
//           "Skill development workshops"
//         ],
//         highlights: [
//           "100+ university tie-ups worldwide",
//           "95% placement record for graduates",
//           "Entrepreneurship incubation center",
//           "Alumni-led mentorship programs"
//         ]
//       }
//     }
//   ]

//   const overallHighlights = [
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Academic Excellence",
//       description: "Consistently 95%+ board results for 15 years"
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Safe Environment",
//       description: "24/7 security with CCTV and emergency response"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: "Holistic Development",
//       description: "60+ clubs and activities for all-round growth"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Expert Faculty",
//       description: "200+ teachers with average 15+ years experience"
//     }
//   ]

//   const statistics = [
//     { number: "100+", label: "Buses & Vehicles", icon: "🚌", duration: 1.5 },
//     { number: "500+", label: "Hostel Students", icon: "🏠", duration: 2 },
//     { number: "30K+", label: "Library Books", icon: "📚", duration: 2.5 },
//     { number: "50+", label: "Sports Coaches", icon: "🏅", duration: 1.2 },
//     { number: "15K+", label: "Alumni Network", icon: "👥", duration: 3 },
//     { number: "95%", label: "Placement Rate", icon: "💼", duration: 2 },
//     { number: "60+", label: "Clubs & Activities", icon: "🎭", duration: 1.5 },
//     { number: "25+", label: "Years Excellence", icon: "⭐", duration: 2 }
//   ]

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5"></div>
        
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
//           className="absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"
//         />

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
//               Our Advantages
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Why Choose <span className="text-secondary">Florescent?</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//               Discover what sets us apart - state-of-the-art facilities, comprehensive support systems, 
//               and a legacy of excellence in education.
//             </p>
//             <div className="w-24 h-1 bg-secondary mx-auto"></div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Overall Highlights */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Our <span className="text-secondary">Key Advantages</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//               Comprehensive facilities and support systems that make Florescent the preferred choice
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {overallHighlights.map((highlight, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group"
//               >
//                 <div className="h-full bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                   <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 text-secondary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                     {highlight.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
//                   <p className="text-muted-foreground">{highlight.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Facilities Navigation */}
//       <section className="py-16 md:py-24 bg-card/30">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Comprehensive <span className="text-secondary">Facilities</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//               Explore our state-of-the-art facilities that support academic excellence and holistic development
//             </p>
//           </motion.div>

//           {/* Navigation Tabs - Desktop */}
//           <div className="hidden md:flex justify-center mb-12">
//             <div className="inline-flex flex-wrap justify-center gap-2 bg-card rounded-xl p-2 border border-border">
//               {sections.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => setActiveSection(section.id)}
//                   className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
//                     activeSection === section.id 
//                       ? 'bg-secondary text-secondary-foreground shadow' 
//                       : 'hover:bg-muted'
//                   }`}
//                 >
//                   {section.icon}
//                   {section.title}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Dropdown - Mobile */}
//           <div className="md:hidden mb-8">
//             <select
//               value={activeSection}
//               onChange={(e) => setActiveSection(e.target.value)}
//               className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
//             >
//               {sections.map((section) => (
//                 <option key={section.id} value={section.id}>
//                   {section.title}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Active Section Content */}
//           <div className="max-w-6xl mx-auto">
//             {sections.map((section) => (
//               <motion.div
//                 key={section.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className={`${activeSection === section.id ? 'block' : 'hidden'}`}
//               >
//                 <div className="bg-card rounded-2xl overflow-hidden border border-border">
//                   <div className={`bg-gradient-to-r ${section.color} p-6 md:p-8`}>
//                     <div className="flex items-center gap-4">
//                       <div className="w-16 h-16 bg-background/80 rounded-xl flex items-center justify-center">
//                         {section.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-2xl md:text-3xl font-bold text-foreground">{section.title}</h3>
//                         <p className="text-muted-foreground mt-2">{section.content.description}</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="p-6 md:p-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                       {/* Features */}
//                       <div>
//                         <h4 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
//                           Key Features
//                         </h4>
//                         <ul className="space-y-4">
//                           {section.content.features.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
//                               <span className="text-muted-foreground">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
                      
//                       {/* Highlights */}
//                       <div>
//                         <h4 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
//                           Special Highlights
//                         </h4>
//                         <div className="space-y-4">
//                           {section.content.highlights.map((highlight, index) => (
//                             <div key={index} className="bg-background/50 rounded-lg p-4 border border-border">
//                               <div className="flex items-start">
//                                 <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
//                                   {index + 1}
//                                 </div>
//                                 <span className="text-foreground">{highlight}</span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics Section with Counting Animation */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             {statistics.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-background rounded-xl shadow-sm mb-4">
//                   <span className="text-xl md:text-2xl">{stat.icon}</span>
//                 </div>
//                 <CountingNumber 
//                   value={stat.number} 
//                   duration={stat.duration}
//                 />
//                 <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 md:py-24 bg-card/30">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               What Parents & Students <span className="text-secondary">Say</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//               Hear from our community about their experience with Florescent facilities
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 quote: "The transport system gives me peace of mind. Real-time tracking and professional staff make it so convenient.",
//                 name: "Mrs. Sharma",
//                 role: "Parent of Grade 5 student",
//                 aspect: "Transport"
//               },
//               {
//                 quote: "Library resources are exceptional. My research project was successful thanks to the extensive digital collection.",
//                 name: "Rohan Patel",
//                 role: "Grade 12 Student",
//                 aspect: "Library"
//               },
//               {
//                 quote: "Sports facilities helped my daughter win national level competitions. The coaching is world-class.",
//                 name: "Mr. Verma",
//                 role: "Parent of National Athlete",
//                 aspect: "Sports"
//               }
//             ].map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-background rounded-2xl p-6 border border-border"
//               >
//                 <div className="text-4xl text-secondary/20 mb-4">"</div>
//                 <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
//                 <div className="pt-4 border-t border-border">
//                   <div className="font-bold text-foreground">{testimonial.name}</div>
//                   <div className="text-sm text-muted-foreground">{testimonial.role}</div>
//                   <div className="mt-2">
//                     <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
//                       {testimonial.aspect}
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparative Advantage */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12"
//             >
//               <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
//                 The <span className="text-secondary">Florescent Difference</span>
//               </h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <h4 className="font-bold text-foreground mb-4">Traditional Schools</h4>
//                   <ul className="space-y-3">
//                     {[
//                       "Limited infrastructure",
//                       "Basic transportation",
//                       "Minimal career guidance",
//                       "Standard library",
//                       "Basic sports facilities",
//                       "Limited alumni network"
//                     ].map((item, index) => (
//                       <li key={index} className="flex items-start text-muted-foreground">
//                         <span className="text-destructive mr-3 mt-1">✗</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div>
//                   <h4 className="font-bold text-foreground mb-4">Florescent Public School</h4>
//                   <ul className="space-y-3">
//                     {[
//                       "State-of-the-art facilities",
//                       "GPS-enabled safe transport",
//                       "Comprehensive career development",
//                       "Digital + physical library",
//                       "Olympic-standard sports complex",
//                       "Global alumni network"
//                     ].map((item, index) => (
//                       <li key={index} className="flex items-start text-muted-foreground">
//                         <span className="text-secondary mr-3 mt-1">✓</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-16 md:py-24 bg-gradient-to-r from-secondary/10 to-accent/10">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
//               Experience the Florescent Advantage
//             </h2>
//             <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//               Schedule a campus tour to see our facilities firsthand and discover 
//               how we can support your child's educational journey.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
//                 Schedule Campus Visit
//               </button>
//               <button className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all duration-300">
//                 Speak with Admissions
//               </button>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-border/50">
//               <p className="text-sm text-muted-foreground">
//                 Still have questions? Call our admissions helpline at 
//                 <span className="text-secondary font-medium ml-1">+91-9876543210</span> 
//                 or email <span className="text-secondary font-medium">visit@florescent.edu.in</span>
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

"use client"

import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Bus, Home, BookOpen, Trophy, Users, Briefcase, CheckCircle, Award, Shield, Heart } from "lucide-react"

interface CountingNumberProps {
  value: string
  duration?: number
  prefix?: string
  suffix?: string
}

const CountingNumber = ({ value, duration = 2, prefix = "", suffix = "" }: CountingNumberProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value.replace(/[^\d]/g, ''))
      const increment = end / (duration * 60) // 60fps
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  const formatNumber = (num: number) => {
    if (value.includes('K+')) return `${num.toLocaleString()}+`
    if (value.includes('%')) return `${num}%`
    return `${num.toLocaleString()}+`
  }

  return (
    <div ref={ref} className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
      {prefix}{formatNumber(count)}{suffix}
    </div>
  )
}

// Rest of the code remains exactly the same...
export default function WhyChooseUsPage() {
  const [activeSection, setActiveSection] = useState("transport")

  const sections = [
    {
      id: "transport",
      title: "Transport Facilities",
      icon: <Bus className="w-6 h-6" />,
      color: "from-blue-500/20 to-blue-600/20",
      content: {
        description: "Safe, reliable, and comfortable transportation for students across the city",
        features: [
          "GPS-enabled buses with live tracking",
          "Female attendants on all buses",
          "Regular vehicle maintenance and safety checks",
          "Designated pick-up/drop points across major areas",
          "Emergency medical kits and communication systems",
          "Trained and verified drivers with 5+ years experience"
        ],
        highlights: [
          "100% accident-free record",
          "Real-time parent notifications",
          "Air-conditioned buses available",
          "Separate buses for different age groups"
        ]
      }
    },
    {
      id: "hostel",
      title: "Hostel Facilities",
      icon: <Home className="w-6 h-6" />,
      color: "from-green-500/20 to-green-600/20",
      content: {
        description: "Home away from home with modern amenities and caring supervision",
        features: [
          "Separate hostel blocks for boys and girls",
          "24/7 security with CCTV surveillance",
          "Nutritious and hygienic mess facilities",
          "Common study rooms with high-speed internet",
          "Regular medical check-ups and doctor on call",
          "Recreational facilities and indoor games"
        ],
        highlights: [
          "Parent visiting lounge",
          "Laundry and housekeeping services",
          "Weekly cultural and recreational activities",
          "Dedicated wardens and counselors"
        ]
      }
    },
    {
      id: "library",
      title: "Library & Learning Resources",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500/20 to-purple-600/20",
      content: {
        description: "State-of-the-art digital and physical learning resources",
        features: [
          "30,000+ books including rare collections",
          "Digital library with 10,000+ e-books and journals",
          "Quiet study zones and group discussion rooms",
          "Computerized cataloging and borrowing system",
          "Regular author visits and reading programs",
          "Research assistance and reference services"
        ],
        highlights: [
          "International journal subscriptions",
          "Audio-visual learning resources",
          "Newspaper and magazine section",
          "Career guidance corner"
        ]
      }
    },
    {
      id: "sports",
      title: "Sports & Athletics",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-red-500/20 to-red-600/20",
      content: {
        description: "World-class sports infrastructure and training programs",
        features: [
          "Olympic-size swimming pool",
          "Indoor sports complex with basketball, badminton courts",
          "Football and cricket grounds with floodlights",
          "Gymnasium with modern equipment",
          "Table tennis, chess, and carrom facilities",
          "Yoga and meditation center"
        ],
        highlights: [
          "National-level coaches",
          "Annual inter-school sports meet",
          "Sports scholarships for talented students",
          "Sports medicine and physiotherapy"
        ]
      }
    },
    {
      id: "alumni",
      title: "Alumni Network",
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-500/20 to-orange-600/20",
      content: {
        description: "Strong global network of successful alumni",
        features: [
          "15,000+ alumni across 40+ countries",
          "Regular alumni meets and networking events",
          "Mentorship programs for current students",
          "Alumni scholarship funds",
          "Career guidance and placement assistance",
          "Annual alumni newsletter and directory"
        ],
        highlights: [
          "Alumni success stories featured regularly",
          "Industry connections and internships",
          "Research collaborations",
          "Entrepreneurship support"
        ]
      }
    },
    {
      id: "careers",
      title: "Career Development",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-indigo-500/20 to-indigo-600/20",
      content: {
        description: "Comprehensive career guidance and placement support",
        features: [
          "Career counseling from Grade 9 onwards",
          "Psychometric testing and aptitude analysis",
          "University and college application guidance",
          "Resume building and interview preparation",
          "Industry visits and corporate internships",
          "Skill development workshops"
        ],
        highlights: [
          "100+ university tie-ups worldwide",
          "95% placement record for graduates",
          "Entrepreneurship incubation center",
          "Alumni-led mentorship programs"
        ]
      }
    }
  ]

  const overallHighlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic Excellence",
      description: "Consistently 95%+ board results for 15 years"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe Environment",
      description: "24/7 security with CCTV and emergency response"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Holistic Development",
      description: "60+ clubs and activities for all-round growth"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Faculty",
      description: "200+ teachers with average 15+ years experience"
    }
  ]

  const statistics = [
    { number: "100+", label: "Buses & Vehicles", icon: "🚌", duration: 1.5 },
    { number: "500+", label: "Hostel Students", icon: "🏠", duration: 2 },
    { number: "30K+", label: "Library Books", icon: "📚", duration: 2.5 },
    { number: "50+", label: "Sports Coaches", icon: "🏅", duration: 1.2 },
    { number: "15K+", label: "Alumni Network", icon: "👥", duration: 3 },
    { number: "95%", label: "Placement Rate", icon: "💼", duration: 2 },
    { number: "60+", label: "Clubs & Activities", icon: "🎭", duration: 1.5 },
    { number: "25+", label: "Years Excellence", icon: "⭐", duration: 2 }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5"></div>
        
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
          className="absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6">
              Our Advantages
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why Choose <span className="text-secondary">Florescent?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover what sets us apart - state-of-the-art facilities, comprehensive support systems, 
              and a legacy of excellence in education.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Overall Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-secondary">Key Advantages</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive facilities and support systems that make Florescent the preferred choice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {overallHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 text-secondary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Navigation */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive <span className="text-secondary">Facilities</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our state-of-the-art facilities that support academic excellence and holistic development
            </p>
          </motion.div>

          {/* Navigation Tabs - Desktop */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-card rounded-xl p-2 border border-border">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-secondary text-secondary-foreground shadow' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {section.icon}
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Dropdown - Mobile */}
          <div className="md:hidden mb-8">
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>

          {/* Active Section Content */}
          <div className="max-w-6xl mx-auto">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${activeSection === section.id ? 'block' : 'hidden'}`}
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border">
                  <div className={`bg-gradient-to-r ${section.color} p-6 md:p-8`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-background/80 rounded-xl flex items-center justify-center">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{section.title}</h3>
                        <p className="text-muted-foreground mt-2">{section.content.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                          Key Features
                        </h4>
                        <ul className="space-y-4">
                          {section.content.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Highlights */}
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                          Special Highlights
                        </h4>
                        <div className="space-y-4">
                          {section.content.highlights.map((highlight, index) => (
                            <div key={index} className="bg-background/50 rounded-lg p-4 border border-border">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-foreground">{highlight}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section with Counting Animation */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-background rounded-xl shadow-sm mb-4">
                  <span className="text-xl md:text-2xl">{stat.icon}</span>
                </div>
                <CountingNumber 
                  value={stat.number} 
                  duration={stat.duration}
                />
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Parents & Students <span className="text-secondary">Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Hear from our community about their experience with Florescent facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The transport system gives me peace of mind. Real-time tracking and professional staff make it so convenient.",
                name: "Mrs. Sharma",
                role: "Parent of Grade 5 student",
                aspect: "Transport"
              },
              {
                quote: "Library resources are exceptional. My research project was successful thanks to the extensive digital collection.",
                name: "Rohan Patel",
                role: "Grade 12 Student",
                aspect: "Library"
              },
              {
                quote: "Sports facilities helped my daughter win national level competitions. The coaching is world-class.",
                name: "Mr. Verma",
                role: "Parent of National Athlete",
                aspect: "Sports"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <div className="text-4xl text-secondary/20 mb-4">"</div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="mt-2">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                      {testimonial.aspect}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Advantage */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                The <span className="text-secondary">Florescent Difference</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4">Traditional Schools</h4>
                  <ul className="space-y-3">
                    {[
                      "Limited infrastructure",
                      "Basic transportation",
                      "Minimal career guidance",
                      "Standard library",
                      "Basic sports facilities",
                      "Limited alumni network"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="text-destructive mr-3 mt-1">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-4">Florescent Public School</h4>
                  <ul className="space-y-3">
                    {[
                      "State-of-the-art facilities",
                      "GPS-enabled safe transport",
                      "Comprehensive career development",
                      "Digital + physical library",
                      "Olympic-standard sports complex",
                      "Global alumni network"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="text-secondary mr-3 mt-1">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Experience the Florescent Advantage
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a campus tour to see our facilities firsthand and discover 
              how we can support your child's educational journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Campus Visit
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary/10 transition-all duration-300">
                Speak with Admissions
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Still have questions? Call our admissions helpline at 
                <span className="text-secondary font-medium ml-1">+91-9876543210</span> 
                or email <span className="text-secondary font-medium">visit@florescent.edu.in</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}