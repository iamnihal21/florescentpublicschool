"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function AboutPage() {
   useEffect(() => {
    // Force navbar text to be dark
    const navbar = document.querySelector('header')
    if (navbar) {
      navbar.classList.add('text-foreground')
      navbar.classList.remove('text-white')
    }
    
    return () => {
      if (navbar) {
        navbar.classList.remove('text-foreground')
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5"></div>
        
        {/* Animated Orbs */}
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
              About Our Institution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">Florescent</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Where excellence meets innovation in education. A legacy of nurturing future leaders since our inception.
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
                Shaping <span className="text-primary">Future Leaders</span> Since 1995
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Florescent Public School stands as a beacon of academic excellence and holistic 
                  development in our community. For over two decades, we have been committed to 
                  providing an educational experience that transcends conventional learning.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our philosophy centers on creating a nurturing environment where every student 
                  discovers their potential, cultivates curiosity, and develops essential skills 
                  to thrive in an evolving world.
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
                  {/* Placeholder for school image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl md:text-7xl mb-4">🏫</div>
                      <p className="text-muted-foreground">Florescent Campus</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
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
              Our Guiding <span className="text-primary">Principles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              The foundation upon which we build excellence in education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
                    To be a premier educational institution that transforms young minds into 
                    visionary leaders, innovative thinkers, and compassionate global citizens.
                  </p>
                  <div className="bg-primary/5 p-4 md:p-6 rounded-xl border-l-4 border-primary">
                    <h4 className="font-bold text-primary mb-2 text-sm md:text-base">Core Aspirations</h4>
                    <ul className="space-y-2 text-foreground/80 text-sm md:text-base">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Pioneer in innovative teaching methodologies
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Global standards in holistic education
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Fostering lifelong learning and adaptability
                      </li>
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
                    To provide a dynamic learning environment that nurtures intellectual 
                    curiosity, fosters creativity, and instills strong ethical values.
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              The fundamental principles that guide every aspect of our educational philosophy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Excellence",
                description: "Striving for highest standards in academics and character",
                icon: "⭐"
              },
              {
                title: "Integrity",
                description: "Upholding honesty, ethics, and moral principles",
                icon: "⚖️"
              },
              {
                title: "Innovation",
                description: "Embracing creativity and forward-thinking approaches",
                icon: "💡"
              },
              {
                title: "Community",
                description: "Fostering collaboration and social responsibility",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl md:text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "25+", label: "Years of Excellence", icon: "📅" },
              { number: "5,000+", label: "Alumni Network", icon: "🎓" },
              { number: "200+", label: "Dedicated Faculty", icon: "👩‍🏫" },
              { number: "50+", label: "National Awards", icon: "🏆" }
            ].map((stat, index) => (
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
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
              Begin Your Journey With Us
            </h2>
            <p className="text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
              Discover how Florescent Public School can help shape your child's future through 
              holistic education and character building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow">
                Schedule a Visit
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}