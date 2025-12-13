"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { GraduationCap, Heart, Award, Users, Briefcase, TrendingUp, Shield, Coffee, Globe, Zap, BookOpen, Home } from "lucide-react"

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

  useState(() => {
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
  })

  const formatNumber = (num: number) => {
    if (value.includes('K+')) return `${num.toLocaleString()}+`
    if (value.includes('%')) return `${num}%`
    if (value.includes('+')) return `${num.toLocaleString()}+`
    return `${num.toLocaleString()}`
  }

  return (
    <div ref={ref} className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
      {prefix}{formatNumber(count)}{suffix}
    </div>
  )
}

export default function CareerPage() {
  const [activeGrowthArea, setActiveGrowthArea] = useState("training")

  const growthAreas = [
    {
      id: "training",
      title: "Professional Training",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-500/20 to-blue-600/20",
      description: "Continuous learning and skill enhancement programs",
      features: [
        "Annual international conference attendance",
        "Monthly workshop series with experts",
        "Online course subscriptions (Coursera, Udemy)",
        "Research grant opportunities",
        "Peer learning circles",
        "Certification programs"
      ]
    },
    {
      id: "leadership",
      title: "Leadership Development",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500/20 to-purple-600/20",
      description: "Pathways to administrative and leadership roles",
      features: [
        "Mentorship from senior leadership",
        "Department head preparation program",
        "Project management training",
        "Strategic planning workshops",
        "Committee leadership opportunities",
        "School management exposure"
      ]
    },
    {
      id: "research",
      title: "Research & Innovation",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500/20 to-green-600/20",
      description: "Support for educational research and innovation",
      features: [
        "Dedicated research funding",
        "Publication support and guidance",
        "Innovation lab access",
        "Curriculum development projects",
        "Conference presentation opportunities",
        "Collaboration with universities"
      ]
    },
    {
      id: "global",
      title: "Global Exposure",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500/20 to-orange-600/20",
      description: "International opportunities and collaborations",
      features: [
        "Student exchange program coordination",
        "International school partnerships",
        "Global curriculum training",
        "Foreign language certification",
        "Cultural immersion programs",
        "Online global classrooms"
      ]
    }
  ]

  const benefits = [
    {
      category: "Financial Benefits",
      items: [
        {
          title: "Competitive Salary",
          description: "Above industry average with annual increments",
          icon: <Briefcase className="w-6 h-6" />,
          highlight: "Upto 15% annual increment"
        },
        {
          title: "Performance Bonus",
          description: "Quarterly and annual performance incentives",
          icon: <Award className="w-6 h-6" />,
          highlight: "Performance-linked rewards"
        },
        {
          title: "Retirement Benefits",
          description: "Provident fund and pension schemes",
          icon: <Shield className="w-6 h-6" />,
          highlight: "Retirement security"
        }
      ]
    },
    {
      category: "Health & Wellness",
      items: [
        {
          title: "Health Insurance",
          description: "Comprehensive medical coverage for family",
          icon: <Heart className="w-6 h-6" />,
          highlight: "Family coverage included"
        },
        {
          title: "Wellness Programs",
          description: "Yoga, meditation, and fitness facilities",
          icon: <Zap className="w-6 h-6" />,
          highlight: "On-campus wellness center"
        },
        {
          title: "Mental Health Support",
          description: "Counseling services and stress management",
          icon: <Coffee className="w-6 h-6" />,
          highlight: "Professional counseling"
        }
      ]
    },
    {
      category: "Work-Life Balance",
      items: [
        {
          title: "Flexible Timings",
          description: "Academic schedule with school holidays",
          icon: <Home className="w-6 h-6" />,
          highlight: "School holiday schedule"
        },
        {
          title: "Parent Benefits",
          description: "Child education discounts and childcare",
          icon: <Users className="w-6 h-6" />,
          highlight: "Tuition fee concession"
        },
        {
          title: "Leave Policy",
          description: "Generous paid leaves and sabbaticals",
          icon: <Globe className="w-6 h-6" />,
          highlight: "Sabbatical opportunities"
        }
      ]
    }
  ]

  const testimonials = [
    {
      quote: "Started as a junior teacher, now heading the Science Department. The growth opportunities here are exceptional.",
      name: "Dr. Anjali Sharma",
      role: "Head of Science Department",
      tenure: "8 Years",
      avatar: "👩‍🏫"
    },
    {
      quote: "The professional development programs transformed my teaching methodology. I've presented papers at 3 international conferences.",
      name: "Mr. Rajesh Kumar",
      role: "Senior Mathematics Teacher",
      tenure: "6 Years",
      avatar: "👨‍🏫"
    },
    {
      quote: "Best decision of my career. The work culture, benefits, and growth opportunities are unparalleled in the education sector.",
      name: "Ms. Priya Patel",
      role: "Primary Coordinator",
      tenure: "5 Years",
      avatar: "👩‍💼"
    }
  ]

  const careerStats = [
    { number: "200+", label: "Faculty Members", icon: "👩‍🏫", duration: 2 },
    { number: "85%", label: "Retention Rate", icon: "💼", duration: 2.5 },
    { number: "50+", label: "Promotions/Yr", icon: "📈", duration: 1.5 },
    { number: "25+", label: "Training Programs", icon: "🎓", duration: 2 },
    { number: "15+", label: "Leadership Roles", icon: "👥", duration: 1.8 },
    { number: "100%", label: "Health Coverage", icon: "❤️", duration: 2.2 }
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
            <span className="inline-block px-4 py-2 bg-secondary/10 text-accent rounded-full text-sm font-semibold mb-6">
              Career Opportunities
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Grow With <span className="text-accent">Florescent</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join a community of passionate educators where professional growth meets meaningful impact. 
              Build your career while shaping future generations.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Career Statistics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {careerStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-background rounded-xl shadow-sm mb-4">
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

      {/* Professional Growth Areas */}
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
              Career <span className="text-accent">Growth Paths</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Structured development programs to advance your career in education
            </p>
          </motion.div>

          {/* Growth Area Navigation */}
          <div className="hidden md:flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-card rounded-xl p-2 border border-border">
              {growthAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setActiveGrowthArea(area.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeGrowthArea === area.id 
                      ? 'bg-secondary text-accent-foreground shadow' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {area.icon}
                  {area.title}
                </button>
              ))}
            </div>
          </div>

          {/* Growth Area Dropdown - Mobile */}
          <div className="md:hidden mb-8">
            <select
              value={activeGrowthArea}
              onChange={(e) => setActiveGrowthArea(e.target.value)}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground"
            >
              {growthAreas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.title}
                </option>
              ))}
            </select>
          </div>

          {/* Active Growth Area Content */}
          <div className="max-w-6xl mx-auto">
            {growthAreas.map((area) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${activeGrowthArea === area.id ? 'block' : 'hidden'}`}
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border">
                  <div className={`bg-gradient-to-r ${area.color} p-6 md:p-8`}>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-background/80 rounded-xl flex items-center justify-center">
                        {area.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{area.title}</h3>
                        <p className="text-muted-foreground mt-2">{area.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                          Development Opportunities
                        </h4>
                        <ul className="space-y-4">
                          {area.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-8 h-8 bg-secondary/10 text-accent rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                {index + 1}
                              </div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-foreground mb-4">Success Stories</h4>
                        <div className="space-y-4">
                          {[
                            "Teachers promoted to department heads",
                            "Research papers published in journals",
                            "International conference presentations",
                            "Curriculum development leadership"
                          ].map((story, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                ✓
                              </div>
                              <span className="text-foreground/80">{story}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 p-4 bg-background/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Average tenure increase:</span> 3.5 years for teachers who participate in growth programs
                          </p>
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

      {/* Comprehensive Benefits */}
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
              Employee <span className="text-accent">Benefits</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We believe in taking care of our educators so they can focus on what matters most - teaching
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors duration-300">
                        <div className="w-12 h-12 bg-secondary/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                            {item.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Perks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Additional <span className="text-accent">Perks</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🏫", title: "On-campus Housing", desc: "Subsidized accommodation" },
                { icon: "🍎", title: "Free Meals", desc: "Daily nutritious meals" },
                { icon: "📚", title: "Resource Access", desc: "Library & lab facilities" },
                { icon: "🎯", title: "Awards", desc: "Recognition programs" },
                { icon: "🚌", title: "Transport", desc: "Staff bus service" },
                { icon: "👨‍👩‍👧", title: "Family Events", desc: "Quarterly family days" },
                { icon: "💻", title: "Tech Support", desc: "Latest devices & software" },
                { icon: "🌿", title: "Green Campus", desc: "Healthy work environment" }
              ].map((perk, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-background rounded-xl mb-3">
                    <span className="text-xl">{perk.icon}</span>
                  </div>
                  <div className="font-medium text-foreground text-sm">{perk.title}</div>
                  <div className="text-xs text-muted-foreground">{perk.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
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
              Success <span className="text-accent">Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Hear from our faculty members about their career journey at Florescent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-accent font-medium mt-1">
                      {testimonial.tenure} at Florescent
                    </div>
                  </div>
                </div>
                
                <div className="text-3xl text-accent/20 mb-4">"</div>
                <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary/10 text-accent rounded-full text-xs font-medium">
                      Career Growth
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      Professional Development
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      Work Culture
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path Visualization */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Typical <span className="text-accent">Career Path</span>
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    stage: "Year 1-2",
                    title: "Foundation & Training",
                    milestones: [
                      "Comprehensive orientation",
                      "Mentorship program",
                      "Classroom management",
                      "Curriculum familiarization"
                    ]
                  },
                  {
                    stage: "Year 3-5",
                    title: "Specialization & Growth",
                    milestones: [
                      "Subject expertise development",
                      "Leadership skill building",
                      "Advanced training programs",
                      "Committee participation"
                    ]
                  },
                  {
                    stage: "Year 6-8",
                    title: "Leadership & Impact",
                    milestones: [
                      "Department coordination",
                      "Curriculum development",
                      "Mentoring junior faculty",
                      "Research projects"
                    ]
                  },
                  {
                    stage: "Year 9+",
                    title: "Senior Leadership",
                    milestones: [
                      "Academic administration",
                      "Strategic planning",
                      "Policy development",
                      "International collaborations"
                    ]
                  }
                ].map((stage, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-32 flex-shrink-0">
                      <div className="bg-secondary text-accent-foreground px-4 py-2 rounded-lg font-bold text-center">
                        {stage.stage}
                      </div>
                    </div>
                    <div className="flex-1 bg-background rounded-xl p-6 border border-border">
                      <h4 className="text-xl font-bold text-foreground mb-4">{stage.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {stage.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </div>
                            <span className="text-muted-foreground">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-background rounded-2xl p-8 md:p-12 border border-border shadow-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Grow With Us?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore current openings and take the next step in your educational career
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/carrier/openings"
                  className="px-8 py-4 bg-secondary text-accent-foreground font-bold rounded-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Current Openings
                </a>
                <button className="px-8 py-4 bg-transparent border-2 border-secondary text-accent font-bold rounded-lg hover:bg-secondary/10 transition-all duration-300">
                  Download Benefits Guide
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Have questions about career growth? Contact our HR department at 
                  <span className="text-accent font-medium ml-1">hr@florescent.edu.in</span> 
                  or call <span className="text-accent font-medium">+91-9876543211</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}