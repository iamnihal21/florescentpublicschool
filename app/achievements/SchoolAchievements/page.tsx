"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Trophy, Award, Star, Medal, Target,
  TrendingUp, Users, Globe, BookOpen,
  Calendar, Filter, Search, Share2,
  ChevronRight, TrendingDown, BarChart3
} from "lucide-react"

export default function SchoolAchievementsPage() {
  const [activeYear, setActiveYear] = useState("2024")
  const [activeCategory, setActiveCategory] = useState("all")

  const years = ["2024", "2023", "2022", "2021", "2020"]
  
  const categories = [
    { id: "all", label: "All Categories", count: 48 },
    { id: "academic", label: "Academic Excellence", count: 18 },
    { id: "sports", label: "Sports", count: 12 },
    { id: "cultural", label: "Cultural", count: 10 },
    { id: "infrastructure", label: "Infrastructure", count: 5 },
    { id: "community", label: "Community Service", count: 3 },
  ]

  const majorAchievements = [
    {
      id: 1,
      title: "Best School Award 2024",
      category: "academic",
      year: "2024",
      award: "National Level",
      description: "Recognized as the Best CBSE School in North India by Education Today Magazine",
      impact: "Ranked #1 among 500+ schools in the region",
      icon: Trophy,
      color: "bg-yellow-500/10 text-yellow-500"
    },
    {
      id: 2,
      title: "Green School Certification",
      category: "infrastructure",
      year: "2023",
      award: "International",
      description: "Awarded Platinum Certification for sustainable campus practices",
      impact: "Reduced carbon footprint by 40%",
      icon: Globe,
      color: "bg-green-500/10 text-green-500"
    },
    {
      id: 3,
      title: "National Sports Championship",
      category: "sports",
      year: "2024",
      award: "National Level",
      description: "Won Overall Championship in CBSE National Sports Meet",
      impact: "25 Gold, 18 Silver, 12 Bronze medals",
      icon: Medal,
      color: "bg-blue-500/10 text-blue-500"
    },
  ]

  const academicAchievements = [
    {
      title: "100% Board Results",
      year: "2024",
      percentage: "100%",
      description: "All students passed CBSE Board Exams with distinction",
      subjects: ["Science: 98.2%", "Commerce: 97.8%", "Arts: 96.5%"],
      trend: "up"
    },
    {
      title: "Top 10 National Ranks",
      year: "2023",
      percentage: "8",
      description: "8 students secured positions in top 10 national ranks",
      subjects: ["JEE Advanced", "NEET", "NTSE"],
      trend: "up"
    },
    {
      title: "International Olympiad Medals",
      year: "2024",
      percentage: "15",
      description: "Students won medals in International Science Olympiads",
      subjects: ["Physics: 3 Gold", "Chemistry: 2 Gold", "Mathematics: 4 Silver"],
      trend: "up"
    },
  ]

  const infrastructureAchievements = [
    {
      title: "Smart Classrooms",
      count: "48",
      description: "All classrooms equipped with smart boards and digital learning tools",
      icon: BookOpen
    },
    {
      title: "Science Labs",
      count: "8",
      description: "State-of-the-art laboratories for Physics, Chemistry, Biology and Computer Science",
      icon: Target
    },
    {
      title: "Sports Facilities",
      count: "15+",
      description: "Olympic-size swimming pool, athletics track, indoor stadium",
      icon: Trophy
    },
  ]

  const rankings = [
    { category: "Overall Ranking", rank: "#1", outOf: "500+", change: "+2" },
    { category: "Academic Excellence", rank: "#1", outOf: "500+", change: "+1" },
    { category: "Sports Facilities", rank: "#3", outOf: "500+", change: "+3" },
    { category: "Infrastructure", rank: "#2", outOf: "500+", change: "+1" },
    { category: "Faculty Quality", rank: "#1", outOf: "500+", change: "0" },
    { category: "Student Satisfaction", rank: "#1", outOf: "500+", change: "+1" },
  ]

  const timelineAchievements = [
    { year: "2024", title: "Best School Award", description: "National recognition" },
    { year: "2023", title: "Green School Platinum", description: "Environmental certification" },
    { year: "2022", title: "International Sports Win", description: "Global championship" },
    { year: "2021", title: "Digital Campus Award", description: "Technology integration" },
    { year: "2020", title: "Community Service Award", description: "Social impact" },
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
            <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
              Excellence & Recognition
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              School <span className="text-chart-1">Achievements</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Celebrating excellence, innovation, and remarkable accomplishments in education
            </p>
            <div className="w-24 h-1 bg-chart-1 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeYear === year
                      ? 'bg-chart-1 text-chart-1-foreground'
                      : 'bg-card text-foreground border border-border hover:bg-muted'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-foreground mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-chart-1 text-chart-1-foreground shadow'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {category.label}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-chart-1-foreground/20'
                        : 'bg-muted'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-chart-1" />
                Major Achievements
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {majorAchievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${achievement.color} rounded-xl flex items-center justify-center`}>
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${achievement.color}`}>
                          {achievement.award}
                        </span>
                        <div className="text-sm text-muted-foreground mt-1">{achievement.year}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    
                    <div className="bg-muted rounded-lg p-4 mb-4">
                      <div className="text-sm font-medium text-foreground">Impact:</div>
                      <div className="text-sm text-muted-foreground">{achievement.impact}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{achievement.category}</span>
                      <button className="flex items-center gap-2 text-chart-1 hover:text-chart-1/80">
                        Read More <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Academic Excellence</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {academicAchievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-foreground">{item.percentage}</div>
                      <div className={`p-2 rounded-full ${item.trend === 'up' ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                        {item.trend === 'up' ? (
                          <TrendingUp className="w-5 h-5 text-green-500" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.subjects.map((subject, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground">• {subject}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Rankings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-chart-1" />
                School Rankings
              </h2>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rankings.map((ranking, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <div className="font-medium text-foreground">{ranking.category}</div>
                        <div className="text-sm text-muted-foreground">Among {ranking.outOf} schools</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-bold text-foreground">{ranking.rank}</div>
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            ranking.change.startsWith('+') 
                              ? 'bg-green-500/10 text-green-500' 
                              : ranking.change === '0'
                              ? 'bg-yellow-500/10 text-yellow-500'
                              : 'bg-red-500/10 text-red-500'
                          }`}>
                            {ranking.change}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Infrastructure Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Infrastructure Milestones</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {infrastructureAchievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-chart-1" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{item.count}</div>
                        <div className="text-sm text-muted-foreground">Count</div>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievement Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Achievement Timeline</h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-chart-1 via-chart-2 to-chart-3 transform translate-x-6 hidden md:block"></div>
                
                <div className="space-y-8">
                  {timelineAchievements.map((item, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-1/2 w-4 h-4 bg-chart-1 rounded-full border-4 border-background transform -translate-y-1/2 translate-x-4"></div>
                      
                      <div className="ml-12 md:ml-16 bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <div className="text-lg font-bold text-foreground mb-2">{item.title}</div>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                          <div className="px-4 py-2 bg-chart-1/10 text-chart-1 rounded-lg font-medium">
                            {item.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              By the <span className="text-chart-1">Numbers</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "National Awards", value: "48", icon: Award },
                { label: "International Awards", value: "12", icon: Globe },
                { label: "Years of Excellence", value: "25+", icon: Calendar },
                { label: "Faculty Awards", value: "85", icon: Users },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 bg-chart-1/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="w-6 h-6 text-chart-1" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}