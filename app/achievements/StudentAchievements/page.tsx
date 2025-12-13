"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { 
  Trophy, Medal, Star, Award, Target,
  Users, BookOpen, TrendingUp, Filter,
  Search, Calendar, GraduationCap, Zap,
  ChevronRight, Eye, Share2, Heart
} from "lucide-react"

export default function StudentAchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [likedStudents, setLikedStudents] = useState<Set<number>>(new Set())

  const categories = [
    { id: "all", label: "All Achievements", count: 156 },
    { id: "academic", label: "Academic Excellence", count: 78 },
    { id: "sports", label: "Sports", count: 45 },
    { id: "cultural", label: "Cultural", count: 28 },
    { id: "olympiad", label: "Olympiads", count: 15 },
    { id: "community", label: "Community Service", count: 10 },
  ]

  const featuredStudents = [
    {
      id: 1,
      name: "Rahul Sharma",
      grade: "Grade 12",
      achievement: "National Science Olympiad Gold Medalist",
      category: "olympiad",
      year: "2024",
      description: "Secured All India Rank 1 in National Science Olympiad",
      imageColor: "bg-blue-500/10",
      likes: 245
    },
    {
      id: 2,
      name: "Priya Patel",
      grade: "Grade 11",
      achievement: "National Swimming Champion",
      category: "sports",
      year: "2024",
      description: "Won 5 Gold medals in National School Swimming Championship",
      imageColor: "bg-green-500/10",
      likes: 189
    },
    {
      id: 3,
      name: "Amit Kumar",
      grade: "Grade 10",
      achievement: "Young Scientist Award",
      category: "academic",
      year: "2024",
      description: "Awarded for innovative science project on renewable energy",
      imageColor: "bg-purple-500/10",
      likes: 156
    },
  ]

  const studentAchievements = [
    {
      id: 1,
      name: "Sneha Verma",
      grade: "Grade 12",
      achievement: "CBSE Topper - 99.8%",
      category: "academic",
      year: "2024",
      subjects: ["Physics: 100", "Chemistry: 99", "Mathematics: 100"],
      award: "Gold Medal"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      grade: "Grade 11",
      achievement: "National Chess Champion",
      category: "sports",
      year: "2024",
      subjects: ["Under-18 Category", "International Master Title"],
      award: "Championship Trophy"
    },
    {
      id: 3,
      name: "Neha Gupta",
      grade: "Grade 9",
      achievement: "National Dance Competition Winner",
      category: "cultural",
      year: "2024",
      subjects: ["Classical Dance", "Solo Performance"],
      award: "Best Performer"
    },
    {
      id: 4,
      name: "Rohan Singh",
      grade: "Grade 12",
      achievement: "International Mathematics Olympiad",
      category: "olympiad",
      year: "2023",
      subjects: ["Silver Medal", "Team India Member"],
      award: "International Medal"
    },
    {
      id: 5,
      name: "Ananya Reddy",
      grade: "Grade 10",
      achievement: "Environmental Activist Award",
      category: "community",
      year: "2024",
      subjects: ["Tree Plantation Drive", "Waste Management Project"],
      award: "Social Impact Award"
    },
    {
      id: 6,
      name: "Vikram Joshi",
      grade: "Grade 11",
      achievement: "Robotics Competition Winner",
      category: "academic",
      year: "2024",
      subjects: ["International Competition", "Innovation Award"],
      award: "Innovator Trophy"
    },
  ]

  const achievementStats = [
    { category: "Board Exam Toppers", count: "48", trend: "+12%" },
    { category: "Olympiad Medalists", count: "32", trend: "+8%" },
    { category: "Sports Champions", count: "56", trend: "+15%" },
    { category: "Cultural Awards", count: "28", trend: "+5%" },
  ]

  const monthlyHighlights = [
    {
      month: "March 2024",
      achievements: [
        "5 students qualified for International Science Olympiad",
        "Basketball team won state championship",
        "3 students published research papers"
      ]
    },
    {
      month: "February 2024",
      achievements: [
        "Music band won national competition",
        "8 students secured 100% in Board Exams",
        "Debate team won inter-school championship"
      ]
    },
    {
      month: "January 2024",
      achievements: [
        "Young Scientist Award winners",
        "Swimming team broke 3 national records",
        "Art exhibition featured 50 student artworks"
      ]
    },
  ]

  const toggleLike = (studentId: number) => {
    const newLiked = new Set(likedStudents)
    if (newLiked.has(studentId)) {
      newLiked.delete(studentId)
    } else {
      newLiked.add(studentId)
    }
    setLikedStudents(newLiked)
  }

  const filteredAchievements = studentAchievements.filter(achievement => {
    const matchesCategory = activeCategory === "all" || achievement.category === activeCategory
    const matchesSearch = searchQuery === "" || 
      achievement.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.achievement.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              Student Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Student <span className="text-secondary">Achievements</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Celebrating the remarkable accomplishments and talents of our students
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search student achievements..."
                  className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-chart-1"
                />
              </div>
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
                        ? 'bg-secondary text-secondary-foreground shadow'
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    {category.label}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-secondary-foreground/20'
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

      {/* Featured Students */}
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
                <Star className="w-8 h-8 text-secondary" />
                Featured Achievers
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredStudents.map((student, index) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 ${student.imageColor} rounded-full flex items-center justify-center`}>
                            <GraduationCap className="w-8 h-8 text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{student.name}</h3>
                            <p className="text-muted-foreground">{student.grade}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleLike(student.id)}
                          className={`p-2 rounded-full ${likedStudents.has(student.id) ? 'text-red-500' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                          <Heart className={`w-5 h-5 ${likedStudents.has(student.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <div className="mb-4">
                        <div className="text-lg font-bold text-foreground mb-2">{student.achievement}</div>
                        <p className="text-muted-foreground text-sm">{student.description}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            student.category === 'academic' ? 'bg-blue-500/10 text-blue-500' :
                            student.category === 'sports' ? 'bg-green-500/10 text-green-500' :
                            student.category === 'cultural' ? 'bg-purple-500/10 text-purple-500' :
                            'bg-yellow-500/10 text-yellow-500'
                          }`}>
                            {student.category}
                          </span>
                          <span className="text-sm text-muted-foreground">{student.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{student.likes + (likedStudents.has(student.id) ? 1 : 0)}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* All Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">All Achievements</h2>
                <div className="text-sm text-muted-foreground">
                  Showing {filteredAchievements.length} of {studentAchievements.length} achievements
                </div>
              </div>

              {filteredAchievements.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">No achievements found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAchievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{achievement.name}</h3>
                          <p className="text-sm text-muted-foreground">{achievement.grade}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            achievement.category === 'academic' ? 'bg-blue-500/10 text-blue-500' :
                            achievement.category === 'sports' ? 'bg-green-500/10 text-green-500' :
                            achievement.category === 'cultural' ? 'bg-purple-500/10 text-purple-500' :
                            'bg-yellow-500/10 text-yellow-500'
                          }`}>
                            {achievement.category}
                          </span>
                          <div className="text-xs text-muted-foreground mt-1">{achievement.year}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="font-semibold text-foreground mb-2">{achievement.achievement}</div>
                        <div className="space-y-1">
                          {achievement.subjects.map((subject, idx) => (
                            <div key={idx} className="text-sm text-muted-foreground">• {subject}</div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-secondary" />
                          <span className="text-sm font-medium">{achievement.award}</span>
                        </div>
                        <button className="text-secondary hover:text-secondary/80 text-sm font-medium">
                          View Details →
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Achievement Statistics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievementStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-foreground">{stat.count}</div>
                      <div className="flex items-center gap-1 text-green-500">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-medium">{stat.trend}</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.category}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Monthly Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Monthly Highlights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {monthlyHighlights.map((month, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{month.month}</h3>
                        <div className="text-sm text-muted-foreground">Key Achievements</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {month.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-chart-1/5 to-chart-2/5 rounded-2xl p-8 md:p-12 border border-border">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Your Success Story Starts Here
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every student has the potential to achieve greatness. Join our community of achievers and make your mark.
              </p>
              <button className="px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors duration-300">
                Submit Your Achievement
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}