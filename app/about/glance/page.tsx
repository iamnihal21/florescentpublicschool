"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        
        {/* Animated Elements */}
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
          className="absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Leadership & Vision
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Guiding <span className="text-primary">Lights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Meet the visionary leaders who shape the future of Florescent with dedication, innovation, and excellence.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Director's Section */}
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
              Director's <span className="text-primary">Message</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Visionary leadership that transforms education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Director Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg sticky top-24">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍🏫</div>
                    <p className="text-sm text-muted-foreground">Director's Portrait</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Kirit Joshi</h3>
                  <p className="text-primary font-semibold mb-4">Educationalist | Academic Administrator</p>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <div className="text-3xl font-bold text-primary mb-1">47+</div>
                      <div className="text-sm text-muted-foreground">Years of Service</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-yellow-500">🏆</span>
                        <span className="text-sm font-medium">National Presidential Award</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-blue-500">🏆</span>
                        <span className="text-sm font-medium">State Best Teacher Award</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Director's Message & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8">
                {/* Director's Message */}
                <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">A Message from Our Director</h3>
                      <p className="text-muted-foreground text-sm">Wisdom from decades of educational leadership</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Education is not merely the acquisition of knowledge but the cultivation of wisdom, 
                      character, and humanity. At Florescent, we believe that every child is a unique 
                      potential waiting to be realized.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our approach blends traditional values with modern pedagogy, ensuring that our 
                      students not only excel academically but also grow as compassionate, responsible 
                      global citizens. We strive to create an environment where curiosity is nurtured, 
                      creativity is celebrated, and character is built.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-xl border-l-4 border-primary">
                      <p className="text-foreground italic">
                        "Education is the most powerful tool for nation-building. A teacher's duty 
                        extends far beyond the classroom—it's about shaping lives and building futures."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🏛️</span>
                      </div>
                      <h4 className="font-bold text-foreground">Leadership Roles</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Director, M.R. Patel Educational Campus
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Member, Gujarat School Quality Accreditation Council
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Teacher, Principal, Campus Director in leading schools
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">📚</span>
                      </div>
                      <h4 className="font-bold text-foreground">Contributions</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Author of multiple textbooks & educational materials
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Contributor to SCE Project of GSHSEB
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        Trained hundreds of teachers across Gujarat
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Publications & Philosophy */}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8">
                  <h4 className="text-xl font-bold text-foreground mb-4">Educational Philosophy</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "❤️", text: "Value-based education" },
                      { icon: "🌍", text: "Cultural awareness" },
                      { icon: "🛠️", text: "Life skills development" },
                      { icon: "🌱", text: "Social responsibility" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-background/50 p-3 rounded-lg">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-foreground text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">295+ articles</span> published on child development, 
                      education reform, and student ethics as a columnist.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Section */}
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
              Principal's <span className="text-primary">Message</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Dedicated leadership for academic excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Principal's Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 order-2 lg:order-1"
            >
              <div className="space-y-8">
                <div className="bg-background rounded-2xl p-6 md:p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Principal's Vision</h3>
                      <p className="text-muted-foreground text-sm">Shaping tomorrow's leaders today</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      As the Principal of Florescent Public School, my vision is to create a learning 
                      ecosystem that empowers every student to reach their fullest potential. We focus 
                      on holistic development—balancing academic rigor with emotional intelligence and 
                      ethical values.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our commitment is to provide an environment where innovation meets tradition, 
                      where technology enhances learning, and where every child feels valued, heard, 
                      and inspired to excel.
                    </p>
                    <div className="bg-secondary/5 p-4 rounded-xl border-l-4 border-secondary">
                      <p className="text-foreground italic">
                        "The role of an educator is to light the path, not to fill the vessel. 
                        At Florescent, we focus on nurturing curious minds and compassionate hearts."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Principal's Focus Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-bold text-foreground mb-4">Academic Excellence</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Innovative curriculum design
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Technology-integrated learning
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Personalized attention & mentoring
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h4 className="font-bold text-foreground mb-4">Student Development</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        Leadership programs
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        Co-curricular activities
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        Community service initiatives
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Principal Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 order-1 lg:order-2"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👩‍🏫</div>
                    <p className="text-sm text-muted-foreground">Principal's Portrait</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">[Principal's Name]</h3>
                  <p className="text-secondary font-semibold mb-4">Visionary Educator | School Leader</p>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-secondary/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-secondary">25+</div>
                        <div className="text-xs text-muted-foreground">Years Exp</div>
                      </div>
                      <div className="bg-accent/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-accent">1000+</div>
                        <div className="text-xs text-muted-foreground">Students Guided</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-yellow-500">🎖️</span>
                        <span className="text-sm font-medium">National Awardee</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-green-500">📘</span>
                        <span className="text-sm font-medium">Published Author</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                Shared <span className="text-primary">Educational Philosophy</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-foreground mb-4">Our Core Beliefs</h4>
                  <ul className="space-y-3">
                    {[
                      "Every child has unique potential",
                      "Education shapes character and competence",
                      "Learning extends beyond classrooms",
                      "Teachers are role models and mentors",
                      "Parents are partners in education"
                    ].map((belief, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span className="text-muted-foreground">{belief}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-foreground mb-4">Our Commitments</h4>
                  <ul className="space-y-3">
                    {[
                      "Safe and inclusive learning environment",
                      "Innovative teaching methodologies",
                      "Holistic student development",
                      "Continuous teacher training",
                      "Community engagement and service"
                    ].map((commitment, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-3 mt-1">•</span>
                        <span className="text-muted-foreground">{commitment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
              Connect With Our Leadership
            </h2>
            <p className="text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto">
              Have questions or want to learn more about our educational philosophy? 
              Our leadership team is here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow">
                Schedule Meeting
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors duration-300">
                Contact Office
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}