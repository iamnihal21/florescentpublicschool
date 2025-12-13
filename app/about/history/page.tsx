"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function HistoryPage() {
  const [activeDecade, setActiveDecade] = useState("1990s")

  const timelineData = [
    {
      decade: "1990s",
      year: "1995",
      title: "The Foundation",
      description: "Florescent Public School was founded by a group of visionary educators with a dream to create an institution that blends academic excellence with holistic development.",
      achievements: [
        "Started with 150 students and 12 teachers",
        "CBSE affiliation secured",
        "First campus building inaugurated"
      ],
      icon: "🏛️",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      decade: "2000s",
      year: "2002",
      title: "Expansion & Recognition",
      description: "The school expanded its infrastructure and gained recognition for innovative teaching methodologies and outstanding board results.",
      achievements: [
        "New science laboratories established",
        "First 100% board results achievement",
        "Sports complex inaugurated"
      ],
      icon: "🚀",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      decade: "2010s",
      year: "2015",
      title: "Digital Transformation",
      description: "Embraced technology in education with smart classrooms, digital libraries, and integrated learning management systems.",
      achievements: [
        "Smart classrooms implemented across all grades",
        "Digital library with 10,000+ e-books",
        "International student exchange program launched"
      ],
      icon: "💻",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      decade: "2020s",
      year: "2023",
      title: "Modern Excellence",
      description: "Achieved national recognition and expanded to offer comprehensive educational programs with state-of-the-art facilities.",
      achievements: [
        "National Award for Educational Excellence",
        "STEAM Lab and Innovation Center established",
        "Sustainable campus initiatives implemented"
      ],
      icon: "🏆",
      color: "from-orange-500/20 to-orange-600/20"
    }
  ]

  const milestones = [
    { year: "1998", title: "First Science Exhibition", description: "Inter-school competition launched" },
    { year: "2005", title: "Language Lab", description: "Modern language learning facility" },
    { year: "2012", title: "Green Campus Award", description: "Eco-friendly initiatives recognized" },
    { year: "2018", title: "Robotics Club", description: "STEM education enhancement" },
    { year: "2021", title: "Hybrid Learning", description: "Blended education model adopted" },
    { year: "2024", title: "AI Lab", description: "Artificial intelligence in curriculum" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        
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
          className="absolute top-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">History</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A legacy of educational excellence spanning decades, shaping minds and building futures since our inception.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Journey Through <span className="text-primary">Time</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Key milestones that define our growth and evolution as an institution
            </p>
          </motion.div>

          {/* Decade Selector - Desktop */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="inline-flex bg-card rounded-xl p-2 border border-border">
              {timelineData.map((item) => (
                <button
                  key={item.decade}
                  onClick={() => setActiveDecade(item.decade)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeDecade === item.decade ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                >
                  {item.decade}
                </button>
              ))}
            </div>
          </div>

          {/* Decade Selector - Mobile */}
          <div className="md:hidden mb-8">
            <select
              value={activeDecade}
              onChange={(e) => setActiveDecade(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
            >
              {timelineData.map((item) => (
                <option key={item.decade} value={item.decade}>
                  {item.decade}
                </option>
              ))}
            </select>
          </div>

          {/* Timeline Content */}
          <div className="max-w-6xl mx-auto">
            {timelineData.map((era, index) => (
              <motion.div
                key={era.decade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-12 md:mb-16 ${activeDecade === era.decade ? 'block' : 'hidden md:block'}`}
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
                  <div className={`bg-gradient-to-r ${era.color} p-6 md:p-8`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-background/80 rounded-xl flex items-center justify-center">
                        <span className="text-3xl">{era.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{era.year}</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{era.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {era.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {era.achievements.map((achievement, i) => (
                        <div key={i} className="bg-background rounded-lg p-4 border border-border">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="font-medium text-foreground">Achievement</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Key <span className="text-primary">Milestones</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Significant achievements and innovations throughout our history
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
              
              {/* Milestones */}
              <div className="space-y-8 md:space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Year Badge */}
                    <div className="w-24 h-24 flex-shrink-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center border-4 border-background z-10">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                        <div className="text-xs text-muted-foreground mt-1">Year</div>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mt-6 md:mt-0`}>
                      <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Legacy</span>
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  From humble beginnings to a nationally recognized institution, Florescent's journey 
                  has been guided by unwavering commitment to quality education and student development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our history is not just about years passed, but about lives transformed, innovations 
                  implemented, and communities strengthened through education.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15,000+</div>
                  <div className="text-sm text-muted-foreground">Alumni Worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">National Awards</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Founding Faculty", value: "12" },
                    { label: "Current Faculty", value: "200+" },
                    { label: "Initial Students", value: "150" },
                    { label: "Current Students", value: "2,500+" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-background rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                  <h4 className="font-bold text-foreground mb-2">Continuous Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    From a single building to a sprawling campus with modern facilities, 
                    our infrastructure has grown alongside our educational impact.
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Looking Ahead
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Our <span className="text-primary">Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As we honor our past, we continue to innovate for the future. Our commitment 
              remains strong: to provide world-class education that prepares students for 
              the challenges and opportunities of tomorrow.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { icon: "🌱", text: "Sustainable Campus" },
                { icon: "🤖", text: "AI Integration" },
                { icon: "🌍", text: "Global Partnerships" },
                { icon: "💡", text: "Innovation Labs" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
              Join us in writing the next chapter of educational excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow">
                Explore Admissions
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors duration-300">
                Visit Our Archives
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}